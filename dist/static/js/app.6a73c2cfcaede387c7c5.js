webpackJsonp([2,0],[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}n(118),n(39),n(71),n(72);var s=n(20),i=o(s),a=n(70),r=o(a),u=n(68),c=o(u);new i.default({router:c.default,store:r.default,components:{}}).$mount("#app")},,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function s(t){var e=t.email,n=t.password;return console.log(b.default.serverUrl),h.default.http.post(b.default.serverUrl+"login",{email:e,pass:n}).then(function(t){return t.json()}).then(function(t){var e=t.token,n=t.user;return a(e,n),n})}function i(t){var e=(t.email,t.password,"JWT");return new f.default(function(t){t({token:e}),a(e)})}function a(t,e){localStorage.setItem("token",t),localStorage.setItem("user",(0,l.default)(e))}function r(){console.log("auth.module:signOut -> auth.service:signout => server-full:get.logout"),localStorage.removeItem("token"),localStorage.removeItem("user"),h.default.http.get(b.default.serverUrl+"logout")}function u(){return!!localStorage.getItem("token")}function c(t){u()?t():t(!1)}Object.defineProperty(e,"__esModule",{value:!0});var d=n(24),l=o(d),p=n(77),f=o(p),m=n(20),h=o(m),_=n(22),v=(o(_),n(37)),b=o(v);e.default={signin:s,signup:i,signout:r,setSession:a,isLoggedIn:u,protectRoute:c}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(24),i=o(s),a=n(20),r=o(a),u=n(37),c=o(u);e.default={updateSite:function(t){var e=(0,i.default)(t);return r.default.http.put(c.default.serverUrl+"data/sites",e).then(function(t){return t})},getSingleSite:function(t){return r.default.http.get(c.default.serverUrl+"data/sites/"+t).then(function(t){return t.json()}).then(function(t){return t})},getManySites:function(t){return console.log("sitePrev -> [site.service -> F:getManySites]",t),r.default.http.post(c.default.serverUrl+"data/sites/",{sitesToGet:t}).then(function(t){return t.json()}).then(function(t){return console.log("server-full -> [site.service -> F:getManySites] this is the server res",t),t})},makeNewSite:function(){console.log("make new site in site service")}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SIGN_OUT=e.SIGN_IN=void 0;var s,i=n(25),a=o(i),r=n(21),u=o(r),c=e.SIGN_IN="auth/SIGN_IN",d=e.SIGN_OUT="auth/SIGN_OUT",l={isLoggedIn:!!localStorage.getItem("token"),user:JSON.parse(localStorage.getItem("user"))},p=(s={},(0,a.default)(s,c,function(t,e){console.log("sinin.components:signin -> auth.modue:SIGN_IN this is user: ",e),t.user=e,t.isLoggedIn=!0}),(0,a.default)(s,d,function(t){console.log("auth.module:signOut -> auth.module:SIGN_OUT, about to change state.isLoggedin to false"),t.isLoggedIn=!1}),s),f={singnIn:function(t,e){var n=t.commit;console.log("user in signIn function",e),n(c,{user:e})},signOut:function(t){var e=t.commit;console.log("home.component:signOut -> auth.module:signOut =>> auth.service:signout no data to send");u.default.signout();console.log("authService -> auth.module:signOut => auth.module:SIGN_OUT"),e(d)}},m={isLoggedIn:function(t){return t.user.isLoggedIn},currUser:function(t){return t.user}};e.default={state:l,getters:m,actions:f,mutations:p}},,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={serverUrl:function(){var t="http://localhost:3003/";return t="/"}()}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.CHANGE_URL=e.CHANGE_NAME=void 0;var s,i=n(76),a=o(i),r=n(24),u=o(r),c=n(25),d=o(c),l=n(22),p=o(l),f=e.CHANGE_NAME="current-site/CHANGE_NAME",m=e.CHANGE_URL="current-site/CHANGE_URL",h="ADD_COMP",_="DELETE_COMP",v="UPDATE_PROPS",b="GET_SINGLE_SITE",g={mainArticlePreview:{name:"component-template1",type:"mainArticlePreview",props:{title:"component-template - first template",subtitle:"Powered by Vue.js",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis",button:"LEARN MORE",img_src:""}},circlePreview:{name:"component-template1",type:"circlePreview",props:{title:"component-template - secound template",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis",img_src:""}},shortArticlePreview:{name:"component-template1",type:"shortArticlePreview",props:{title:"component-template - third template",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis",button:"MORE",img_src:""}}},y={_id:"",siteInfo:{siteUrl:"",siteName:""},components:[{name:"",type:"",props:{}}]},C=(s={},(0,d.default)(s,f,function(t,e){console.log("payload",t),t.siteInfo.siteName=e}),(0,d.default)(s,m,function(t,e){t.siteInfo.siteUrl=e}),(0,d.default)(s,h,function(t,e){var n=e.newCompData,o=e.indexToInsert;t.components.splice(o,0,n)}),(0,d.default)(s,b,function(t,e){t._id=e._id,t.siteInfo=e.siteInfo,t.components=e.components}),(0,d.default)(s,v,function(t,e){var n=e.compIdx,o=e.textValue,s=e.propToChange;t.components[n].props[s]=o}),(0,d.default)(s,_,function(t,e){var n=e.type;t.components.splice(Number(n),1)}),s),w={addComp:function(t,e){var n=t.commit;console.log(e);var o=JSON.parse((0,u.default)(g[e.compType])),s=e.indexToInsert;n(h,{newCompData:o,indexToInsert:s})},deleteComp:function(t,e){var n=t.commit;n(_,{type:e})},updateProps:function(t,e){var n=t.commit;console.log(e),n(v,e)},getSite:function(t,e){var n=t.commit;p.default.getSingleSite(e).then(function(t){console.log("Got site: ",t),n(b,t)})},saveSite:function(){p.default.updateSite(y).then(function(t){console.log("save site",t)})}},I={templatesList:function(t){return(0,a.default)(g)}};e.default={state:y,actions:w,mutations:C,getters:I}},function(t,e){"use strict";console.log("utilities loaded")},,,,,,,,,,,,,,,,function(t,e,n){var o,s;n(121),o=n(61);var i=n(151);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-11a80893",t.exports=o},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"circlePreview",props:{editable:"",componentIdx:{require:!0,type:Number},dataProps:{type:Object,required:!0}},methods:{updateCompProps:function(t,e){var n=t.target.outerText,o=this.componentIdx;console.log(e),this.$store.dispatch("updateProps",{compIdx:o,textValue:n,propToChange:e})},deleteSingleComp:function(){var t=this.componentIdx;this.$store.dispatch("deleteComp",t)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mainArticlePreview",props:{editable:"",componentIdx:{require:!0,type:Number},dataProps:{type:Object,required:!0}},methods:{updateCompProps:function(t,e){var n=t.target.outerText,o=this.componentIdx;console.log(e),this.$store.dispatch("updateProps",{compIdx:o,textValue:n,propToChange:e})},deleteSingleComp:function(){var t=this.componentIdx;this.$store.dispatch("deleteComp",t)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"shortArticlePreview",props:{editable:"",componentIdx:{require:!0,type:Number},dataProps:{type:Object,required:!0}},methods:{updateCompProps:function(t,e){var n=t.target.outerText,o=this.componentIdx;console.log(e),this.$store.dispatch("updateProps",{compIdx:o,textValue:n,propToChange:e})},deleteSingleComp:function(){var t=this.componentIdx;this.$store.dispatch("deleteComp",t)}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(26),i=o(s),a=n(141),r=o(a),u=n(140),c=o(u),d=n(142),l=o(d),p=n(4);e.default={props:{editable:"",components:{require:!0,type:Array}},data:function(){return{openedDropdownIndex:-1}},created:function(){},methods:{toggleDropDown:function(t,e){this.openedDropdownIndex===e?this.openedDropdownIndex=-1:this.openedDropdownIndex=e},addSingleComp:function(t){var e=t.target.outerText,n=+event.target.value+1;console.log("index to insert",e),this.$store.dispatch("addComp",{compType:e,indexToInsert:n})}},computed:(0,i.default)({},(0,p.mapGetters)(["templatesList"])),components:{MainArticlePreview:r.default,CirclePreview:c.default,ShortArticlePreview:l.default}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(139),i=o(s);e.default={props:{editable:"",components:{require:!0,type:Array}},created:function(){},methods:{},computed:{},components:{ComponentTemplateList:i.default}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(26),i=o(s),a=n(4);e.default={name:"home-component",data:function(){return{}},methods:{makeNewSite:function(){console.log("make new site"),this.$store.dispatch("makeNewSite")},signOut:function(){var t=this;console.log(" home.component.html -> home.component:signOut =>> auth.module:signOut"),this.$store.dispatch("signOut").then(function(e){t.$router.push("/")})}},computed:(0,i.default)({},(0,a.mapGetters)(["currUser","sitesToPrevFunc","getDefaultSiteId","isLoggedIn"])),watch:{},components:{},created:function(){this.$store.dispatch("getSites",this.currUser.user.sites)}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(26),i=o(s),a=n(4),r=n(21),u=o(r),c=n(23);e.default={name:"main-nav",props:{editable:"",siteInfo:{require:!0,type:Object}},data:function(){return{}},created:function(){var t=this.$route.params.id;this.$store.dispatch("getSite",t)},methods:(0,i.default)({signout:function(){u.default.signout(),this.$store.commit(c.SIGN_OUT),this.$router.push("/")},getSingleSite:function(){var t=this.$route.params.id;this.$store.dispatch("getSite",t)},showEditMode:function(){var t=!0;this.$emit("changeEditMode",t)},showPreviewMode:function(){var t=!1;this.$emit("changeEditMode",t)},showPublishMode:function(){}},(0,a.mapMutations)({})),computed:(0,i.default)({},(0,a.mapGetters)([]),{siteId:function(){return this.$store.state.site._id},currUser:function(){return this.$store.getters.currUser}})}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(144),i=o(s),a=n(148),r=o(a),u=n(55),c=o(u);n(4);e.default={data:function(){return{editable:!0}},methods:{changeEditModeFunc:function(t){console.log("edite mode methods",t),this.editable=t}},created:function(){},computed:{count:function(){return this.$store.state.count},siteInfo:function(){return this.$store.state.site.siteInfo},components:function(){return this.$store.state.site.components},currUser:function(){return this.$store.getters.currUser}},components:{MainNav:i.default,ToolBar:r.default,Editor:c.default}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(55),i=o(s),a=n(39);o(a),n(4);e.default={name:"publish-page",data:function(){return{}},created:function(){var t=this.$route.params.id;console.log("here is the id to get: ",t),this.$store.dispatch("getSite",t)},methods:{},computed:{siteInfo:function(){return this.$store.state.site.siteInfo},components:function(){return this.$store.state.site.components}},components:{Editor:i.default}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(21),i=o(s);n(23);e.default={mounted:function(){},data:function(){return{user:{email:"puki@gmail.com",password:"1234"},error:""}},methods:{signin:function(t){var e=this;this.$validator.validateAll(),this.errors.any()||i.default.signin(t).then(function(t){console.log("before dispatch signIn insign.components"),e.$store.dispatch("singnIn",t)}).then(function(t){e.$router.push("/home")}).catch(function(t){t.json().then(function(t){return e.error=t.error})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(38);e.default={props:{siteInfo:{require:!0,type:Object}},data:function(){return{}},methods:{updateName:function(t){this.$store.dispatch("updateName",t.target.value)},updateURL:function(t){this.$store.dispatch("updateUrl",t.target.value)},saveSite:function(){this.$store.dispatch("saveSite")}},components:{}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(56),i=o(s),a=n(145),r=o(a),u=n(146),c=o(u),d=n(143),l=o(d),p=n(147),f=o(p),m=[{path:"/home",name:"home",component:l.default},{path:"/main/:id",name:"main",component:r.default},{path:"/",name:"signin",component:f.default},{path:"/published/:id",name:"published",component:c.default},{path:"*",redirect:{name:"main"}}],h=new i.default({mode:"history",routes:m});e.default=h},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(25),i=o(s),a=n(78),r=o(a),u=n(22),c=o(u),d="GET_SITES_PREV",l={sitesPrev:[],defualtSiteId:"587e2fb49f8d447e4e1cbb55"},p=(0,i.default)({},d,function(t,e){var n,o;(n=console).log.apply(n,["coming from dispatch getManySites"].concat((0,r.default)(e))),t.sitesPrev=[],(o=t.sitesPrev).push.apply(o,(0,r.default)(e))}),f={getSites:function(t,e){var n=t.commit;console.log("home.component.js -> [sitesPrev.module -> F:getSites =>> site.service ]",e),c.default.getManySites(e).then(function(t){console.log("site.service -> [sitePrev -> F:getManySites] =>> GET_SITES_PREV",t),n(d,t)})},makeNewSite:function(t,e){t.commit;console.log("inside sitePrev making new site")}},m={sitesToPrevFunc:function(t){return t.sitesPrev},getDefaultSiteId:function(t){return t.defualtSiteId}};e.default={state:l,mutations:p,actions:f,getters:m}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(4),i=o(s),a=n(38),r=o(a),u=n(23),c=o(u),d=n(69),l=o(d),p=!0;e.default=new i.default.Store({state:{count:0},modules:{site:r.default,currUser:c.default,sitesPrev:l.default},strict:!p})},function(t,e,n){"use strict";n(134)},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var s=n(20),i=o(s),a=n(4),r=o(a),u=n(56),c=o(u),d=n(160),l=o(d),p=n(138),f=o(p);i.default.use(r.default),i.default.use(f.default),i.default.use(c.default),i.default.use(l.default)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,function(t,e,n){t.exports=n.p+"static/img/pic01.c8e597a.jpg"},function(t,e,n){t.exports=n.p+"static/img/pic02.fdcd84b.jpg"},function(t,e,n){t.exports=n.p+"static/img/pic10.52ec386.jpg"},,function(t,e,n){var o,s;n(120),o=n(60);var i=n(150);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-06b6e6b7",t.exports=o},function(t,e,n){var o,s;n(129),o=n(57);var i=n(159);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-a52ed046",t.exports=o},function(t,e,n){var o,s;n(124),o=n(58);var i=n(154);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-4484cd22",t.exports=o},function(t,e,n){var o,s;n(123),o=n(59);var i=n(153);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-4152b0fe",t.exports=o},function(t,e,n){var o,s;n(119),o=n(62);var i=n(149);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-03e168f6",t.exports=o},function(t,e,n){var o,s;n(128),o=n(63);var i=n(158);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-89fd6496",t.exports=o},function(t,e,n){var o,s;n(127),o=n(64);var i=n(157);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-797d93df",t.exports=o},function(t,e,n){var o,s;n(126),o=n(65);var i=n(156);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-4e51149a",t.exports=o},function(t,e,n){var o,s;n(125),o=n(66);var i=n(155);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-4c60d888",t.exports=o},function(t,e,n){var o,s;n(122),o=n(67);var i=n(152);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-37567071",t.exports=o},function(module,exports){module.exports={render:function(){with(this)return _h("div",[_h("nav",{staticClass:"navbar navbar-default"},[_h("section",{staticClass:"container"},[_h("div",{staticClass:"navbar-header",attrs:{style:"margin-top: -4px;"}},[_h("router-link",{staticClass:"navbar-brand",attrs:{to:"/",exact:""}},["SWAB - Simple Web App Builder"])])," ",_h("div",[_h("ul",{staticClass:"nav navbar-nav"},[_m(0)," ",_h("li",[isLoggedIn?_e():_h("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:signOut}},["Logout"])])])," ",_m(1)])])])," ",_m(2)," ",_h("h3",["hi user:"+_s(currUser.user.firstName)+" "])," ",_h("p",["this suppose to show sites to prev "+_s(sitesToPrevFunc)])," ",_l(sitesToPrevFunc,function(t){return _h("div",{staticClass:"prev-site-container"},[_h("div",{staticClass:"prev-site"},[_h("router-link",{attrs:{to:{path:"main/"+t._id}}},[_s(t.siteInfo.siteName)])])])})," ",_h("router-link",{staticClass:"btn btn-info",attrs:{to:{path:"main/"+getDefaultSiteId}}},[" Create New Site"])," ",_m(3)])},staticRenderFns:[function(){with(this)return _h("li",[_h("button",{staticClass:"btn btn-success",attrs:{type:"button"}},["Home"])," "])},function(){with(this)return _h("ul",{staticClass:"nav navbar-nav navbar-right"},[_h("li")])},function(){with(this)return _h("h2",["Navigation bar:"])},function(){with(this)return _h("h4",[_h("a",{attrs:{href:"./main"}},["main"])])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"container"},[_h("div",{staticClass:"row"},[_l(components,function(t,e){return _h("div",[_h(t.type,{tag:"component",attrs:{editable:editable,dataProps:t.props,componentIdx:e}})," "," ",_h("div",{staticClass:"dropdown",class:{open:openedDropdownIndex===e},attrs:{id:e}},[_h("button",{staticClass:"btn btn-primary dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"},on:{click:function(t){toggleDropDown(t,e)}}},["Add\r\n  ",_m(0,!0)])," ",_h("ul",{staticClass:"dropdown-menu"},[_h("li",[_h("button",{staticClass:"btn btn-default",attrs:{type:"button"},domProps:{value:e},on:{click:function(t){addSingleComp(t,0)}}},[_s(templatesList[0])])])," ",_h("li",[_h("button",{staticClass:"btn btn-default",attrs:{type:"button"},domProps:{value:e},on:{click:function(t){addSingleComp(t,1)}}},[_s(templatesList[1])])])," ",_h("li",[_h("button",{staticClass:"btn btn-default",attrs:{type:"button"},domProps:{value:e},on:{click:function(t){addSingleComp(t,2)}}},[_s(templatesList[2])])])])])])})," ",0===components.length?_h("div",{staticClass:"dropdown",class:{open:openedDropdownIndex===index},attrs:{id:index}},[_h("button",{staticClass:"btn btn-primary dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"},on:{click:function(t){toggleDropDown(t,index)}}},["Add\r\n  ",_m(1)])," ",_h("ul",{staticClass:"dropdown-menu"},[_h("li",[_h("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(t){addSingleComp(t,0)}}},[_s(templatesList[0])])])," ",_h("li",[_h("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(t){addSingleComp(t,1)}}},[_s(templatesList[1])])])," ",_h("li",[_h("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(t){addSingleComp(t,2)}}},[_s(templatesList[2])])])])]):_e()])])},staticRenderFns:[function(){with(this)return _h("span",{staticClass:"caret"})},function(){with(this)return _h("span",{staticClass:"caret"})}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"container"},[_h("div",{staticClass:"row"},[_h("div",[_h("component-template-list",{attrs:{components:components,editable:editable}})])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("section",[_m(0)," "," "," ",_h("section",[_h("div",[_m(1)," ",_h("input",{attrs:{type:"text",placeholder:siteInfo.siteUrl},on:{input:updateURL}})])," ",_h("button",{staticClass:"btn btn-success",on:{click:saveSite}},["Save Site"])," ",_h("div",[_m(2)," ",_h("input",{attrs:{type:"text",placeholder:siteInfo.siteName,value:""},on:{input:updateName}}),"\r\n    Web-site name: "+_s(siteInfo.siteName)+"\r\n    "])])," "])},staticRenderFns:[function(){with(this)return _h("br")},function(){with(this)return _h("label",{attrs:{for:""}},["Site URL: "])},function(){with(this)return _h("label",{attrs:{for:""}},["Site Title: "])}]}},function(module,exports,__webpack_require__){module.exports={render:function(){with(this)return _h("div",[1==editable?_h("button",{staticClass:"btn btn-danger btn-delete glyphicon glyphicon-remove",attrs:{type:"button"},on:{click:deleteSingleComp}}):_e()," ",_h("section",{attrs:{id:"shortArticlePreview"}},[_m(0)," ",_h("h3",{attrs:{contenteditable:editable},on:{keyup:function(t){updateCompProps(t,"title")}}},[_s(dataProps.title)])," ",_h("p",{attrs:{contenteditable:editable},on:{keyup:function(t){updateCompProps(t,"content")}}},[_s(dataProps.content)]),"\n        component index for debug: "+_s(componentIdx)+"\n        ",_h("ul",{staticClass:"btn-on-list"},[_h("li",[_h("a",{staticClass:"button-orange button-text",attrs:{contenteditable:editable,href:"#"},on:{keyup:function(t){updateCompProps(t,"button")}}},[_s(dataProps.button)])])])])])},staticRenderFns:[function(){with(this)return _h("a",{staticClass:"image-container",attrs:{href:"#"}},[_h("img",{attrs:{src:__webpack_require__(136),alt:""}})])}]}},function(module,exports,__webpack_require__){module.exports={render:function(){with(this)return _h("div",[1==editable?_h("button",{staticClass:"btn btn-danger btn-delete glyphicon glyphicon-remove",attrs:{type:"button"},on:{click:deleteSingleComp}}):_e()," ",_h("section",{staticClass:"flex",attrs:{id:"mainArticlePreview"}},[_h("div",{staticClass:"content"},[_h("header",[_h("h1",{attrs:{contenteditable:editable},on:{keyup:function(t){updateCompProps(t,"title")}}},[_s(dataProps.title)])," ",_h("p",{attrs:{contenteditable:editable},on:{keyup:function(t){updateCompProps(t,"subtitle")}}},[_s(dataProps.subtitle)]),"\n                component index for debug: "+_s(componentIdx)+"\n            "])," ",_h("p",{staticClass:"txt-section",attrs:{contenteditable:editable},on:{keyup:function(t){updateCompProps(t,"content")}}},[_s(dataProps.content)])," ",_h("ul",{staticClass:"btn-on-list"},[_h("li",[_h("a",{staticClass:"button-orange button-text",attrs:{contenteditable:editable,href:"#"},on:{keyup:function(t){updateCompProps(t,"button")}}},[_s(dataProps.button)])])])])," ",_m(0)])])},staticRenderFns:[function(){with(this)return _h("span",{staticClass:"image-container"},[_h("img",{attrs:{src:__webpack_require__(137),alt:""}})])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"container below-nav"},[_h("div",{staticClass:"row"},[_h("div",{staticClass:"col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 "},[_m(0)," ",_h("h2",[_s(user)])," ",_h("div",{staticClass:"account-wall"},[_m(1)," ",_h("form",{staticClass:"form-signin",attrs:{novalidate:""},on:{submit:function(t){t.preventDefault(),signin(user)}}},[_h("div",{staticClass:"form-group",class:{"has-error":errors.has("user.email")}},[_h("input",{directives:[{name:"model",rawName:"v-model",value:user.email,expression:"user.email"},{name:"validate",rawName:"v-validate.initial",value:user.email,expression:"user.email",modifiers:{initial:!0}}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email",autofocus:"","data-vv-rules":"required|email"},domProps:{value:_s(user.email)},on:{input:function(t){t.target.composing||(user.email=t.target.value)}}})])," ",_h("div",{staticClass:"form-group",class:{"has-error":errors.has("user.password")}},[_h("input",{directives:[{name:"model",rawName:"v-model",value:user.password,expression:"user.password"}],staticClass:"form-control",attrs:{placeholder:"Password",type:"password"},domProps:{value:_s(user.password)},on:{input:function(t){t.target.composing||(user.password=t.target.value)}}})])," ",_m(2)," ",error?_h("p",{staticClass:"text-danger error"},[_s(error)]):_e()])])])])])},staticRenderFns:[function(){with(this)return _h("h1",{staticClass:"text-center login-title"},["Sign in to continue (pass: 123456)"])},function(){with(this)return _h("img",{staticClass:"profile-img",attrs:{src:"https://www.gravatar.com/avatar?d=monsterid",alt:""}})},function(){with(this)return _h("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},["\r\n            Sign in\r\n          "])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",[_h("h1",["Welcome To "+_s(siteInfo.siteName)])," ",_h("editor",{attrs:{components:components}})])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",[_h("main-nav",{attrs:{siteInfo:siteInfo,editable:editable},on:{changeEditMode:changeEditModeFunc}})," ",1==editable?_h("tool-bar",{attrs:{siteInfo:siteInfo}}):_e()," ",_h("editor",{attrs:{components:components,editable:editable}})])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("nav",{staticClass:"navbar navbar-default"},[_h("section",{staticClass:"container"},[_h("div",{staticClass:"navbar-header",attrs:{style:"margin-top: -4px;"}},[_h("router-link",{staticClass:"navbar-brand",attrs:{to:"/",exact:""}},["SWAB - Simple Web App Builder"])])," ",_h("div",[_h("ul",{staticClass:"nav navbar-nav"},[_h("li",[_h("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:showEditMode}},["Edit Mode"])])," ",_h("li",[_h("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:showPreviewMode}},["Preview Mode"])])," ",_h("li",[siteId?_h("router-link",{attrs:{to:{path:"/published/"+siteId},append:""}},[_h("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:showPublishMode}},["Publish Site"])]):_e()])])," ",_h("ul",{staticClass:"nav navbar-nav navbar-right"},[_h("li",[_h("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:getSingleSite}},["Get User Site"])])," ",_h("li",[_h("router-link",{attrs:{to:{name:"signin"}}},["Sign in"])])])])])])},staticRenderFns:[]}},function(module,exports,__webpack_require__){module.exports={render:function(){with(this)return _h("div",[1==editable?_h("button",{staticClass:"btn btn-danger btn-delete glyphicon glyphicon-remove",attrs:{type:"button"},on:{click:deleteSingleComp}}):_e()," ",_h("section",{staticClass:"flex",attrs:{id:"circlePreview"}},[_h("header",[_h("h2",{attrs:{contenteditable:editable},on:{keyup:function(t){updateCompProps(t,"title")}}},[_s(dataProps.title)])," ",_h("p",{attrs:{contenteditable:editable},on:{keyup:function(t){updateCompProps(t,"content")}}},[_s(dataProps.content)]),"\n            component index for debug: "+_s(componentIdx)+"\n        "])," ",_m(0)])])},staticRenderFns:[function(){with(this)return _h("span",{staticClass:"image-container"},[_h("img",{attrs:{src:__webpack_require__(135),alt:""}})])}]}}]);
//# sourceMappingURL=app.6a73c2cfcaede387c7c5.js.map