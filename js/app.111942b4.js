(function(e){function t(t){for(var n,a,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-a0c56066":"7edd2821"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-a0c56066":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-a0c56066":"1eb6e174"}[e]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/scratch_list/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=this,n=t.$createElement,a=t._self._c||n;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:"",height:"40"}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"scratch Logo",contain:"",src:r("a1cc"),transition:"scale-transition",width:"70"}})],1),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(){t.isLoaded&&(e.$vuetify.theme.dark=!e.$vuetify.theme.dark,t.IndexedDB.isSupported&&t.IndexedDB.setItem("darkmode",e.$vuetify.theme.dark))}}},[a("v-icon",[t._v("mdi-theme-light-dark")])],1)],1),t.isLoaded?[a("v-navigation-drawer",{attrs:{app:"",clipped:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[a("v-list-item",{attrs:{to:"/"}},[a("v-list-item-title",[t._v(" ホーム ")])],1),t._l(t.yearsList,(function(e){return a("v-list-item",{key:e,attrs:{to:"/scratch_view/"+e}},[a("v-list-item-title",[t._v(" "+t._s(e)+"年生 ")])],1)}))],2)],1)],1)]:t._e(),t.isLoaded?a("v-main",{style:t.themeColor},[a("router-view",{attrs:{scratchData:t.scratchData,yearsList:t.yearsList}})],1):t._e()],2)},o=[],i=(r("a434"),r("7039"),r("d3b7"),r("96cf"),r("1da1")),s=function(){var e=r("9c58").indexeddb;return new e}(),c={name:"App",components:{},data:function(){return{yearsList:[],isLoaded:!1,IndexedDB:s,scratchData:{},drawer:!1,group:null}},watch:{group:function(){this.drawer=!1}},computed:{themeColor:function(){return this.$vuetify.theme.dark?{background:"#222222",color:"#EEEEEE!important"}:{background:"",color:""}}},methods:{getXHRresponce:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return new Promise((function(e){var r=t[0],n=t[1]||void 0,a=t[2]||"json",o=new XMLHttpRequest;o.onreadystatechange=function(){4===this.readyState&&200===this.status&&this.response&&(n&&n(r),e(this.response))},o.open("GET",r,!0),o.responseType=a,o.send(null)}))}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.init().catch((function(e){console.log(e)}));case 2:if(!s.isSupported){t.next=7;break}return t.next=5,s.getItem("darkmode");case 5:r=t.sent,"boolean"===typeof r?e.$vuetify.theme.dark=r:s.setItem("darkmode",!1);case 7:return t.next=9,e.getXHRresponce("./scratch_list.json");case 9:e.scratchData=t.sent,e.yearsList=function(){for(var t=Object.getOwnPropertyNames(e.scratchData),r=0;r<t.length;r++)if("__ob__"===t[r]){t.splice(r,1);break}return t}(),e.isLoaded=!0;case 12:case"end":return t.stop()}}),t)})))()}},u=c,l=r("2877"),d=r("6544"),f=r.n(d),p=r("7496"),h=r("40dc"),v=r("5bc1"),m=r("8336"),g=r("132d"),y=r("adda"),b=r("8860"),_=r("da13"),k=r("1baa"),w=r("5d23"),x=r("f6c4"),j=r("f774"),O=r("2fa4"),L=Object(l["a"])(u,a,o,!1,null,null,null),S=L.exports;f()(L,{VApp:p["a"],VAppBar:h["a"],VAppBarNavIcon:v["a"],VBtn:m["a"],VIcon:g["a"],VImg:y["a"],VList:b["a"],VListItem:_["a"],VListItemGroup:k["a"],VListItemTitle:w["a"],VMain:x["a"],VNavigationDrawer:j["a"],VSpacer:O["a"]});var P=r("f309");n["a"].use(P["a"]);var I=new P["a"]({theme:{dark:!1,themes:{light:{background:"#fcfcfc"},dark:{background:"#252525"}}}}),A=r("8c4f"),C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",[r("p",[e._v("以下のボタンから学年を選択してください")]),r("v-list",{attrs:{dense:""}},[r("v-list-item-group",{model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},e._l(e.yearsList,(function(t){return r("v-list-item",{key:t,staticClass:"mb-1",style:e.background_Color,attrs:{to:"/scratch_view/"+t}},[r("v-list-item-title",[e._v(" "+e._s(t)+"年生の作品 ")])],1)})),1)],1)],1)],1)],1)},V=[],E={props:["yearsList"],data:function(){return{group:null}},watch:{group:function(){this.drawer=!1}},computed:{background_Color:function(){return this.$vuetify.theme.dark?{background:"#333"}:{background:"#ddd"}}}},D=E,N=r("62ad"),B=r("a523"),T=r("0fd9"),$=Object(l["a"])(D,C,V,!1,null,null,null),M=$.exports;f()($,{VCol:N["a"],VContainer:B["a"],VList:b["a"],VListItem:_["a"],VListItemGroup:k["a"],VListItemTitle:w["a"],VRow:T["a"]}),n["a"].use(A["a"]);var R=new A["a"]({routes:[{path:"/",name:"home",component:M},{path:"/scratch_view/:id",name:"scratch_view",props:!0,component:function(){return r.e("chunk-a0c56066").then(r.bind(null,"b6fc"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:R,vuetify:I,render:function(e){return e(S)}}).$mount("#app")},"9c58":function(e,t,r){"use strict";r.r(t),r.d(t,"indexeddb",(function(){return i}));r("fb6a"),r("d3b7");var n=r("ade3"),a=r("d4ec"),o=r("bee2"),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"indexedDB",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"index";Object(a["a"])(this,e),this.storageName=t,this.indexName=r,this.keyPath="KeyName",this.isSupported=!1,this.__db}return Object(o["a"])(e,[{key:"init",value:function(){var e=this;return new Promise((function(t,r){var n=indexedDB.open(e.storageName);n.onblocked=function(e){return r(["onblocked",e])},n.onerror=function(e){return r(["onerror",e])},n.onupgradeneeded=function(t){return e.__createObjStore(t)},n.onsuccess=function(r){e.__db=r.target.result,e.isSupported=!0,t(["onsuccess",r])}}))}},{key:"setItem",value:function(){for(var e=this,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((function(t,a){var o;if(Array.isArray(r[0]))o=r[0];else{var i=r[0],s=r[1];o=[[i,s]]}for(var c=o.length,u=e.__getObjStore("readwrite"),l=0;l<o.length;l++){var d,f=o[l][0],p=o[l][1],h=u.put((d={},Object(n["a"])(d,e.keyPath,f),Object(n["a"])(d,"value",p),d));h.onsuccess=function(){c--,0===c&&t()},h.onerror=function(e){return a(["onerror",e])}}}))}},{key:"getItem",value:function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return new Promise((function(t){var n,a=function(){return Array.isArray(r[0])};if(a())n=r[0];else{var o=r[0];n=[o]}for(var i=e.__getObjStore("readonly"),s=n.length,c=new Array(n.length),u=function(e){var r=i.get(n[e]);r.onsuccess=function(){r.result?c[e]=r.result.value:c[e]=void 0,s--,0===s&&(a()?t(c):t(c[0]))}},l=0;l<n.length;l++)u(l)}))}},{key:"removeItem",value:function(e){var t=this;return new Promise((function(r,n){var a=t.__getObjStore("readwrite").delete(e);a.onsuccess=function(e){return r(["onsuccess",e])},a.onerror=function(e){return n(["onerror",e])}}))}},{key:"clear",value:function(){var e=this;return new Promise((function(t,r){e.__db.close();var n=indexedDB.deleteDatabase(e.storageName);n.onsuccess=function(e){return t(["onsuccess",e])},n.onerror=function(e){return r(["onerror",e])}}))}},{key:"getItemForwardMatch",value:function(e){var t=this;return new Promise((function(r,n){var a;"string"===typeof e?a=e.slice(0,-1)+String.fromCharCode(e.slice(-1).charCodeAt()+1):n('The only "type" that can be inputted is "String".');var o=IDBKeyRange.bound(e,a,!1,!0),i=t.__getObjStore("readonly"),s=[],c=i.openCursor(o);c.onsuccess=function(e){var t=e.target.result;t?(s.push(t.value),t.continue()):r(s)},c.onerror=function(e){return n(e)}}))}},{key:"getAllItem",value:function(){var e=this;return new Promise((function(t,r){var n=e.__getObjStore("readonly"),a=n.getAll();a.onsuccess=function(e){return t(e.target.result)},a.onerror=function(e){return r(["onerror"],e)}}))}},{key:"__getObjStore",value:function(e){return this.__db.transaction([this.indexName],e).objectStore(this.indexName)}},{key:"__createObjStore",value:function(e){e.target.result.createObjectStore(this.indexName,{keyPath:this.keyPath})}}]),e}()},a1cc:function(e,t,r){e.exports=r.p+"img/logo_sm.cf81f586.png"}});
//# sourceMappingURL=app.111942b4.js.map