(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d03ce7c"],{"05ca":function(e,t,r){r("d206"),e.exports=r("584a").Reflect.has},"1c30":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Row",[r("Button",{directives:[{name:"permission",rawName:"v-permission.show",value:"b:perm:platform:create",expression:"'b:perm:platform:create'",modifiers:{show:!0}}],attrs:{type:"primary"},on:{click:e.add}},[r("Icon",{attrs:{type:"plus"}}),e._v("开通平台商\n        ")],1)],1),r("Row",{staticClass:"margin-top-10"},[r("label",{staticStyle:{"margin-right":"8px"}},[e._v("平台：")]),r("Select",{staticStyle:{width:"200px"},attrs:{clearable:""},model:{value:e.table.query.platform,callback:function(t){e.$set(e.table.query,"platform",t)},expression:"table.query.platform"}},e._l(e.platformTypes,function(t){return r("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}),1),r("label",{staticClass:"margin-left-10",staticStyle:{"margin-right":"8px"}},[e._v("机构代码：")]),r("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"",clearable:""},model:{value:e.table.query.code,callback:function(t){e.$set(e.table.query,"code",t)},expression:"table.query.code"}}),r("label",{staticClass:"margin-left-10",staticStyle:{"margin-right":"8px"}},[e._v("企业名称：")]),r("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"",clearable:""},model:{value:e.table.query.name,callback:function(t){e.$set(e.table.query,"name",t)},expression:"table.query.name"}}),r("Button",{staticClass:"margin-left-10",attrs:{type:"primary",icon:"md-search"},on:{click:e.doQuery}},[e._v("搜索")])],1),r("Row",{staticClass:"margin-top-10"},[r("i-col",[r("Table",{attrs:{columns:e.table.col,data:e.table.data}}),r("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[r("div",{staticStyle:{float:"right"}},[r("Page",{attrs:{total:e.table.total,"show-sizer":!0,placement:"top"},on:{"on-page-size-change":e.changePageSize,"on-change":e.changePage}})],1)])],1)],1),r("Modal",{attrs:{"mask-closable":!1,title:e.modelTitle,loading:e.loadingBtn},on:{"on-ok":e.addOrUpdate,"on-cancel":e.cancel},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[r("div",{staticStyle:{height:"300px"}},[r("vue-scroll",{ref:"vScroll"},[r("Form",{ref:"form",attrs:{model:e.vo,"label-width":80,rules:e.validate}},[r("Form-item",{directives:[{name:"show",rawName:"v-show",value:!e.isUpdate,expression:"!isUpdate"}],attrs:{label:"机构代码",prop:"code"}},[r("SearchSelect",{ref:"codeSelect",attrs:{"on-search":e.searchEpByCode,"select-width":"auto"},on:{blur:e.searchEpByCode,change:e.changeEp},model:{value:e.vo.code,callback:function(t){e.$set(e.vo,"code",t)},expression:"vo.code"}})],1),r("Form-item",{attrs:{label:"Logo",prop:"logoPic"}},[r("OssUpload",{attrs:{files:e.logoPic,size:1,format:["jpg","jpeg","png"],accept:"image/*",disabled:e.hasOld}})],1),r("Form-item",{attrs:{label:"企业名称",prop:"name"}},[r("Input",{attrs:{disabled:e.hasOld},model:{value:e.vo.name,callback:function(t){e.$set(e.vo,"name","string"===typeof t?t.trim():t)},expression:"vo.name"}})],1),r("Form-item",{attrs:{label:"法人",prop:"legalPerson"}},[r("Input",{attrs:{disabled:e.hasOld},model:{value:e.vo.legalPerson,callback:function(t){e.$set(e.vo,"legalPerson","string"===typeof t?t.trim():t)},expression:"vo.legalPerson"}})],1),r("Form-item",{attrs:{label:"营业执照",prop:"licensePic"}},[r("OssUpload",{attrs:{files:e.licensePic,size:1,format:["jpg","jpeg","png"],accept:"image/*",disabled:e.hasOld}})],1),r("Form-item",{attrs:{label:"有效期",prop:"licensePeriod"}},[r("Input",{attrs:{disabled:e.hasOld},model:{value:e.vo.licensePeriod,callback:function(t){e.$set(e.vo,"licensePeriod","string"===typeof t?t.trim():t)},expression:"vo.licensePeriod"}})],1),r("Form-item",{attrs:{label:"注册资本",prop:"registerCapital"}},[r("Input",{attrs:{disabled:e.hasOld},model:{value:e.vo.registerCapital,callback:function(t){e.$set(e.vo,"registerCapital","string"===typeof t?t.trim():t)},expression:"vo.registerCapital"}})],1),r("Form-item",{attrs:{label:"注册日期",prop:"registerDate"}},[r("DatePicker",{staticStyle:{width:"150px"},attrs:{disabled:e.hasOld,type:"date",transfer:"",placeholder:"请选择注册日期"},model:{value:e.registerDate,callback:function(t){e.registerDate=t},expression:"registerDate"}})],1),r("Form-item",{attrs:{label:"经营范围",prop:"businessScope"}},[r("Input",{attrs:{disabled:e.hasOld},model:{value:e.vo.businessScope,callback:function(t){e.$set(e.vo,"businessScope","string"===typeof t?t.trim():t)},expression:"vo.businessScope"}})],1),r("Form-item",{attrs:{label:"注册地址",prop:"address"}},[r("al-cascader",{ref:"address",attrs:{level:2,disabled:e.hasOld},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),r("Input",{attrs:{disabled:e.hasOld,placeholder:"请输入街道地址"},model:{value:e.vo.streetAddress,callback:function(t){e.$set(e.vo,"streetAddress",t)},expression:"vo.streetAddress"}})],1),r("Form-item",{attrs:{label:"办公地址",prop:"officeAddress"}},[r("al-cascader",{ref:"officeAddress",attrs:{level:2,disabled:e.hasOld},model:{value:e.officeAddress,callback:function(t){e.officeAddress=t},expression:"officeAddress"}}),r("Input",{attrs:{disabled:e.hasOld,placeholder:"请输入街道地址"},model:{value:e.vo.officeStreetAddress,callback:function(t){e.$set(e.vo,"officeStreetAddress",t)},expression:"vo.officeStreetAddress"}})],1),r("FormItem",{directives:[{name:"show",rawName:"v-show",value:e.isUpdate,expression:"isUpdate"}],attrs:{label:"状态",prop:"status"}},[r("Select",{attrs:{transfer:""},model:{value:e.vo.status,callback:function(t){e.$set(e.vo,"status",t)},expression:"vo.status"}},e._l(e.EpStatus,function(t){return r("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}),1)],1),e.isUpdate?e._e():[r("Divider",[e._v("管理员信息")]),r("Form-item",{attrs:{label:"用户名",prop:"user.username"}},[r("Input",{attrs:{disabled:e.hasOld},model:{value:e.vo.user.username,callback:function(t){e.$set(e.vo.user,"username","string"===typeof t?t.trim():t)},expression:"vo.user.username"}})],1),r("Form-item",{attrs:{label:"昵称",prop:"user.nickname"}},[r("Input",{attrs:{disabled:e.hasOld},model:{value:e.vo.user.nickname,callback:function(t){e.$set(e.vo.user,"nickname","string"===typeof t?t.trim():t)},expression:"vo.user.nickname"}})],1),r("FormItem",{attrs:{label:"用户角色",prop:"roles"}},[r("Select",{attrs:{transfer:"",filterable:"",multiple:""},model:{value:e.vo.roles,callback:function(t){e.$set(e.vo,"roles",t)},expression:"vo.roles"}},e._l(e.roles,function(t){return r("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}),1)],1),r("Divider",[e._v("平台信息")]),r("Form-item",{attrs:{label:"平台名称",prop:"platform.name"}},[r("Input",{model:{value:e.vo.platform.name,callback:function(t){e.$set(e.vo.platform,"name","string"===typeof t?t.trim():t)},expression:"vo.platform.name"}})],1),r("Form-item",{attrs:{label:"平台标识",prop:"platform.key"}},[r("Input",{model:{value:e.vo.platform.key,callback:function(t){e.$set(e.vo.platform,"key","string"===typeof t?t.trim():t)},expression:"vo.platform.key"}})],1)]],2)],1)],1)])],1)},a=[],i=r("fae4"),s=r.n(i),o=(r("ac6a"),r("ed50"),r("96cf"),r("3b8d")),l=(r("7f7f"),r("cebc")),u=(r("28a5"),r("5a0c")),c=r.n(u),d=r("3021"),p=r("9dac"),f=r("a7ee"),h=r("9a3e"),m=r("fbc3"),v=r("f600"),g={name:"PlatformIndex",components:{SearchSelect:d["a"],OssUpload:p["a"]},mixins:[f["a"],h["a"],m["a"]],data:function(){var e=this;return{EpStatus:v["c"],oldEp:null,table:{col:[{title:"机构代码",key:"code"},{title:"企业名称",key:"name"},{title:"法人",key:"legalPerson"},{title:"注册资本",key:"registerCapital",tooltip:!0},{title:"平台",key:"platformNames",render:function(t,r){return e.renderListPop(t,r,function(e){return e?String(e).split(","):[]})}},{title:"状态",key:"status",render:function(t,r){return e.renderDic(t,r)(v["c"])}},{title:"创建时间",key:"createTime",render:this.renderDate},{title:"更新时间",key:"updateTime",render:this.renderDate},{title:"操作",key:"action",width:200,align:"center",render:function(t,r){return e.renderActions(t,r,[{config:{loading:e.loadingBtn,style:{marginRight:"5px"},disabled:0===r.row.type},click:function(){return e.update(r.row)},text:"修改"}])}}],url:"/api/platform/list",query:{platform:null,code:null,name:null}},platformTypes:[],roles:[],address:[],officeAddress:[],registerDate:null,licensePic:[],logoPic:[],vo:{code:null,name:null,legalPerson:null,licensePeriod:null,registerCapital:null,registerDate:null,businessScope:null,addressCode:null,address:null,streetAddress:null,officeAddressCode:null,officeAddress:null,officeStreetAddress:null,licensePic:null,logoPic:null,status:1,user:{username:null,phone:null,nickname:null},roles:[],platform:{name:null,key:null},epType:1},validate:{code:[{required:!0,trigger:"blur",message:"请填写企业机构代码"}],name:[{required:!0,trigger:"blur",message:"请填写企业名称"}],"user.username":[{required:!0,trigger:"blur",message:"管理员用户名不能为空"}],roles:[{required:!0,type:"array",trigger:"change",message:"请选择管理员角色"}],"platform.name":[{required:!0,trigger:"blur",message:"请填写平台名称"}],"platform.key":[{required:!0,trigger:"blur",message:"请填写平台唯一标识"}]},addUrl:"/api/platform/create",updateUrl:"/api/fx/ep/update"}},computed:{hasOld:function(){return!!this.oldEp},generateAddOrUpdate:function(){var e,t,r=this.address[this.address.length-1]||{},n=this.officeAddress[this.officeAddress.length-1]||{};return Object(l["a"])({},this.vo,{addressCode:r.code,address:this.address.map(function(e){return e.name}).join(""),officeAddressCode:n.code,officeAddress:this.officeAddress.map(function(e){return e.name}).join(""),registerDate:this.registerDate&&c()(this.registerDate).format("YYYY-MM-DD"),licensePic:(null===(e=this.licensePic)||void 0===e?void 0:e.length)?this.licensePic[0].name:null,logoPic:(null===(t=this.logoPic)||void 0===t?void 0:t.length)?this.logoPic[0].name:null})}},watch:{"vo.user.username":function(e){this.vo.user.phone=e}},created:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadPlatformTypes();case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{add:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadAllRoles();case 2:this.$super(m["a"]).add(),this.oldEp=null,this.registerDate=null,this.licensePic=[],this.logoPic=[],this.$refs.codeSelect.clear(),this.vo.streetAddress=null,this.vo.addressCode=null,this.vo.officeStreetAddress=null,this.vo.officeAddressCode=null,this.$nextTick(function(){t.$refs.address.$children[0].clearSelect(),t.$refs.officeAddress.$children[0].clearSelect()});case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),update:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadAllRoles();case 2:this.oldEp=null,this.$super(m["a"]).update(t),this.setByItem(t);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),setByItem:function(e){e.addressCode&&this.setAddress("address",e.addressCode),e.officeAddressCode&&this.setAddress("officeAddress",e.officeAddressCode),e.registerDate&&(this.registerDate=c()(e.registerDate).toDate()),e.licensePic&&(this.licensePic=[{name:e.licensePic,status:!0}]),e.logoPic&&(this.logoPic=[{name:e.logoPic,status:!0}])},setAddress:function(e,t){this[e]=[t.substring(0,2).padEnd(6,"0"),t.substring(0,4).padEnd(6,"0"),t]},changeEp:function(e){var t=this;this.oldEp=e,["code","name","legalPerson","licensePeriod","registerCapital","registerDate","businessScope"].filter(function(t){return s()(e,t)}).forEach(function(r){return t.vo[r]=e[r]}),this.setByItem(e),this.vo.user.username=e.admin.username,this.vo.user.nickname=e.admin.nickname},searchEpByCode:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.vo.code){e.next=3;break}return this.oldEp=null,e.abrupt("return",[]);case 3:return e.next=5,this.get("/api/ep/code/".concat(this.vo.code),{admin:!0,platform:!0});case 5:return t=e.sent,t.success&&t.value?this.changeEp(t.value):this.oldEp=null,e.abrupt("return",[]);case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadPlatformTypes:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.get("/api/platform/types");case 2:t=e.sent,this.platformTypes=t.success?t.value:[];case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadAllRoles:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.get("/api/permission/role/list",{epType:1,type:1});case 2:t=e.sent,t.success&&(this.roles=t.value);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},b=g,y=r("2877"),w=Object(y["a"])(b,n,a,!1,null,null,null);w.options.__file="index.vue";t["default"]=w.exports},3021:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Dropdown",{staticClass:"search-select",style:{width:e.valueWidth},attrs:{trigger:"custom",visible:e.visible}},[r("Input",{style:{width:e.inputWidth},attrs:{icon:e.loading?"ios-loading":null,readonly:e.loading,"enter-button":e.enterButton,placeholder:e.placeholder,search:""},on:{input:function(t){e.$emit("input",t)},"on-blur":e.blurHandler,"on-focus":e.focusHandler,"on-search":e.query},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}}),r("DropdownMenu",{style:e.selectStyle,attrs:{slot:"list"},slot:"list"},e._l(e.data,function(t,n){return r("DropdownItem",{key:n,attrs:{disabled:t.disabled,divided:t.divided,name:t.name},nativeOn:{click:function(r){r.stopPropagation(),e.clickHandler(t)}}},[e._v(e._s(t.name))])}),1)],1)},a=[],i=(r("96cf"),r("3b8d")),s=(r("7f7f"),r("c5f6"),{name:"SearchSelect",props:{width:{type:[Number,String],default:150},selectWidth:{type:[Number,String],default:150},selectStyle:{type:Object},placeholder:{type:String},onSearch:{type:Function,required:!0},value:{type:[String,Number]},enterButton:{type:[Boolean,String],default:!1}},data:function(){return{visible:!1,val:this.value,loading:!1,data:[]}},computed:{inputWidth:function(){return this.width?"string"===typeof this.width?this.width:"".concat(this.width,"px"):"auto"},valueWidth:function(){return this.selectWidth?"string"===typeof this.selectWidth?this.selectWidth:"".concat(this.selectWidth,"px"):"auto"}},methods:{clear:function(){this.val=null,this.data=[]},clickHandler:function(e){this.visible=!1,this.val=e.name,this.$emit("input",e.id),this.$emit("change",e)},focusHandler:function(){this.data&&this.data.length&&(this.visible=!0),this.$emit("focus")},blurHandler:function(){var e=this;setTimeout(function(){return e.visible=!1},100),this.$emit("blur")},query:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,this.onSearch(t);case 4:this.data=e.sent,this.visible=!!(null===(r=this.data)||void 0===r?void 0:r.length);case 6:return e.prev=6,this.loading=!1,e.finish(6);case 9:case"end":return e.stop()}},e,this,[[1,,6,9]])}));function t(t){return e.apply(this,arguments)}return t}()}}),o=s,l=(r("48ed"),r("2877")),u=Object(l["a"])(o,n,a,!1,null,null,null);u.options.__file="search-select.vue";t["a"]=u.exports},"32d8":function(e,t,r){e.exports=r("a222")},"48ed":function(e,t,r){"use strict";var n=r("72e1"),a=r.n(n);a.a},"72e1":function(e,t,r){},"850c":function(e,t,r){"use strict";var n=r("63b6"),a=r("20fd");n(n.S+n.F*r("294c")(function(){function e(){}return!(Array.of.call(e)instanceof e)}),"Array",{of:function(){var e=0,t=arguments.length,r=new("function"==typeof this?this:Array)(t);while(t>e)a(r,e,arguments[e++]);return r.length=t,r}})},"92fa":function(e,t){var r=/^(attrs|props|on|nativeOn|class|style|hook)$/;function n(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}}e.exports=function(e){return e.reduce(function(e,t){var a,i,s,o,l;for(s in t)if(a=e[s],i=t[s],a&&r.test(s))if("class"===s&&("string"===typeof a&&(l=a,e[s]=a={},a[l]=!0),"string"===typeof i&&(l=i,t[s]=i={},i[l]=!0)),"on"===s||"nativeOn"===s||"hook"===s)for(o in i)a[o]=n(a[o],i[o]);else if(Array.isArray(a))e[s]=a.concat(i);else if(Array.isArray(i))e[s]=[a].concat(i);else for(o in i)a[o]=i[o];else e[s]=t[s];return e},{})}},"9a3e":function(e,t,r){"use strict";var n,a,i=r("92fa"),s=r.n(i),o=r("d656"),l=r.n(o),u=r("32d8"),c=r.n(u),d=r("a745"),p=r.n(d),f=r("bd86"),h=(r("7f7f"),r("c5f6"),r("88ec")),m=r("f600"),v=r("e069"),g=r.n(v),b=r("da81"),y=r.n(b),w=(r("96cf"),r("3b8d")),k={name:"PoptipTable",props:{name:{type:[String,Function,Number],default:""},columns:{type:Array,required:!0},handler:{type:Function,required:!0},cache:{type:Boolean,default:!0},params:{type:Object},gutter:{type:Number,default:0},config:{type:Object}},data:function(){return{data:{},show:!1,isLoad:!1}},methods:{showHandler:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.isLoad&&this.cache){e.next=7;break}return this.show=!1,e.next=4,this.handler(this.params);case 4:this.data=e.sent,this.isLoad=!0,this.show=!0;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),columnValue:function(e){var t=this.data[e.key];return"function"===typeof e.convert&&(t=e.convert(t,this.data,e)),t}},render:function(e,t){var r=this;return e(g.a.Poptip,s()([this.config,{on:{"on-popper-show":this.showHandler}}]),["function"===typeof this.name?this.name(e):e("a",[this.name]),this.show?e("div",{slot:"content",style:this.config.props.wordWrap?"word-wrap: break-word":""},[this.columns.map(function(t,n){return e("div",[e(g.a.Row,{key:n,attrs:{gutter:r.gutter}},[e("i-col",{attrs:{className:t.titleClass,span:t.labelSpan||24-(t.valueSpan||12)}},["function"===typeof t.titleRender?t.titleRender(e,{row:r.data,column:t},t.title):t.title]),e("i-col",{attrs:{className:t.valueClass,span:t.valueSpan||24-(t.labelSpan||12)}},["function"===typeof t.render?t.render(e,{row:r.data,column:t},r.columnValue(t)):r.columnValue(t)])]),e(g.a.Divider,{style:"margin: 5px 0;"})])})]):e(g.a.Spin,{slot:"content",attrs:{fix:!0}})])}},x=k,O=r("2877"),R=Object(O["a"])(x,n,a,!1,null,null,null);R.options.__file="poptip-table.vue";var S=R.exports;t["a"]={methods:{renderDate:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return this.renderDateFormat(e,t,r)()},renderDateFormat:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return function(n){return e("span",Object(h["a"])(r(t.row[t.column.key]),n))}},renderDateRange:function(e,t){return function(r,n){return e("span","".concat(Object(h["a"])(t.row[r]),"~").concat(Object(h["a"])(t.row[n])))}},renderAppend:function(e,t){return function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return e("span","".concat(n(t.row[t.column.key])).concat(r))}},renderSuAppend:function(e,t){return function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return e("span","".concat(r).concat(n(t.row[t.column.key])))}},renderStatus:function(e,t){return this.renderStatusDiy(e,t)()},renderMoney:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return e("span",[e(g.a.Icon,{style:"position: relative; top: -1px;",attrs:{type:"logo-yen"}}),Object(h["c"])(Number(r(t.row[t.column.key])))])},renderMoneyFour:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return e("span",[e(g.a.Icon,{style:"position: relative; top: -1px;",attrs:{type:"logo-yen"}}),Object(h["d"])(Number(r(t.row[t.column.key])))])},renderStatusDiy:function(e,t){var r=t.row[t.column.key];return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"启用",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"禁用",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return r=a(r),e(g.a.Tag,{attrs:{type:"dot",color:!0===r?"success":"error"}},[!0===r?t:n])}},renderStatusDic:function(e,t){var r=t.row[t.column.key];return function(t,n){return e(g.a.Tag,{attrs:{type:"border",color:t[r]}},[Object(m["t"])(n,r).name])}},renderDic:function(e,t){return function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{field:"id",value:"name"};return e("span",Object(m["t"])(r,t.row[t.column.key],Object(f["a"])({},n.value,""),n.field)[n.value])}},renderListPop:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},n=r(t.row[t.column.key]);return n=p()(n)?n:c()(n),e(g.a.Poptip,{attrs:{trigger:"hover",placement:"bottom"}},[e(g.a.Tag,[n.length]),e("div",{slot:"content"},[e("ul",[n.map(function(t){return e("li",{style:"text-align: center; padding: 4px;"},[t])})])])])},renderPopTable:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=t.row[t.column.key];n=y()({params:{value:a,params:t},poptip:{transfer:!0,wordWrap:!0}},n);var i=n.poptip;return l()(n,"poptip"),function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return t.row},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return e(S,s()([{props:n},{attrs:{name:l,columns:r,handler:o,config:{props:i}}}]))}},renderJoin:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/";return function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return e("span",a.map(function(e){return t.row[e]}).join(r))}},renderLink:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e};return e("a",{on:{click:r}},[n(t.row[t.column.key])])},renderBtnPop:function(e,t,r,n,a){return!1===a.show?null:e(g.a.Poptip,{attrs:{confirm:!0,title:t,placement:"top",transfer:!0},on:{"on-ok":n}},[e(g.a.Button,y()({props:{size:"small"}},a),[r])])},renderActions:function(e,t,r){var n=this,a=r.every(function(e){var t;return!1===(null===(t=e.config)||void 0===t?void 0:t.show)});return a?e("div",["无可用操作"]):r.map(function(t){var r=t.config,a=void 0===r?{}:r,i=t.text,o=t.click,l={props:a,style:a.style};switch(t.type){case"delete":var u=t.title,c=void 0===u?"您确定要删除这条数据吗？":u;return n.renderBtnPop(e,c,i||"删除",o,y()({props:{type:"error"}},l));case"switch":var d=t.falseText,p=void 0===d?"禁用":d,f=t.trueText,h=void 0===f?"启用":f,m=t.bool,v=m?p:h,b=m?"warning":"success";return n.renderBtnPop(e,"您确定要".concat(v,"这条数据吗?"),v,o,y()({props:{type:b}},l));case"resetPassword":var w=t.epName;return n.renderBtnPop(e,"您确定要重置".concat(w,"管理员的密码吗?"),i||"重置密码",o,y()({props:{type:"primary"}},l));default:return!1===a.show?null:e(g.a.Button,s()([y()({props:{size:"small",type:"primary"}},l),{on:{click:o}}]),[i])}})}}}},a222:function(e,t,r){r("850c"),e.exports=r("584a").Array.of},a465:function(e,t,r){var n=r("63b6"),a=r("bf0b").f,i=r("e4ae");n(n.S,"Reflect",{deleteProperty:function(e,t){var r=a(i(e),t);return!(r&&!r.configurable)&&delete e[t]}})},a7ee:function(e,t,r){"use strict";r("c5f6");var n=r("fae4"),a=r.n(n),i=r("a4bb"),s=r.n(i),o=(r("ac6a"),r("96cf"),r("3b8d")),l=r("cebc");t["a"]={data:function(){return{table:{data:[],query:{pageNum:1,pageSize:10},initQuery:{},total:0},loadingBtn:!1}},created:function(){this.table.initQuery=Object(l["a"])({},this.table.query)},mounted:function(){this.doQuery()},methods:{onReload:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:s()(this.table.query).filter(function(e){return a()(t.table.initQuery,e)}).forEach(function(e){return t.table.query[e]=t.table.initQuery[e]}),this.doQuery();case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),beforeQuery:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),afterQuery:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),processQueryData:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}},e,this)}));function t(t,r){return e.apply(this,arguments)}return t}(),doQuery:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.beforeQuery();case 2:if(t=e.sent,!1===t){e.next=17;break}return e.next=6,this.get(this.table.url,Object(l["a"])({},this.table.query));case 6:if(r=e.sent,!r.success||!r.value){e.next=15;break}return e.next=10,this.processQueryData(r.value.list?r.value.list:r.value||[],r);case 10:n=e.sent,this.table.data=n,this.table.total=Number(r.value.total)||this.table.data.lenght,e.next=17;break;case 15:this.table.data=[],this.table.total=0;case 17:return this.loadingBtn=!1,e.next=20,this.afterQuery();case 20:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),changePage:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.table.query.pageNum=t,this.doQuery();case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),changePageSize:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.table.query.pageSize=t,this.doQuery();case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}}},b5b1:function(e,t,r){r("a465"),e.exports=r("584a").Reflect.deleteProperty},d206:function(e,t,r){var n=r("63b6");n(n.S,"Reflect",{has:function(e,t){return t in e}})},d656:function(e,t,r){e.exports=r("b5b1")},fae4:function(e,t,r){e.exports=r("05ca")},fbc3:function(e,t,r){"use strict";var n=r("fae4"),a=r.n(n),i=r("a4bb"),s=r.n(i),o=(r("ac6a"),r("a745")),l=r.n(o),u=(r("96cf"),r("3b8d")),c=r("cebc");t["a"]={data:function(){return{model:!1,vo:{id:null},loadingBtn:!1,addTitle:"新增",updateTitle:"修改"}},computed:{isUpdate:function(){return null!==this.vo.id&&void 0!==this.vo.id},postUrl:function(){return this.isUpdate?this.updateUrl:this.addUrl},modelTitle:function(){return this.isUpdate?this.updateTitle:this.addTitle},generateAddOrUpdate:function(){return Object(c["a"])({},this.vo)},formRef:function(){return"form"}},methods:{generateRemove:function(e){return{}},beforeAddOrUpdate:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),afterAddOrUpdate:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),doRequest:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.post(this.postUrl,this.generateAddOrUpdate));case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),addOrUpdate:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=this.$refs[this.formRef],(l()(t)?t[0]:t).validate(function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,r.doAddOrUpdate();case 3:e.next=7;break;case 5:r.resetLoadingBtn(),r.$Message.error("表单验证失败!");case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),doAddOrUpdate:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.beforeAddOrUpdate();case 2:if(t=e.sent,r=!0,!1===t){e.next=10;break}return e.next=7,this.doRequest();case 7:n=e.sent,a=n,r=a.success;case 10:return!1===r?this.resetLoadingBtn():(this.model=!1,this._timeoutQuery()),e.next=13,this.afterAddOrUpdate(r,n);case 13:return e.abrupt("return",r);case 14:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),beforeRemove:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.__removeUrl?this.removeUrl=this.__removeUrl:this.__removeUrl=this.removeUrl,this.removeUrl="".concat(this.removeUrl,"/").concat(t.id);case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),afterRemove:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));function t(t,r){return e.apply(this,arguments)}return t}(),remove:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.beforeRemove(t);case 4:if(r=e.sent,n=!0,!1===r){e.next=11;break}return e.next=9,this.post(this.removeUrl,this.generateRemove(t));case 9:a=e.sent,n=a.success;case 11:return!1===n?this.resetLoadingBtn():this._timeoutQuery(),e.next=14,this.afterRemove(n,t);case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),add:function(){this.model=!0,this.vScrollToTop(),this.loadingBtn=!0,this.$refs[this.formRef].resetFields(),this.vo.id=null},update:function(e){var t=this;this.model=!0,this.vScrollToTop(),this.loadingBtn=!0,s()(this.vo).filter(function(t){return a()(e,t)}).forEach(function(r){return t.vo[r]=e[r]})},vScrollToTop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"vScroll";this.$refs[e]&&this.$refs[e].scrollTo({x:0,y:0})},cancel:function(){this.loadingBtn=!1},resetLoadingBtn:function(){var e=this;this.loadingBtn=!1,this.$nextTick(function(){return e.loadingBtn=!0})},_timeoutQuery:function(){var e=this;"function"===typeof this.doQuery&&setTimeout(function(){return e.doQuery()},500)}}}}}]);
//# sourceMappingURL=chunk-0d03ce7c.c5684db9.js.map