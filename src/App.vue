<template>
  <v-app>
    <v-app-bar app color="primary" dark hide-on-scroll height="40">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="d-flex align-center">
        <v-img
          alt="scratch Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo_sm.png"
          transition="scale-transition"
          width="70"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        @click="
          () => {
            if (isLoaded) {
              this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
              if (IndexedDB.isSupported)
                IndexedDB.setItem('darkmode', this.$vuetify.theme.dark);
            }
          }
        "
        icon
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>

    <template v-if="isLoaded">
      <v-navigation-drawer app clipped v-model="drawer" temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group">
            <v-list-item to="/">
              <v-list-item-title> ホーム </v-list-item-title>
            </v-list-item>
            <v-list-item
                v-for="item in yearsList"
                :key="item"
                :to="`/scratch_view/${item}`"
            >
              <v-list-item-title> {{ item }}年生 </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

    </template>


    <v-main v-if="isLoaded" :style="themeColor">
      <router-view :scratchData="scratchData" />
    </v-main>
  </v-app>
</template>

<script>
const IndexedDB = (() => {
  let temp = require("./plugins/IndexedDB_module.js").indexeddb;
  return new temp();
})();

export default {
  name: "App",

  components: {},

  data: () => ({
    yearsList: [],
    isLoaded: false,

    IndexedDB: IndexedDB,

    scratchData: {},

    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  computed: {
    themeColor() {
      if (this.$vuetify.theme.dark) {
        return {
          background: "#222222",
          color: "#EEEEEE!important",
        };
      } else {
        return {
          background: "",
          color: "",
        };
      }
    },
  },

  methods:{
    getXHRresponce(...Input) {
      return new Promise((resolve) => {
        let fileURL = Input[0];
        let callback = Input[1] || undefined;
        let fileType = Input[2] || "json";

        let xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            if (this.response) {
              if (callback) callback(fileURL);
              resolve(this.response);
            }
          }
        };

        xmlHttpRequest.open("GET", fileURL, true);
        // @ts-ignore
        xmlHttpRequest.responseType = fileType;
        xmlHttpRequest.send(null);
      });
    },
  },

  async mounted() {
    await IndexedDB.init().catch((e) => {
      console.log(e);
    });
    if (IndexedDB.isSupported) {
      let darkmode = await IndexedDB.getItem("darkmode");
      if (typeof darkmode === "boolean") {
        this.$vuetify.theme.dark = darkmode;
      } else {
        IndexedDB.setItem("darkmode", false);
      }
    }
    this.scratchData = await this.getXHRresponce("./scratch_list.json")
    this.yearsList = (()=>{
      let objNameList = Object.getOwnPropertyNames(this.scratchData)
      for (let i=0;i<objNameList.length;i++){
        if(objNameList[i] === "__ob__"){
          objNameList.splice(i,1)
          break;
        }
      }
      return objNameList
    })()
    this.isLoaded = true;
  },
};
</script>
