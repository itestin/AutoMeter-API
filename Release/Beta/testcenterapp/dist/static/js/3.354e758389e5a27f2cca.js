webpackJsonp([3],{SldL:function(e,t){!function(t){"use strict";var n,a=Object.prototype,i=a.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",r=s.toStringTag||"@@toStringTag",o="object"==typeof e,u=t.regeneratorRuntime;if(u)o&&(e.exports=u);else{(u=t.regeneratorRuntime=o?e.exports:{}).wrap=y;var p="suspendedStart",h="suspendedYield",m="executing",d="completed",f={},g={};g[l]=function(){return this};var v=Object.getPrototypeOf,b=v&&v(v(F([])));b&&b!==a&&i.call(b,l)&&(g=b);var x=S.prototype=_.prototype=Object.create(g);w.prototype=x.constructor=S,S.constructor=w,S[r]=w.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,S):(e.__proto__=S,r in e||(e[r]="GeneratorFunction")),e.prototype=Object.create(x),e},u.awrap=function(e){return{__await:e}},k($.prototype),$.prototype[c]=function(){return this},u.AsyncIterator=$,u.async=function(e,t,n,a){var i=new $(y(e,t,n,a));return u.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},k(x),x[r]="Generator",x[l]=function(){return this},x.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},u.values=F,z.prototype={constructor:z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(a,i){return c.type="throw",c.arg=e,t.next=a,i&&(t.method="next",t.arg=n),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var l=this.tryEntries[s],c=l.completion;if("root"===l.tryLoc)return a("end");if(l.tryLoc<=this.prev){var r=i.call(l,"catchLoc"),o=i.call(l,"finallyLoc");if(r&&o){if(this.prev<l.catchLoc)return a(l.catchLoc,!0);if(this.prev<l.finallyLoc)return a(l.finallyLoc)}else if(r){if(this.prev<l.catchLoc)return a(l.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return a(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&i.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var s=a;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var l=s?s.completion:{};return l.type=e,l.arg=t,s?(this.method="next",this.next=s.finallyLoc,f):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var i=a.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:F(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=n),f}}}function y(e,t,n,a){var i=t&&t.prototype instanceof _?t:_,s=Object.create(i.prototype),l=new z(a||[]);return s._invoke=function(e,t,n){var a=p;return function(i,s){if(a===m)throw new Error("Generator is already running");if(a===d){if("throw"===i)throw s;return P()}for(n.method=i,n.arg=s;;){var l=n.delegate;if(l){var c=O(l,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=m;var r=L(e,t,n);if("normal"===r.type){if(a=n.done?d:h,r.arg===f)continue;return{value:r.arg,done:n.done}}"throw"===r.type&&(a=d,n.method="throw",n.arg=r.arg)}}}(e,n,l),s}function L(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function _(){}function w(){}function S(){}function k(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function $(e){var t;this._invoke=function(n,a){function s(){return new Promise(function(t,s){!function t(n,a,s,l){var c=L(e[n],e,a);if("throw"!==c.type){var r=c.arg,o=r.value;return o&&"object"==typeof o&&i.call(o,"__await")?Promise.resolve(o.__await).then(function(e){t("next",e,s,l)},function(e){t("throw",e,s,l)}):Promise.resolve(o).then(function(e){r.value=e,s(r)},l)}l(c.arg)}(n,a,t,s)})}return t=t?t.then(s,s):s()}}function O(e,t){var a=e.iterator[t.method];if(a===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,O(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var i=L(a,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,f;var s=i.arg;return s?s.done?(t[e.resultName]=s.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,f):s:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function F(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,s=function t(){for(;++a<e.length;)if(i.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=n,t.done=!0,t};return s.next=s}}return{next:P}}function P(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(e,t,n){e.exports=n("jyFz")},exGp:function(e,t,n){"use strict";t.__esModule=!0;var a,i=n("//Fk"),s=(a=i)&&a.__esModule?a:{default:a};t.default=function(e){return function(){var t=e.apply(this,arguments);return new s.default(function(e,n){return function a(i,l){try{var c=t[i](l),r=c.value}catch(e){return void n(e)}if(!c.done)return s.default.resolve(r).then(function(e){a("next",e)},function(e){a("throw",e)});e(r)}("next")})}}},"j7l/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Xxa5"),i=n.n(a),s=n("exGp"),l=n.n(s),c=n("Dd8w"),r=n.n(c),o=n("2d0t"),u=n("W+bg"),p=n("XcM5"),h=n("W5b6"),m=n("NXqa"),d=n("vuyV"),f=n("0xDb"),g=n("W/rB"),v=n("L6vm"),b=n("NYxO"),x={filters:{statusFilter:function(e){return{published:"success",draft:"gray",deleted:"danger"}[e]}},data:function(){return{itemplanKey:null,itemcaseKey:null,planbusinessdiclist:[],tmpexecuteplanname:"",tmpcasedeployunitname:null,tmpcaseapiname:null,tmpcaseexecuteplanid:null,tmpcasecasetype:null,show:!1,PerformanceVisible:!1,enviromentnameList:[],apiList:[],deployunitList:[],multipleSelection:[],casemultipleSelection:[],executeplanList:[],testcaseList:[],testcaselastList:[],executeplancaseList:[],executeplancaseexistList:[],executeplancaseremovetList:[],executeplanstopList:[],tmpplanbatchList:[],listLoading:!1,caselistLoading:!1,total:0,casetotal:0,apiQuery:{page:1,size:10,deployunitname:""},listQuery:{page:1,size:10,listLoading:!0,executeplanname:""},caselistQuery:{page:1,size:10,listLoading:!0,deployunitname:null,apiname:null,executeplanid:null,casetype:null},dialogStatus:"add",dialogFormVisible:!1,casedialogFormVisible:!1,batchdialogFormVisible:!1,loadcase:"装载用例",loadbatch:"执行计划",textMap:{updateRole:"修改测试集合",update:"修改测试集合",add:"添加测试集合"},diclevelQuery:{page:1,size:100,diccode:"planbusinesstype"},btnLoading:!1,casebtnLoading:!1,tmpexecuteplan:{id:"",executeplanname:"",enviromentname:"",envid:"",status:"",usetype:"",businesstype:"",ip:"",memo:"",creator:"",runmode:""},tmpplanbatch:{executeplanid:"",executeplanname:"",batchname:"",creator:""},tmpplanenv:{id:"",envid:"",enviromentname:""},tmpapicases:{id:"",casename:"",deployunitname:"",apiname:"",casejmxname:"",casecontent:"",expect:"",level:"",memo:"",creator:"admin"},search:{page:1,size:10,executeplanname:null,businesstype:""},searchcase:{page:1,size:10,deployunitname:null,apiname:null,executeplanid:null,casetype:null}}},computed:r()({},Object(b.b)(["name","sidebar","avatar"])),created:function(){this.getexecuteplanList(),this.getapiList(),this.getdepunitList(),this.getenviromentallList(),this.getdatabydiccodeList()},methods:{getdatabydiccodeList:function(){var e=this;Object(v.b)(this.diclevelQuery).then(function(t){e.planbusinessdiclist=t.data.list}).catch(function(t){e.$message.error("加载组件名字典列表失败")})},unix2CurrentTime:f.b,stopexecuteplanList:function(){for(var e=this,t=0;t<this.multipleSelection.length;t++)"waiting"!==this.multipleSelection[t].status&&"new"!==this.multipleSelection[t].status&&"finish"!==this.multipleSelection[t].status&&"stop"!==this.multipleSelection[t].status||this.multipleSelection.splice(t);if(0===this.multipleSelection.length)this.$message.error("未选择执行计划,或者只有运行中才可以停止");else{for(var n=0;n<this.multipleSelection.length;n++)this.executeplanstopList.push({id:this.multipleSelection[n].id,status:"stop"});Object(d.k)(this.executeplanstopList).then(function(){e.$message.success("已停止执行计划"),e.btnLoading=!1}).catch(function(t){e.$message.error("停止计划执行失败"),e.btnLoading=!1})}this.getexecuteplanList()},savebatchandexecuteplancase:function(){var e=this;this.$refs.tmpplanbatch.validate(function(t){if(t){if(e.btnLoading=!0,0===e.multipleSelection.length)return void e.$message.error("未选择执行计划,或者所选计划已经在执行中");if(e.multipleSelection.length>1)return void e.$message.error("不支持多执行计划一起提交，单个提交");e.tmpplanbatch.executeplanname=e.multipleSelection[0].executeplanname,Object(h.a)(e.tmpplanbatch).then(function(){e.executeplancase(),e.batchdialogFormVisible=!1,e.btnLoading=!1}).catch(function(t){e.btnLoading=!1})}})},executeplancase:function(){var e=this;this.tmpplanbatchList=[],this.$refs.tmpplanbatch.validate(function(t){if(t){for(var n=0;n<e.multipleSelection.length;n++)"running"===e.multipleSelection[n].status&&e.multipleSelection.splice(n);if(0===e.multipleSelection.length)e.$message.error("未选择执行计划,或者所选计划已经在执行中");else if(e.multipleSelection.length>1)e.$message.error("不支持多执行计划一起提交，单个提交");else{for(var a=0;a<e.multipleSelection.length;a++)e.tmpplanbatchList.push({planid:e.multipleSelection[0].id,batchname:e.tmpplanbatch.batchname});Object(d.c)(e.tmpplanbatchList).then(function(){e.$message.success("计划即将开始执行"),e.btnLoading=!1}).catch(function(t){e.$message.error("计划执行失败"),e.btnLoading=!1})}e.getexecuteplanList()}})},handleClickTableRow:function(e,t,n){},handleSelectionChange:function(e){this.multipleSelection=e,console.log("00000000000000000000000000"),console.log(this.multipleSelection)},casehandleClickTableRow:function(e,t,n){console.log(e)},casehandleSelectionChange:function(e){this.casemultipleSelection=e},ustypeChanged:function(e){"性能"===e?(this.PerformanceVisible=!0,this.tmpexecuteplan.runmode=""):(this.PerformanceVisible=!1,this.tmpexecuteplan.runmode="多机执行")},getexecuteplanList:function(){var e=this;this.search.execplanname=this.tmpexecplanname,this.search.batchname=this.tmpbatchname,this.listLoading=!0,Object(d.i)(this.search).then(function(t){e.executeplanList=t.data.list,e.total=t.data.total,e.listLoading=!1}).catch(function(t){e.$message.error("加载字典列表失败")})},searchBy:function(){var e=this;this.search.page=1,this.listLoading=!0,Object(d.i)(this.search).then(function(t){e.itemKey=Math.random(),e.executeplanList=t.data.list,e.total=t.data.total}).catch(function(t){e.$message.error("搜索失败")}),this.tmpexecuteplanname=this.search.executeplanname,this.listLoading=!1,this.btnLoading=!1},handleSizeChange:function(e){this.search.page=1,this.search.size=e,this.getexecuteplanList()},handleCurrentChange:function(e){this.search.page=e,this.getexecuteplanList()},getIndex:function(e){return(this.search.page-1)*this.search.size+e+1},enviromentselectChanged:function(e){for(var t=0;t<this.enviromentnameList.length;t++)this.enviromentnameList[t].enviromentname===e&&(this.tmpexecuteplan.envid=this.enviromentnameList[t].id),console.log(this.enviromentnameList[t].id)},selectChanged:function(e){var t=this;this.apiList=null,this.apiQuery.deployunitname=e,Object(u.h)(this.apiQuery).then(function(e){t.apiList=e.data.list}).catch(function(e){t.$message.error("加载api列表失败")})},getapiList:function(){var e=this;this.caselistLoading=!0,Object(u.h)(this.listQuery).then(function(t){e.apiList=t.data.list,e.caselistLoading=!1}).catch(function(t){e.$message.error("加载api列表失败")})},getenviromentallList:function(){var e=this;Object(g.c)().then(function(t){e.enviromentnameList=t.data}).catch(function(t){e.$message.error("加载环境列表失败")})},getdepunitList:function(){var e=this;this.caselistLoading=!0,Object(p.d)(this.listQuery).then(function(t){e.deployunitList=t.data.list}).catch(function(t){e.$message.error("加载发布单元列表失败")})},getcaseList:function(){var e=this;this.caselistLoading=!0,Object(o.d)(this.listQuery).then(function(t){e.apicasesList=t.data.list,e.caselistLoading=!1}).catch(function(t){e.$message.error("加载用例列表失败")})},searchcaseBy:function(){this.searchtestplanexistcase()},gettestcaselastList:function(){var e=this;return l()(i.a.mark(function t(){var n,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(console.log(e.testcaseList.length),console.log(e.executeplancaseexistList.length),n=0;n<e.testcaseList.length;n++)for(a=0;a<e.executeplancaseexistList.length;a++)e.testcaseList[n].id===e.executeplancaseexistList[a].testcaseid?e.testcaselastList.push({checkstats:!0,deployunitname:e.testcaseList[n].deployunitname,apiname:e.testcaseList[n].apiname,casename:e.testcaseList[n].casename,expect:e.testcaseList[n].expect}):e.testcaselastList.push({checkstats:!1,deployunitname:e.testcaseList[n].deployunitname,apiname:e.testcaseList[n].apiname,casename:e.testcaseList[n].casename,expect:e.testcaseList[n].expect});console.log(e.testcaselastList);case 4:case"end":return t.stop()}},t,e)}))()},searchcaseBydepandapi:function(){var e=this;return l()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.$refs.searchcase.validate(function(t){t&&(e.casebtnLoading=!0,e.caselistLoading=!0,e.searchcase.page=e.caselistQuery.page,e.searchcase.size=e.caselistQuery.size,Object(o.k)(e.searchcase).then(function(t){e.testcaseList=t.data.list,console.log(e.testcaseList.length),e.casetotal=t.data.total}).catch(function(t){e.$message.error("搜索失败")}),e.caselistLoading=!1,e.casebtnLoading=!1)});case 1:case"end":return t.stop()}},t,e)}))()},searchtestplanexistcase:function(){var e=this;this.testcaselastList=[],this.$refs.searchcase.validate(function(t){t&&(e.searchcase.executeplanid=e.tmpexecuteplan.id,e.searchcase.casetype=e.tmpexecuteplan.usetype,e.searchcase.page=1,Object(m.f)(e.searchcase).then(function(t){e.testcaselastList=t.data.list,e.casetotal=t.data.total,e.$nextTick(function(){for(var t=0;t<e.testcaselastList.length;t++)!0===e.testcaselastList[t].status&&e.$refs.caseTable.toggleRowSelection(e.testcaselastList[t],!0)})}).catch(function(t){e.$message.error("获取已装载的用例失败")}))}),this.tmpcasedeployunitname=this.searchcase.deployunitname,this.tmpcaseapiname=this.searchcase.apiname,this.tmpcaseexecuteplanid=this.searchcase.executeplanid,this.tmpcasecasetype=this.searchcase.casetype},casehandleSizeChange:function(e){this.searchcase.page=1,this.searchcase.size=e,this.searchtestplanexistcase()},casehandleCurrentChange:function(e){this.searchcase.page=e,this.searchtestplanexistcase()},casegetIndex:function(e){return(this.searchcase.page-1)*this.searchcase.size+e+1},showAddexecuteplanDialog:function(){this.dialogFormVisible=!0,this.dialogStatus="add",this.tmpexecuteplan.id="",this.tmpexecuteplan.executeplanname="",this.tmpexecuteplan.status="new",this.tmpexecuteplan.memo="",this.tmpexecuteplan.usetype="",this.tmpexecuteplan.enviromentname="",this.tmpexecuteplan.businesstype="",this.tmpexecuteplan.creator=this.name,this.tmpexecuteplan.runmode=""},showplanbatchDialog:function(){for(var e=this,t=0;t<this.multipleSelection.length;t++)"running"===this.multipleSelection[t].status&&this.multipleSelection.splice(t);0===this.multipleSelection.length?this.$message.error("未选择执行计划,或者所选计划已经在执行中"):this.multipleSelection.length>1?this.$message.error("不支持多执行计划一起提交，单个提交"):(this.tmpplanenv.id=this.multipleSelection[0].id,this.tmpplanenv.envid=this.multipleSelection[0].envid,this.tmpplanenv.enviromentname=this.multipleSelection[0].enviromentname,Object(d.b)(this.tmpplanenv).then(function(){e.batchdialogFormVisible=!0,e.tmpplanbatch.executeplanid=e.multipleSelection[0].id,e.tmpplanbatch.creator=e.name,e.tmpplanbatch.batchname=""}).catch(function(e){}))},addexecuteplan:function(){var e=this;this.$refs.tmpexecuteplan.validate(function(t){t&&(e.btnLoading=!0,"功能"===e.tmpexecuteplan.usetype&&(e.tmpexecuteplan.runmode="多机执行"),Object(d.a)(e.tmpexecuteplan).then(function(){e.$message.success("添加成功"),e.getexecuteplanList(),e.dialogFormVisible=!1,e.btnLoading=!1}).catch(function(t){e.$message.error("添加失败"),e.btnLoading=!1}))})},showUpdateexecuteplanDialog:function(e){this.dialogFormVisible=!0,this.dialogStatus="update",this.tmpexecuteplan.id=this.executeplanList[e].id,this.tmpexecuteplan.executeplanname=this.executeplanList[e].executeplanname,this.tmpexecuteplan.status=this.executeplanList[e].status,this.tmpexecuteplan.usetype=this.executeplanList[e].usetype,this.tmpexecuteplan.memo=this.executeplanList[e].memo,this.tmpexecuteplan.enviromentname=this.executeplanList[e].enviromentname,this.tmpexecuteplan.businesstype=this.executeplanList[e].businesstype,this.tmpexecuteplan.creator=this.name,this.tmpexecuteplan.runmode=this.executeplanList[e].runmode,console.log(this.tmpexecuteplan.runmode),"性能"===this.tmpexecuteplan.usetype?this.PerformanceVisible=!0:(this.PerformanceVisible=!1,this.tmpexecuteplan.runmode="多机执行");for(var t=0;t<this.enviromentnameList.length;t++)this.enviromentnameList[t].enviromentname===this.tmpexecuteplan.enviromentname&&(this.tmpexecuteplan.envid=this.enviromentnameList[t].id)},addexecuteplantestcase:function(){var e=this;if(this.executeplancaseList=[],0===this.casemultipleSelection.length)this.$message.error("请选择装载的用例");else{for(var t=0;t<this.casemultipleSelection.length;t++)this.executeplancaseList.push({executeplanid:this.tmpexecuteplan.id,deployunitid:this.casemultipleSelection[t].deployunitid,apiid:this.casemultipleSelection[t].apiid,deployunitname:this.casemultipleSelection[t].deployunitname,apiname:this.casemultipleSelection[t].apiname,testcaseid:this.casemultipleSelection[t].id,casename:this.casemultipleSelection[t].casename});Object(m.a)(this.executeplancaseList).then(function(){e.$message.success("装载成功")}).catch(function(t){e.$message.error("装载失败")})}},removeexecuteplantestcase:function(){var e=this;if(this.executeplancaseremovetList=[],this.testcaselastList.length===this.casemultipleSelection.length)this.$message.error("未找到需要取消装载的用例");else{for(var t=0;t<this.testcaselastList.length;t++){for(var n=!1,a=0;a<this.casemultipleSelection.length;a++)if(this.testcaselastList[t].id===this.casemultipleSelection[a].id){n=!0;break}this.testcaselastList[t].id,n||this.executeplancaseremovetList.push({executeplanid:this.tmpexecuteplan.id,deployunitname:this.testcaselastList[t].deployunitname,apiname:this.testcaselastList[t].apiname,testcaseid:this.testcaselastList[t].id,casename:this.testcaselastList[t].casename})}console.log(this.executeplancaseremovetList),Object(m.d)(this.executeplancaseremovetList).then(function(){e.$message.success("取消装载用例成功")}).catch(function(t){e.$message.error("取消装载用例失败")})}},showTestCaseDialog:function(e){this.casedialogFormVisible=!0,this.tmpexecuteplan.id=this.executeplanList[e].id,this.tmpexecuteplan.executeplanname=this.executeplanList[e].executeplanname,this.tmpexecuteplan.status=this.executeplanList[e].status,this.tmpexecuteplan.usetype=this.executeplanList[e].usetype,this.tmpexecuteplan.memo=this.executeplanList[e].memo,this.searchcase.deployunitname=null,this.searchcase.apiname=null,this.testcaselastList=[],this.casetotal=0},updateexecuteplan:function(){var e=this;this.$refs.tmpexecuteplan.validate(function(t){t&&Object(d.j)(e.tmpexecuteplan).then(function(){e.$message.success("更新成功"),e.getexecuteplanList(),e.dialogFormVisible=!1}).catch(function(t){e.$message.error("更新失败"),e.btnLoading=!1})})},removeexecuteplan:function(e){var t=this;this.$confirm("删除该执行计划？","警告",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){var n=t.executeplanList[e].id;Object(d.h)(n).then(function(){t.$message.success("删除成功"),t.getexecuteplanList()})}).catch(function(){t.$message.info("已取消删除")})},isUniqueDetail:function(e){for(var t=0;t<this.executeplanList.length;t++)if(this.executeplanList[t].id!==e.id&&this.executeplanList[t].executeplanname===e.executeplanname)return this.$message.error("执行计划名已存在"),!1;return!0}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",[e.hasPermission("executeplan:list")?n("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-refresh"},nativeOn:{click:function(t){return t.preventDefault(),e.getexecuteplanList(t)}}},[e._v("刷新")]):e._e(),e._v(" "),e.hasPermission("executeplan:list")?n("el-button",{attrs:{type:"success",size:"mini"},nativeOn:{click:function(t){return t.preventDefault(),e.showplanbatchDialog(t)}}},[e._v("运行")]):e._e(),e._v(" "),e.hasPermission("executeplan:add")?n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},nativeOn:{click:function(t){return t.preventDefault(),e.showAddexecuteplanDialog(t)}}},[e._v("添加测试集合")]):e._e()],1),e._v(" "),e.hasPermission("executeplan:search")?n("span",[n("el-form-item",[n("el-input",{attrs:{placeholder:"执行计划名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchBy(t)}},model:{value:e.search.executeplanname,callback:function(t){e.$set(e.search,"executeplanname",t)},expression:"search.executeplanname"}})],1),e._v(" "),n("el-form-item",[n("el-select",{attrs:{placeholder:"业务类型"},model:{value:e.search.businesstype,callback:function(t){e.$set(e.search,"businesstype",t)},expression:"search.businesstype"}},[n("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.planbusinessdiclist,function(e,t){return n("div",{key:t},[n("el-option",{attrs:{label:e.dicitmevalue,value:e.dicitmevalue}})],1)})],2)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.searchBy}},[e._v("查询")])],1)],1):e._e()],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:e.itemplanKey,ref:"fileTable",attrs:{data:e.executeplanList,"element-loading-text":"loading",border:"",fit:"","highlight-current-row":""},on:{"row-click":e.handleClickTableRow,"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"40"}}),e._v(" "),n("el-table-column",{attrs:{label:"编号",align:"center",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{domProps:{textContent:e._s(e.getIndex(t.$index))}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"集合名",align:"center",prop:"executeplanname",width:"100"}}),e._v(" "),e.show?n("el-table-column",{attrs:{label:"envid",align:"center",prop:"envid",width:"50"}}):e._e(),e._v(" "),e.show?n("el-table-column",{attrs:{label:"状态",align:"center",prop:"status",width:"50"}}):e._e(),e._v(" "),n("el-table-column",{attrs:{label:"业务类型",align:"center",prop:"businesstype",width:"100"}}),e._v(" "),n("el-table-column",{attrs:{label:"执行环境",align:"center",prop:"enviromentname",width:"100"}}),e._v(" "),n("el-table-column",{attrs:{label:"类型",align:"center",prop:"usetype",width:"60"}}),e._v(" "),n("el-table-column",{attrs:{label:"运行模式",align:"center",prop:"runmode",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作人",align:"center",prop:"creator",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{label:"描述",align:"center",prop:"memo",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.unix2CurrentTime(t.row.createTime)))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"最后修改时间",align:"center",prop:"lastmodifyTime",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.unix2CurrentTime(t.row.lastmodifyTime))+"\n      ")]}}])}),e._v(" "),e.hasPermission("executeplan:update")||e.hasPermission("executeplan:delete")?n("el-table-column",{attrs:{label:"管理",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.hasPermission("executeplan:update")&&t.row.id!==e.id?n("el-button",{attrs:{type:"primary",size:"mini"},nativeOn:{click:function(n){return n.preventDefault(),e.showUpdateexecuteplanDialog(t.$index)}}},[e._v("修改集合")]):e._e(),e._v(" "),e.hasPermission("executeplan:delete")&&t.row.id!==e.id?n("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(n){return n.preventDefault(),e.removeexecuteplan(t.$index)}}},[e._v("删除")]):e._e()]}}],null,!1,672136014)}):e._e()],1),e._v(" "),n("el-pagination",{attrs:{"current-page":e.search.page,"page-size":e.search.size,total:e.total,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),n("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"tmpexecuteplan",staticClass:"small-space",staticStyle:{width:"300px","margin-left":"50px"},attrs:{"status-icon":"","label-position":"left","label-width":"100px",model:e.tmpexecuteplan}},[n("el-form-item",{attrs:{label:"集合名",prop:"executeplanname",required:""}},[n("el-input",{attrs:{type:"text","prefix-icon":"el-icon-edit","auto-complete":"off"},model:{value:e.tmpexecuteplan.executeplanname,callback:function(t){e.$set(e.tmpexecuteplan,"executeplanname",t)},expression:"tmpexecuteplan.executeplanname"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"类型",prop:"usetype",required:""}},[n("el-select",{attrs:{placeholder:"类型"},on:{change:function(t){return e.ustypeChanged(t)}},model:{value:e.tmpexecuteplan.usetype,callback:function(t){e.$set(e.tmpexecuteplan,"usetype",t)},expression:"tmpexecuteplan.usetype"}},[n("el-option",{attrs:{label:"功能",value:"功能"}}),e._v(" "),n("el-option",{attrs:{label:"性能",value:"性能"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"执行环境",prop:"enviromentname",required:""}},[n("el-select",{attrs:{placeholder:"执行环境"},on:{change:function(t){return e.enviromentselectChanged(t)}},model:{value:e.tmpexecuteplan.enviromentname,callback:function(t){e.$set(e.tmpexecuteplan,"enviromentname",t)},expression:"tmpexecuteplan.enviromentname"}},[n("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),e._v(" "),e._l(e.enviromentnameList,function(e,t){return n("div",{key:t},[n("el-option",{attrs:{label:e.enviromentname,value:e.enviromentname,required:""}})],1)})],2)],1),e._v(" "),n("el-form-item",{attrs:{label:"业务类型",prop:"businesstype",required:""}},[n("el-select",{attrs:{placeholder:"业务类型"},model:{value:e.tmpexecuteplan.businesstype,callback:function(t){e.$set(e.tmpexecuteplan,"businesstype",t)},expression:"tmpexecuteplan.businesstype"}},[n("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),e._v(" "),e._l(e.planbusinessdiclist,function(e,t){return n("div",{key:t},[n("el-option",{attrs:{label:e.dicitmevalue,value:e.dicitmevalue,required:""}})],1)})],2)],1),e._v(" "),e.PerformanceVisible?n("div",[n("el-form-item",{attrs:{label:"运行模式",prop:"runmode",required:""}},[n("el-select",{attrs:{placeholder:"运行模式"},model:{value:e.tmpexecuteplan.runmode,callback:function(t){e.$set(e.tmpexecuteplan,"runmode",t)},expression:"tmpexecuteplan.runmode"}},[n("el-option",{attrs:{label:"单机运行",value:"单机运行"}}),e._v(" "),n("el-option",{attrs:{label:"多机并行",value:"多机并行"}})],1)],1)],1):e._e(),e._v(" "),n("el-form-item",{attrs:{label:"备注",prop:"memo"}},[n("el-input",{attrs:{type:"text","prefix-icon":"el-icon-message","auto-complete":"off"},model:{value:e.tmpexecuteplan.memo,callback:function(t){e.$set(e.tmpexecuteplan,"memo",t)},expression:"tmpexecuteplan.memo"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{nativeOn:{click:function(t){t.preventDefault(),e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),"add"===e.dialogStatus?n("el-button",{attrs:{type:"success",loading:e.btnLoading},nativeOn:{click:function(t){return t.preventDefault(),e.addexecuteplan(t)}}},[e._v("保存\n      ")]):e._e(),e._v(" "),"update"===e.dialogStatus?n("el-button",{attrs:{type:"success",loading:e.btnLoading},nativeOn:{click:function(t){return t.preventDefault(),e.updateexecuteplan(t)}}},[e._v("修改")]):e._e()],1)],1),e._v(" "),n("el-dialog",{attrs:{title:e.loadcase,visible:e.casedialogFormVisible},on:{"update:visible":function(t){e.casedialogFormVisible=t}}},[n("div",{staticClass:"filter-container"},[n("el-form",{ref:"searchcase",attrs:{inline:!0,model:e.searchcase}},[e.hasPermission("apicases:search")?n("span",[n("el-form-item",{attrs:{label:"发布单元:",prop:"deployunitname",required:""}},[n("el-select",{attrs:{placeholder:"发布单元"},on:{change:function(t){return e.selectChanged(t)}},model:{value:e.searchcase.deployunitname,callback:function(t){e.$set(e.searchcase,"deployunitname",t)},expression:"searchcase.deployunitname"}},[n("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.deployunitList,function(e,t){return n("div",{key:t},[n("el-option",{attrs:{label:e.deployunitname,value:e.deployunitname,required:""}})],1)})],2)],1),e._v(" "),n("el-form-item",{attrs:{label:"API:"}},[n("el-select",{attrs:{placeholder:"api名"},model:{value:e.searchcase.apiname,callback:function(t){e.$set(e.searchcase,"apiname",t)},expression:"searchcase.apiname"}},[n("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.apiList,function(e,t){return n("div",{key:t},[n("el-option",{attrs:{label:e.apiname,value:e.apiname}})],1)})],2)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.searchcaseBy}},[e._v("查询")])],1)],1):e._e()])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:e.itemcaseKey,ref:"caseTable",attrs:{data:e.testcaselastList,"element-loading-text":"loading",border:"",fit:"","highlight-current-row":""},on:{"row-click":e.casehandleClickTableRow,"selection-change":e.casehandleSelectionChange}},[n("el-table-column",{attrs:{label:"编号",align:"center",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{domProps:{textContent:e._s(e.getIndex(t.$index))}})]}}])}),e._v(" "),n("el-table-column",{attrs:{type:"selection",prop:"status",width:"50"}}),e._v(" "),e.show?n("el-table-column",{attrs:{label:"apiid",align:"center",prop:"apiid",width:"120"}}):e._e(),e._v(" "),e.show?n("el-table-column",{attrs:{label:"deployunitid",align:"center",prop:"deployunitid",width:"120"}}):e._e(),e._v(" "),n("el-table-column",{attrs:{label:"用例名",align:"center",prop:"casename",width:"120"}}),e._v(" "),n("el-table-column",{attrs:{label:"发布单元",align:"center",prop:"deployunitname",width:"120"}}),e._v(" "),n("el-table-column",{attrs:{label:"API",align:"center",prop:"apiname",width:"120"}}),e._v(" "),n("el-table-column",{attrs:{label:"期望值",align:"center",prop:"expect",width:"120"}})],1),e._v(" "),n("el-pagination",{attrs:{"current-page":e.searchcase.page,"page-size":e.searchcase.size,total:e.casetotal,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.casehandleSizeChange,"current-change":e.casehandleCurrentChange}}),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{nativeOn:{click:function(t){t.preventDefault(),e.casedialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{type:"success",loading:e.btnLoading},nativeOn:{click:function(t){return t.preventDefault(),e.addexecuteplantestcase(t)}}},[e._v("装载")]),e._v(" "),n("el-button",{attrs:{type:"warning",loading:e.btnLoading},nativeOn:{click:function(t){return t.preventDefault(),e.removeexecuteplantestcase(t)}}},[e._v("取消装载")])],1)],1),e._v(" "),n("el-dialog",{attrs:{title:e.loadbatch,visible:e.batchdialogFormVisible},on:{"update:visible":function(t){e.batchdialogFormVisible=t}}},[n("div",{staticClass:"filter-container"},[n("el-form",{ref:"tmpplanbatch",attrs:{inline:!0,model:e.tmpplanbatch}},[n("el-form-item",{attrs:{label:"执行计划名：",prop:"batchname",required:""}},[n("el-input",{attrs:{type:"text",placeholder:"例如2020-10-21-tag-101","prefix-icon":"el-icon-edit","auto-complete":"off"},model:{value:e.tmpplanbatch.batchname,callback:function(t){e.$set(e.tmpplanbatch,"batchname",t)},expression:"tmpplanbatch.batchname"}})],1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{nativeOn:{click:function(t){t.preventDefault(),e.batchdialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{type:"success",loading:e.btnLoading},nativeOn:{click:function(t){return t.preventDefault(),e.savebatchandexecuteplancase(t)}}},[e._v("提交")])],1)])],1)},staticRenderFns:[]},L=n("VU/8")(x,y,!1,null,null,null);t.default=L.exports},jyFz:function(e,t,n){var a=function(){return this}()||Function("return this")(),i=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,s=i&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,e.exports=n("SldL"),i)a.regeneratorRuntime=s;else try{delete a.regeneratorRuntime}catch(e){a.regeneratorRuntime=void 0}}});
//# sourceMappingURL=3.354e758389e5a27f2cca.js.map