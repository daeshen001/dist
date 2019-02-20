(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-767f0000"],{"319a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Form",{ref:"formData",attrs:{model:e.formData,rules:e.ruleValidate,"label-width":80}},[a("FormItem",{staticStyle:{width:"400px"},attrs:{label:"退货规则名称",prop:"name"}},[a("Input",{attrs:{placeholder:"请输入退货规则名,名称是唯一的"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("FormItem",{staticStyle:{width:"400px"},attrs:{label:"产品类型",prop:"productType"}},[a("Select",{attrs:{placeholder:"选择产品类型"},model:{value:e.formData.productType,callback:function(t){e.$set(e.formData,"productType",t)},expression:"formData.productType"}},[a("Option",{attrs:{value:5001}},[e._v("景点")]),a("Option",{attrs:{value:5002}},[e._v("酒店")]),a("Option",{attrs:{value:5003}},[e._v("线路")])],1)],1),a("FormItem",{attrs:{label:"是否可退",prop:"refund"}},[a("RadioGroup",{on:{"on-change":e.changStatus},model:{value:e.formData.refund,callback:function(t){e.$set(e.formData,"refund",t)},expression:"formData.refund"}},[a("Radio",{attrs:{label:1}},[e._v("是")]),a("Radio",{attrs:{label:0}},[e._v("否")])],1)],1),1===e.formData.refund?a("FormItem",{attrs:{label:"是否无损退",prop:"free"}},[a("RadioGroup",{model:{value:e.formData.free,callback:function(t){e.$set(e.formData,"free",t)},expression:"formData.free"}},[a("Radio",{attrs:{label:1}},[e._v("是")]),a("Radio",{attrs:{label:0}},[e._v("否")])],1)],1):e._e(),0===e.formData.free&&1===e.formData.refund?a("FormItem",{attrs:{label:"开始游玩前"}},[a("Row",[a("i-col",{staticStyle:{"text-align":"center"},attrs:{span:"3"}},[a("InputNumber",{attrs:{max:10,min:1},model:{value:e.rule[0].before.day,callback:function(t){e.$set(e.rule[0].before,"day",t)},expression:"rule[0].before.day"}}),e._v("天\n            ")],1),a("i-col",{attrs:{span:"3"}},[a("FormItem",{attrs:{prop:"date"}},[a("TimePicker",{staticStyle:{width:"112px"},attrs:{format:"HH:mm",placeholder:"选择时间"},model:{value:e.rule[0].before.time,callback:function(t){e.$set(e.rule[0].before,"time",t)},expression:"rule[0].before.time"}}),e._v("时\n                ")],1)],1),a("i-col",{staticStyle:{"text-align":"center"},attrs:{span:"3"}},[e._v("扣费类型")]),a("i-col",{staticStyle:{"text-align":"center"},attrs:{span:"3"}},[a("Select",{attrs:{placeholder:"扣费类型"},model:{value:e.rule[0].fixed,callback:function(t){e.$set(e.rule[0],"fixed",t)},expression:"rule[0].fixed"}},[a("Option",{attrs:{value:1}},[e._v("数值")]),a("Option",{attrs:{value:0}},[e._v("百分比")])],1)],1),a("i-col",{staticStyle:{"text-align":"center"},attrs:{span:"3"}},[0===e.rule[0].fixed||1===e.rule[0].fixed?a("FormItem",{attrs:{label:"扣费值"}},[0===e.rule[0].fixed?a("InputNumber",{attrs:{max:100,min:0,formatter:function(e){return e+"%"},parser:function(e){return e.replace("%","")}},model:{value:e.rule[0].value,callback:function(t){e.$set(e.rule[0],"value",t)},expression:"rule[0].value"}}):e._e(),1===e.rule[0].fixed?a("InputNumber",{attrs:{min:0},model:{value:e.rule[0].value,callback:function(t){e.$set(e.rule[0],"value",t)},expression:"rule[0].value"}}):e._e()],1):e._e()],1)],1)],1):e._e(),0===e.formData.free&&1===e.formData.refund?a("FormItem",{attrs:{label:"开始游玩中"}},[a("Row",[a("i-col",{staticStyle:{"text-align":"center"},attrs:{span:"6"}},[e._v("    ")]),a("i-col",{staticStyle:{"text-align":"center"},attrs:{span:"3"}},[e._v("扣费类型")]),a("i-col",{staticStyle:{"text-align":"center"},attrs:{span:"3"}},[a("Select",{attrs:{placeholder:"扣费类型"},model:{value:e.rule[1].fixed,callback:function(t){e.$set(e.rule[1],"fixed",t)},expression:"rule[1].fixed"}},[a("Option",{attrs:{value:1}},[e._v("数值")]),a("Option",{attrs:{value:0}},[e._v("百分比")])],1)],1),a("i-col",{staticStyle:{"text-align":"center"},attrs:{span:"3"}},[0===e.rule[1].fixed||1===e.rule[1].fixed?a("FormItem",{attrs:{label:"扣费值"}},[0===e.rule[1].fixed?a("InputNumber",{attrs:{max:100,min:0,formatter:function(e){return e+"%"},parser:function(e){return e.replace("%","")}},model:{value:e.rule[1].value,callback:function(t){e.$set(e.rule[1],"value",t)},expression:"rule[1].value"}}):e._e(),1===e.rule[1].fixed?a("InputNumber",{attrs:{min:0},model:{value:e.rule[1].value,callback:function(t){e.$set(e.rule[1],"value",t)},expression:"rule[1].value"}}):e._e()],1):e._e()],1)],1)],1):e._e(),0===e.formData.free&&1===e.formData.refund?a("FormItem",{attrs:{label:"开始游玩后"}},[a("Row",[a("i-col",{staticStyle:{"text-align":"center"},attrs:{span:"3"}},[a("InputNumber",{attrs:{max:10,min:1},model:{value:e.rule[2].after.day,callback:function(t){e.$set(e.rule[2].after,"day",t)},expression:"rule[2].after.day"}}),e._v("天\n            ")],1),a("i-col",{attrs:{span:"3"}},[a("FormItem",{attrs:{prop:"date"}},[a("TimePicker",{staticStyle:{width:"112px"},attrs:{format:"HH:mm",placeholder:"选择时间"},model:{value:e.rule[2].after.time,callback:function(t){e.$set(e.rule[2].after,"time",t)},expression:"rule[2].after.time"}}),e._v("时\n                ")],1)],1),a("i-col",{staticStyle:{"text-align":"center"},attrs:{span:"3"}},[e._v("扣费类型")]),a("i-col",{staticStyle:{"text-align":"center"},attrs:{span:"3"}},[a("Select",{attrs:{placeholder:"扣费类型"},model:{value:e.rule[2].fixed,callback:function(t){e.$set(e.rule[2],"fixed",t)},expression:"rule[2].fixed"}},[a("Option",{attrs:{value:1}},[e._v("数值")]),a("Option",{attrs:{value:0}},[e._v("百分比")])],1)],1),a("i-col",{staticStyle:{"text-align":"center"},attrs:{span:"3"}},[0===e.rule[2].fixed||1===e.rule[2].fixed?a("FormItem",{attrs:{label:"扣费值"}},[0===e.rule[2].fixed?a("InputNumber",{attrs:{max:100,min:0,formatter:function(e){return e+"%"},parser:function(e){return e.replace("%","")}},model:{value:e.rule[2].value,callback:function(t){e.$set(e.rule[2],"value",t)},expression:"rule[2].value"}}):e._e(),1===e.rule[2].fixed?a("InputNumber",{attrs:{min:0},model:{value:e.rule[2].value,callback:function(t){e.$set(e.rule[2],"value",t)},expression:"rule[2].value"}}):e._e()],1):e._e()],1)],1)],1):e._e(),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("formData")}}},[e._v("修改")])],1)],1)},l=[],n=a("f499"),u=a.n(n),i=(a("96cf"),a("3b8d")),o=a("e814"),s=a.n(o),f=(a("d263"),a("8f0c")),c={name:"RefundRuleUpdate",data:function(){return{rule:[{before:{day:null,time:null},fixed:null,value:null},{before:{day:null,time:null},after:{day:null,time:null},fixed:null,value:null},{after:{day:null,time:null},fixed:null,value:null}],formData:{id:null,name:null,productType:null,refund:null,free:null,rule:null},ruleValidate:{name:[{required:!0,message:"请填入名字",trigger:"blur"}],productType:[{required:!0,message:"请填入产品类型"}]}}},watch:{},mounted:function(){if(this.formData=this.$route.params,void 0!==this.formData.rule&&null!==this.formData.rule){var e=JSON.parse(this.formData.rule);e.map(function(e){1===e.fixed&&(e.value=s()((e.value/100).toFixed(0)))}),this.rule=e}},methods:{handleSubmit:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.formData.validate();case 2:if(a=e.sent,!a){e.next=9;break}return 0===this.formData.free&&1===this.formData.refund&&(r=JSON.parse(u()(this.rule)),r[1].before.time=r[0].before.time,r[1].before.day=r[0].before.day,r[1].after.time=r[2].after.time,r[1].after.day=r[2].after.day,r.map(function(e){1===e.fixed&&(e.value=s()((100*e.value).toFixed(0)))}),this.formData.rule=u()(r)),e.next=7,this.post("api/refund/rules/update",this.formData);case 7:l=e.sent,l.success&&(this.$Message.info("修改退货规则成功"),f["a"].$emit("RefundRule-update"),this.$router.push({name:"RefundRuleList"}));case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),changStatus:function(){0===this.formData.refund&&(this.formData.free=null,this.formData.rule=null)}}},m=c,d=a("2877"),p=Object(d["a"])(m,r,l,!1,null,null,null);p.options.__file="rule-update.vue";t["default"]=p.exports},"386b":function(e,t,a){var r=a("5ca1"),l=a("79e5"),n=a("be13"),u=/"/g,i=function(e,t,a,r){var l=String(n(e)),i="<"+t;return""!==a&&(i+=" "+a+'="'+String(r).replace(u,"&quot;")+'"'),i+">"+l+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(i),r(r.P+r.F*l(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},"5d6b":function(e,t,a){var r=a("e53d").parseInt,l=a("a1ce").trim,n=a("e692"),u=/^[-+]?0[xX]/;e.exports=8!==r(n+"08")||22!==r(n+"0x16")?function(e,t){var a=l(String(e),3);return r(a,t>>>0||(u.test(a)?16:10))}:r},7445:function(e,t,a){var r=a("63b6"),l=a("5d6b");r(r.G+r.F*(parseInt!=l),{parseInt:l})},"8f0c":function(e,t,a){"use strict";var r=a("2b0e");t["a"]=new r["default"]},b9e9:function(e,t,a){a("7445"),e.exports=a("584a").parseInt},d263:function(e,t,a){"use strict";a("386b")("fixed",function(e){return function(){return e(this,"tt","","")}})},e814:function(e,t,a){e.exports=a("b9e9")}}]);
//# sourceMappingURL=chunk-767f0000.6de5fdc6.js.map