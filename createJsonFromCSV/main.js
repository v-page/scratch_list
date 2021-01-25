const fs = require('fs');
let db_text = fs.readFileSync("./scratch.csv", 'utf-8');
let comment_text = fs.readFileSync("./comment.csv", 'utf-8');

const csv2json = (csv) => csv.split("\n").map(x => x.split(","));

const db_json = csv2json(db_text)
const comment_json = csv2json(comment_text)

let output = {};

//0はヘッダーのため1からスタート
for (let i = 1; i < db_json.length; i++) {
    const scratch_name = db_json[i][1]
    const schoolYear = scratch_name.match(/^\d/g)
    const schoolClassNum = scratch_name.match(/(?<=^\d)\d/g)
    const studentNum = scratch_name.match(/(?<=^\d{2})\d+/g)

    const nameAndComment = (() => {
        return comment_json.find(x => {
            let tmp = x[0].match(/(?<=^\s?)\d{4}/g);
                return tmp[0] === scratch_name
        })
    })()
    const studentTitle = nameAndComment[0].match(/(?<=^\s?\d{4})[\s\S]*$/g)
    const studentComment = (() => {
        return nameAndComment[1].replace("\r","")
    })()


    let output_tmp = {};

    output_tmp["schoolClassNum"] = Number(schoolClassNum[0])
    output_tmp["studentNum"] = Number(studentNum[0])
    output_tmp["url"] = (() => {
        let tmp_url = db_json[i][2]
        if (/\/embed$/.test(tmp_url) === false){
            tmp_url += "/embed"
        }
        return tmp_url;
    })() 
    output_tmp["name"] = scratch_name

    output_tmp["title"] = studentTitle[0]
    output_tmp["comment"] = studentComment

    if (output["" + schoolYear[0]] === undefined) {
        output["" + schoolYear[0]] = []  
    } 
    output["" + schoolYear[0]].push(output_tmp);
}
fs.writeFileSync("../scratch_list.json", JSON.stringify(output));
