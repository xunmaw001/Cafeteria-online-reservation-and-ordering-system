(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/caipinfenlei/add-or-update"],{"2ae7":function(e,t,n){},"345c":function(e,t,n){"use strict";(function(e){n("8274");r(n("66fd"));var t=r(n("d615"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},5660:function(e,t,n){"use strict";n.r(t);var r=n("e524"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},"736b":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},i=[]},a9bb:function(e,t,n){"use strict";var r=n("2ae7"),a=n.n(r);a.a},d615:function(e,t,n){"use strict";n.r(t);var r=n("736b"),a=n("5660");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("a9bb");var c,u=n("f0c5"),o=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"54469f8c",null,!1,r["a"],c);t["default"]=o.exports},e524:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,a,i,c){try{var u=e[i](c),o=u.value}catch(s){return void n(s)}u.done?t(o):Promise.resolve(o).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function u(e){i(c,r,a,u,o,"next",e)}function o(e){i(c,r,a,u,o,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("67b0"))}.bind(null,n)).catch(n.oe)},o={data:function(){return{cross:"",ruleForm:{caipinfenlei:""},user:{},ro:{caipinfenlei:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var n=this;return c(r.default.mark((function a(){var i,c,u,o;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.getStorageSync("nowTable"),a.next=3,n.$api.session(i);case 3:if(c=a.sent,n.user=c.data,n.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(n.ruleForm.refid=t.refid,n.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){a.next=13;break}return n.ruleForm.id=t.id,a.next=11,n.$api.info("caipinfenlei",n.ruleForm.id);case 11:c=a.sent,n.ruleForm=c.data;case 13:if(n.cross=t.cross,!t.cross){a.next=25;break}u=e.getStorageSync("crossObj"),a.t0=r.default.keys(u);case 17:if((a.t1=a.t0()).done){a.next=25;break}if(o=a.t1.value,"caipinfenlei"!=o){a.next=23;break}return n.ruleForm.caipinfenlei=u[o],n.ro.caipinfenlei=!0,a.abrupt("continue",17);case 23:a.next=17;break;case 25:n.styleChange();case 26:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return c(r.default.mark((function n(){var a,i,c,u,o,s,f,l,d,p;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.cross){n.next=16;break}if(u=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==u){n.next=16;break}if(s=e.getStorageSync("crossObj"),u.startsWith("[")){n.next=12;break}for(f in s)f==u&&(s[f]=o);return l=e.getStorageSync("crossTable"),n.next=10,t.$api.update("".concat(l),s);case 10:n.next=16;break;case 12:a=Number(e.getStorageSync("userid")),i=s["id"],c=e.getStorageSync("statusColumnName"),c=c.replace(/\[/,"").replace(/\]/,"");case 16:if(!i||!a){n.next=38;break}return t.ruleForm.crossuserid=a,t.ruleForm.crossrefid=i,d={page:1,limit:10,crossuserid:a,crossrefid:i},n.next=22,t.$api.list("caipinfenlei",d);case 22:if(p=n.sent,!(p.data.total>=c)){n.next=28;break}return t.$utils.msg(e.getStorageSync("tips")),n.abrupt("return",!1);case 28:if(!t.ruleForm.id){n.next=33;break}return n.next=31,t.$api.update("caipinfenlei",t.ruleForm);case 31:n.next=35;break;case 33:return n.next=35,t.$api.add("caipinfenlei",t.ruleForm);case 35:t.$utils.msgBack("提交成功");case 36:n.next=46;break;case 38:if(!t.ruleForm.id){n.next=43;break}return n.next=41,t.$api.update("caipinfenlei",t.ruleForm);case 41:n.next=45;break;case 43:return n.next=45,t.$api.add("caipinfenlei",t.ruleForm);case 45:t.$utils.msgBack("提交成功");case 46:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(n,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o}).call(this,n("543d")["default"])}},[["345c","common/runtime","common/vendor"]]]);