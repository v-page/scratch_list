(function(e){function t(t){for(var n,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-6f7baade":"6ee888e9"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-6f7baade":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-6f7baade":"1bbdaac2"}[e]+".css",o=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/scratch_list/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=this,n=t.$createElement,a=t._self._c||n;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":"",height:"40"}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"scratch Logo",contain:"",src:r("a1cc"),transition:"scale-transition",width:"70"}})],1),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(){t.isLoaded&&(e.$vuetify.theme.dark=!e.$vuetify.theme.dark,t.IndexedDB.isSupported&&t.IndexedDB.setItem("darkmode",e.$vuetify.theme.dark))}}},[a("v-icon",[t._v("mdi-theme-light-dark")])],1)],1),t.isLoaded?[a("v-navigation-drawer",{attrs:{app:"",clipped:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[a("v-list-item",{attrs:{to:"/"}},[a("v-list-item-title",[t._v(" ホーム ")])],1),t._l(t.yearsList,(function(e){return a("v-list-item",{key:e,attrs:{to:"/scratch_view/"+e}},[a("v-list-item-title",[t._v(" "+t._s(e)+"年生 ")])],1)}))],2)],1)],1)]:t._e(),t.isLoaded?a("v-main",{style:t.themeColor},[a("router-view",{attrs:{scratchData:t.scratchData}})],1):t._e()],2)},o=[],i=(r("a434"),r("7039"),r("d3b7"),r("96cf"),r("1da1")),c=function(){var e=r("9c58").indexeddb;return new e}(),s={name:"App",components:{},data:function(){return{yearsList:[],isLoaded:!1,IndexedDB:c,scratchData:{},drawer:!1,group:null}},watch:{group:function(){this.drawer=!1}},computed:{themeColor:function(){return this.$vuetify.theme.dark?{background:"#222222",color:"#EEEEEE!important"}:{background:"",color:""}}},methods:{getXHRresponce:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return new Promise((function(e){var r=t[0],n=t[1]||void 0,a=t[2]||"json",o=new XMLHttpRequest;o.onreadystatechange=function(){4===this.readyState&&200===this.status&&this.response&&(n&&n(r),e(this.response))},o.open("GET",r,!0),o.responseType=a,o.send(null)}))}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.init().catch((function(e){console.log(e)}));case 2:if(!c.isSupported){t.next=7;break}return t.next=5,c.getItem("darkmode");case 5:r=t.sent,"boolean"===typeof r?e.$vuetify.theme.dark=r:c.setItem("darkmode",!1);case 7:return t.next=9,e.getXHRresponce("./scratch_list.json");case 9:e.scratchData=t.sent,e.yearsList=function(){for(var t=Object.getOwnPropertyNames(e.scratchData),r=0;r<t.length;r++)if("__ob__"===t[r]){t.splice(r,1);break}return t}(),e.isLoaded=!0;case 12:case"end":return t.stop()}}),t)})))()}},u=s,l=r("2877"),d=r("6544"),f=r.n(d),p=r("7496"),h=r("40dc"),v=r("5bc1"),m=r("8336"),g=r("132d"),b=r("adda"),y=r("8860"),w=r("da13"),_=r("1baa"),k=r("5d23"),x=r("f6c4"),j=r("f774"),O=r("2fa4"),S=Object(l["a"])(u,a,o,!1,null,null,null),P=S.exports;f()(S,{VApp:p["a"],VAppBar:h["a"],VAppBarNavIcon:v["a"],VBtn:m["a"],VIcon:g["a"],VImg:b["a"],VList:y["a"],VListItem:w["a"],VListItemGroup:_["a"],VListItemTitle:k["a"],VMain:x["a"],VNavigationDrawer:j["a"],VSpacer:O["a"]});var A=r("f309");n["a"].use(A["a"]);var L=new A["a"]({theme:{dark:!1,themes:{light:{background:"#fcfcfc"},dark:{background:"#252525"}}}}),I=r("8c4f"),C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",[r("p",[e._v("ホーム画面")]),e._v(" サークルのURL貼ったりできますがどうしましょう ")])],1)],1)},E=[],D=r("62ad"),N=r("a523"),V=r("0fd9"),B={},T=Object(l["a"])(B,C,E,!1,null,null,null),R=T.exports;f()(T,{VCol:D["a"],VContainer:N["a"],VRow:V["a"]}),n["a"].use(I["a"]);var $=new I["a"]({routes:[{path:"/",name:"home",component:R},{path:"/scratch_view/:id",name:"scratch_view",props:!0,component:function(){return r.e("chunk-6f7baade").then(r.bind(null,"b6fc"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:$,vuetify:L,render:function(e){return e(P)}}).$mount("#app")},"9c58":function(e,t,r){"use strict";r.r(t),r.d(t,"indexeddb",(function(){return i}));r("fb6a"),r("d3b7");var n=r("ade3"),a=r("d4ec"),o=r("bee2"),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"indexedDB",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"index";Object(a["a"])(this,e),this.storageName=t,this.indexName=r,this.keyPath="KeyName",this.isSupported=!1,this.__db}return Object(o["a"])(e,[{key:"init",value:function(){var e=this;return new Promise((function(t,r){var n=indexedDB.open(e.storageName);n.onblocked=function(e){return r(["onblocked",e])},n.onerror=function(e){return r(["onerror",e])},n.onupgradeneeded=function(t){return e.__createObjStore(t)},n.onsuccess=function(r){e.__db=r.target.result,e.isSupported=!0,t(["onsuccess",r])}}))}},{key:"setItem",value:function(){for(var e=this,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((function(t,a){var o;if(Array.isArray(r[0]))o=r[0];else{var i=r[0],c=r[1];o=[[i,c]]}for(var s=o.length,u=e.__getObjStore("readwrite"),l=0;l<o.length;l++){var d,f=o[l][0],p=o[l][1],h=u.put((d={},Object(n["a"])(d,e.keyPath,f),Object(n["a"])(d,"value",p),d));h.onsuccess=function(){s--,0===s&&t()},h.onerror=function(e){return a(["onerror",e])}}}))}},{key:"getItem",value:function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return new Promise((function(t){var n,a=function(){return Array.isArray(r[0])};if(a())n=r[0];else{var o=r[0];n=[o]}for(var i=e.__getObjStore("readonly"),c=n.length,s=new Array(n.length),u=function(e){var r=i.get(n[e]);r.onsuccess=function(){r.result?s[e]=r.result.value:s[e]=void 0,c--,0===c&&(a()?t(s):t(s[0]))}},l=0;l<n.length;l++)u(l)}))}},{key:"removeItem",value:function(e){var t=this;return new Promise((function(r,n){var a=t.__getObjStore("readwrite").delete(e);a.onsuccess=function(e){return r(["onsuccess",e])},a.onerror=function(e){return n(["onerror",e])}}))}},{key:"clear",value:function(){var e=this;return new Promise((function(t,r){e.__db.close();var n=indexedDB.deleteDatabase(e.storageName);n.onsuccess=function(e){return t(["onsuccess",e])},n.onerror=function(e){return r(["onerror",e])}}))}},{key:"getItemForwardMatch",value:function(e){var t=this;return new Promise((function(r,n){var a;"string"===typeof e?a=e.slice(0,-1)+String.fromCharCode(e.slice(-1).charCodeAt()+1):n('The only "type" that can be inputted is "String".');var o=IDBKeyRange.bound(e,a,!1,!0),i=t.__getObjStore("readonly"),c=[],s=i.openCursor(o);s.onsuccess=function(e){var t=e.target.result;t?(c.push(t.value),t.continue()):r(c)},s.onerror=function(e){return n(e)}}))}},{key:"getAllItem",value:function(){var e=this;return new Promise((function(t,r){var n=e.__getObjStore("readonly"),a=n.getAll();a.onsuccess=function(e){return t(e.target.result)},a.onerror=function(e){return r(["onerror"],e)}}))}},{key:"__getObjStore",value:function(e){return this.__db.transaction([this.indexName],e).objectStore(this.indexName)}},{key:"__createObjStore",value:function(e){e.target.result.createObjectStore(this.indexName,{keyPath:this.keyPath})}}]),e}()},a1cc:function(e,t,r){e.exports=r.p+"img/logo_sm.cf81f586.png"}});
//# sourceMappingURL=app.e1e251bf.js.map