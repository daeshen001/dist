(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ca15503"],{"05ca":function(e,t,n){n("d206"),e.exports=n("584a").Reflect.has},"32d8":function(e,t,n){e.exports=n("a222")},"850c":function(e,t,n){"use strict";var r=n("63b6"),a=n("20fd");r(r.S+r.F*n("294c")(function(){function e(){}return!(Array.of.call(e)instanceof e)}),"Array",{of:function(){var e=0,t=arguments.length,n=new("function"==typeof this?this:Array)(t);while(t>e)a(n,e,arguments[e++]);return n.length=t,n}})},"92fa":function(e,t){var n=/^(attrs|props|on|nativeOn|class|style|hook)$/;function r(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}}e.exports=function(e){return e.reduce(function(e,t){var a,o,i,u,c;for(i in t)if(a=e[i],o=t[i],a&&n.test(i))if("class"===i&&("string"===typeof a&&(c=a,e[i]=a={},a[c]=!0),"string"===typeof o&&(c=o,t[i]=o={},o[c]=!0)),"on"===i||"nativeOn"===i||"hook"===i)for(u in o)a[u]=r(a[u],o[u]);else if(Array.isArray(a))e[i]=a.concat(o);else if(Array.isArray(o))e[i]=[a].concat(o);else for(u in o)a[u]=o[u];else e[i]=t[i];return e},{})}},"9a3e":function(e,t,n){"use strict";var r,a,o=n("92fa"),i=n.n(o),u=n("d656"),c=n.n(u),s=n("32d8"),l=n.n(s),p=n("a745"),f=n.n(p),d=n("bd86"),h=(n("7f7f"),n("c5f6"),n("88ec")),v=n("f600"),y=n("e069"),m=n.n(y),b=n("da81"),g=n.n(b),w=(n("96cf"),n("3b8d")),k={name:"PoptipTable",props:{name:{type:[String,Function,Number],default:""},columns:{type:Array,required:!0},handler:{type:Function,required:!0},cache:{type:Boolean,default:!0},params:{type:Object},gutter:{type:Number,default:0},config:{type:Object}},data:function(){return{data:{},show:!1,isLoad:!1}},methods:{showHandler:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.isLoad&&this.cache){e.next=7;break}return this.show=!1,e.next=4,this.handler(this.params);case 4:this.data=e.sent,this.isLoad=!0,this.show=!0;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),columnValue:function(e){var t=this.data[e.key];return"function"===typeof e.convert&&(t=e.convert(t,this.data,e)),t}},render:function(e,t){var n=this;return e(m.a.Poptip,i()([this.config,{on:{"on-popper-show":this.showHandler}}]),["function"===typeof this.name?this.name(e):e("a",[this.name]),this.show?e("div",{slot:"content",style:this.config.props.wordWrap?"word-wrap: break-word":""},[this.columns.map(function(t,r){return e("div",[e(m.a.Row,{key:r,attrs:{gutter:n.gutter}},[e("i-col",{attrs:{className:t.titleClass,span:t.labelSpan||24-(t.valueSpan||12)}},["function"===typeof t.titleRender?t.titleRender(e,{row:n.data,column:t},t.title):t.title]),e("i-col",{attrs:{className:t.valueClass,span:t.valueSpan||24-(t.labelSpan||12)}},["function"===typeof t.render?t.render(e,{row:n.data,column:t},n.columnValue(t)):n.columnValue(t)])]),e(m.a.Divider,{style:"margin: 5px 0;"})])})]):e(m.a.Spin,{slot:"content",attrs:{fix:!0}})])}},x=k,R=n("2877"),O=Object(R["a"])(x,r,a,!1,null,null,null);O.options.__file="poptip-table.vue";var j=O.exports;t["a"]={methods:{renderDate:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return this.renderDateFormat(e,t,n)()},renderDateFormat:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return function(r){return e("span",Object(h["a"])(n(t.row[t.column.key]),r))}},renderDateRange:function(e,t){return function(n,r){return e("span","".concat(Object(h["a"])(t.row[n]),"~").concat(Object(h["a"])(t.row[r])))}},renderAppend:function(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return e("span","".concat(r(t.row[t.column.key])).concat(n))}},renderSuAppend:function(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return e("span","".concat(n).concat(r(t.row[t.column.key])))}},renderStatus:function(e,t){return this.renderStatusDiy(e,t)()},renderMoney:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return e("span",[e(m.a.Icon,{style:"position: relative; top: -1px;",attrs:{type:"logo-yen"}}),Object(h["c"])(Number(n(t.row[t.column.key])))])},renderMoneyFour:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return e("span",[e(m.a.Icon,{style:"position: relative; top: -1px;",attrs:{type:"logo-yen"}}),Object(h["d"])(Number(n(t.row[t.column.key])))])},renderStatusDiy:function(e,t){var n=t.row[t.column.key];return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"启用",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"禁用",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return n=a(n),e(m.a.Tag,{attrs:{type:"dot",color:!0===n?"success":"error"}},[!0===n?t:r])}},renderStatusDic:function(e,t){var n=t.row[t.column.key];return function(t,r){return e(m.a.Tag,{attrs:{type:"border",color:t[n]}},[Object(v["t"])(r,n).name])}},renderDic:function(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{field:"id",value:"name"};return e("span",Object(v["t"])(n,t.row[t.column.key],Object(d["a"])({},r.value,""),r.field)[r.value])}},renderListPop:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},r=n(t.row[t.column.key]);return r=f()(r)?r:l()(r),e(m.a.Poptip,{attrs:{trigger:"hover",placement:"bottom"}},[e(m.a.Tag,[r.length]),e("div",{slot:"content"},[e("ul",[r.map(function(t){return e("li",{style:"text-align: center; padding: 4px;"},[t])})])])])},renderPopTable:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=t.row[t.column.key];r=g()({params:{value:a,params:t},poptip:{transfer:!0,wordWrap:!0}},r);var o=r.poptip;return c()(r,"poptip"),function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return t.row},c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return e(j,i()([{props:r},{attrs:{name:c,columns:n,handler:u,config:{props:o}}}]))}},renderJoin:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/";return function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e("span",a.map(function(e){return t.row[e]}).join(n))}},renderLink:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e};return e("a",{on:{click:n}},[r(t.row[t.column.key])])},renderBtnPop:function(e,t,n,r,a){return!1===a.show?null:e(m.a.Poptip,{attrs:{confirm:!0,title:t,placement:"top",transfer:!0},on:{"on-ok":r}},[e(m.a.Button,g()({props:{size:"small"}},a),[n])])},renderActions:function(e,t,n){var r=this,a=n.every(function(e){var t;return!1===(null===(t=e.config)||void 0===t?void 0:t.show)});return a?e("div",["无可用操作"]):n.map(function(t){var n=t.config,a=void 0===n?{}:n,o=t.text,u=t.click,c={props:a,style:a.style};switch(t.type){case"delete":var s=t.title,l=void 0===s?"您确定要删除这条数据吗？":s;return r.renderBtnPop(e,l,o||"删除",u,g()({props:{type:"error"}},c));case"switch":var p=t.falseText,f=void 0===p?"禁用":p,d=t.trueText,h=void 0===d?"启用":d,v=t.bool,y=v?f:h,b=v?"warning":"success";return r.renderBtnPop(e,"您确定要".concat(y,"这条数据吗?"),y,u,g()({props:{type:b}},c));case"resetPassword":var w=t.epName;return r.renderBtnPop(e,"您确定要重置".concat(w,"管理员的密码吗?"),o||"重置密码",u,g()({props:{type:"primary"}},c));default:return!1===a.show?null:e(m.a.Button,i()([g()({props:{size:"small",type:"primary"}},c),{on:{click:u}}]),[o])}})}}}},a222:function(e,t,n){n("850c"),e.exports=n("584a").Array.of},a465:function(e,t,n){var r=n("63b6"),a=n("bf0b").f,o=n("e4ae");r(r.S,"Reflect",{deleteProperty:function(e,t){var n=a(o(e),t);return!(n&&!n.configurable)&&delete e[t]}})},a7ee:function(e,t,n){"use strict";n("c5f6");var r=n("fae4"),a=n.n(r),o=n("a4bb"),i=n.n(o),u=(n("ac6a"),n("96cf"),n("3b8d")),c=n("cebc");t["a"]={data:function(){return{table:{data:[],query:{pageNum:1,pageSize:10},initQuery:{},total:0},loadingBtn:!1}},created:function(){this.table.initQuery=Object(c["a"])({},this.table.query)},mounted:function(){this.doQuery()},methods:{onReload:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:i()(this.table.query).filter(function(e){return a()(t.table.initQuery,e)}).forEach(function(e){return t.table.query[e]=t.table.initQuery[e]}),this.doQuery();case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),beforeQuery:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),afterQuery:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),processQueryData:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}(),doQuery:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.beforeQuery();case 2:if(t=e.sent,!1===t){e.next=17;break}return e.next=6,this.get(this.table.url,Object(c["a"])({},this.table.query));case 6:if(n=e.sent,!n.success||!n.value){e.next=15;break}return e.next=10,this.processQueryData(n.value.list?n.value.list:n.value||[],n);case 10:r=e.sent,this.table.data=r,this.table.total=Number(n.value.total)||this.table.data.lenght,e.next=17;break;case 15:this.table.data=[],this.table.total=0;case 17:return this.loadingBtn=!1,e.next=20,this.afterQuery();case 20:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),changePage:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.table.query.pageNum=t,this.doQuery();case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),changePageSize:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.table.query.pageSize=t,this.doQuery();case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}}},b5b1:function(e,t,n){n("a465"),e.exports=n("584a").Reflect.deleteProperty},d0e4:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Table",{attrs:{columns:e.table.cols,data:e.table.data}}),n("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(t){t.preventDefault(),e.$router.go(-1)}}},[e._v("返回")])],1)},a=[],o=(n("96cf"),n("3b8d")),i=(n("cadf"),n("551c"),n("097d"),n("a7ee")),u=n("9a3e"),c={name:"DistDownSubPro",mixins:[u["a"],i["a"]],data:function(){var e=this;return{table:{url:"/api/channel/group/sub/list",query:{id:this.$route.params.channelId},cols:[{title:"子产品名",key:"name"},{title:"供应商",key:"epName"},{title:"市场价",key:"marketPrice",render:this.renderMoney},{title:"创建时间",key:"createTime",render:this.renderDate},{title:"操作",render:function(t,n){return e.renderActions(t,n,[{config:{loading:e.loadingBtn,style:{marginRight:"5px"}},click:function(){return e.DownSubPro(n.row)},text:"下架"}])}}],data:[]}}},methods:{DownSubPro:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.post("api/channel/group/sub/down",{channelId:this.$route.params.channelId,productsubId:t.id});case 2:n=e.sent,n.success&&(this.$Message.success("下架成功"),this.doQuery());case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},s=c,l=n("2877"),p=Object(l["a"])(s,r,a,!1,null,null,null);p.options.__file="distribute-downSubPro.vue";t["default"]=p.exports},d206:function(e,t,n){var r=n("63b6");r(r.S,"Reflect",{has:function(e,t){return t in e}})},d656:function(e,t,n){e.exports=n("b5b1")},fae4:function(e,t,n){e.exports=n("05ca")}}]);
//# sourceMappingURL=chunk-0ca15503.a203e791.js.map