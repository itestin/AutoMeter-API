webpackJsonp([37],{sDRe:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("Dd8w"),i=s.n(a),n=s("2d0t"),c=s("W+bg"),l=s("XcM5"),o=s("vLgD");function r(e){return Object(o.a)({url:"/process/testcase/search",method:"post",data:e})}function p(e){return Object(o.a)({url:"/process/testcase/removecases",method:"post",data:e})}var d=s("vuyV"),h=s("0xDb"),u=s("NYxO"),m={filters:{statusFilter:function(e){return{published:"success",draft:"gray",deleted:"danger"}[e]}},data:function(){return{itemplanKey:null,itemcaseKey:null,tmpplancasedeployunitname:null,tmpplancaseprocesstestcasename:null,tmpplancaseapiname:null,tmpcasecasetype:null,tmpcasedeployunitname:null,tmpcaseapiname:null,tmpprocesstestcaseid:null,tmploadprocesstestcaseid:null,tmpdeployunitid:null,tmploaddeployunitid:null,tmploadapiid:null,tmpapiid:null,execplanList:[],apiList:[],loadapiList:[],deployunitList:[],loaddeployunitList:[],multipleSelection:[],casemultipleSelection:[],processtestcasecaseList:[],processtestcasecaseremovetList:[],testcaseList:[],testcaselastList:[],listLoading:!1,caselistLoading:!1,total:0,casetotal:0,apiQuery:{page:1,size:10,deployunitid:"",deployunitname:""},dialogStatus:"add",dialogFormVisible:!1,casedialogFormVisible:!1,loadcase:"装载用例",btnLoading:!1,casebtnLoading:!1,search:{page:1,size:10,processtestcaseid:null,deployunitid:null,apiid:null,processtestcasename:null,deployunitname:null,apiname:null},searchcase:{page:1,size:10,processtestcaseid:null,processtestcasename:null,deployunitid:null,deployunitname:null,apiid:null,apiname:null,casetype:null}}},computed:i()({},Object(u.b)(["name","sidebar","avatar"])),created:function(){this.getexecplanList(),this.getloadexecplanList(),this.getprocesstestcasecaseList(),this.getdepunitLists(),this.getloaddepunitLists(),this.getenviromentallList(),this.getdatabydiccodeList()},methods:{unix2CurrentTime:h.b,handleSelectionChange:function(e){this.multipleSelection=e,console.log("00000000000000000000000000"),console.log(this.multipleSelection)},casehandleClickTableRow:function(e,t,s){console.log(e)},casehandleSelectionChange:function(e){this.casemultipleSelection=e},getexecplanList:function(){var e=this;Object(d.d)().then(function(t){e.execplanList=t.data}).catch(function(t){e.$message.error("加载计划列表失败")})},getloadexecplanList:function(){var e=this;Object(d.d)().then(function(t){e.loadexecplanList=t.data}).catch(function(t){e.$message.error("加载计划列表失败")})},getprocesstestcasecaseList:function(){var e=this;this.search.processtestcaseid=this.tmploadprocesstestcaseid,this.search.deployunitid=this.tmploaddeployunitid,this.search.apiid=this.tmploadapiid,this.listLoading=!0,r(this.search).then(function(t){e.processtestcasecaseList=t.data.list,e.total=t.data.total,e.listLoading=!1}).catch(function(t){e.$message.error("加载测试集合用例列表失败")})},searchBy:function(){var e=this;this.search.page=1,this.search.processtestcaseid=this.tmploadprocesstestcaseid,this.search.deployunitid=this.tmploaddeployunitid,this.search.apiid=this.tmploadapiid,this.listLoading=!0,console.log(this.search),r(this.search).then(function(t){e.itemKey=Math.random(),e.processtestcasecaseList=t.data.list,e.total=t.data.total}).catch(function(t){e.$message.error("搜索失败")}),this.listLoading=!1,this.btnLoading=!1},handleSizeChange:function(e){this.search.page=1,this.search.size=e,this.getprocesstestcasecaseList()},handleCurrentChange:function(e){this.search.page=e,this.getprocesstestcasecaseList()},getIndex:function(e){return(this.search.page-1)*this.search.size+e+1},testplanselectChanged:function(e){this.tmpprocesstestcaseid=null,this.tmpcasecasetype=null,console.log(this.execplanList);for(var t=0;t<this.execplanList.length;t++)this.execplanList[t].processtestcasename===e&&(this.tmpprocesstestcaseid=this.execplanList[t].id,this.tmpcasecasetype=this.execplanList[t].usetype,console.log("1111111111111111111111"),console.log(this.tmpcasecasetype))},loadtestplanselectChanged:function(e){this.tmploadapiid=null,this.tmploaddeployunitid=null,this.search.apiname=null,this.search.deployunitname=null,this.tmploadprocesstestcaseid=null;for(var t=0;t<this.loadexecplanList.length;t++)this.loadexecplanList[t].processtestcasename===e&&(this.tmploadprocesstestcaseid=this.loadexecplanList[t].id,console.log(this.tmploadprocesstestcaseid))},loadApiselectChanged:function(e){this.tmploadapiid=null;for(var t=0;t<this.loadapiList.length;t++)this.loadapiList[t].apiname===e&&(this.tmploadapiid=this.loadapiList[t].id)},ApiselectChanged:function(e){this.tmpapiid=null;for(var t=0;t<this.apiList.length;t++)this.apiList[t].apiname===e&&(this.tmpapiid=this.apiList[t].id)},loaddeployunitselectChanged:function(e){var t=this;this.tmploadapiid=null,this.tmploaddeployunitid=null,this.search.apiname=null;for(var s=0;s<this.loaddeployunitList.length;s++)this.loaddeployunitList[s].deployunitname===e&&(this.tmploaddeployunitid=this.loaddeployunitList[s].id,this.apiQuery.deployunitid=this.loaddeployunitList[s].id);this.loadapiList=null,this.apiQuery.deployunitname=e,Object(c.d)(this.apiQuery).then(function(e){t.loadapiList=e.data}).catch(function(e){t.$message.error("加载api列表失败")})},deployunitselectChanged:function(e){var t=this;this.tmpapiid=null,this.tmpdeployunitid=null;for(var s=0;s<this.deployunitList.length;s++)this.deployunitList[s].deployunitname===e&&(this.tmpdeployunitid=this.deployunitList[s].id,this.apiQuery.deployunitid=this.deployunitList[s].id);this.apiList=null,this.searchcase.apiname="",this.apiQuery.deployunitname=e,Object(c.d)(this.apiQuery).then(function(e){t.apiList=e.data}).catch(function(e){t.$message.error("加载api列表失败")})},getdepunitLists:function(){var e=this;Object(l.e)().then(function(t){e.deployunitList=t.data}).catch(function(t){e.$message.error("加载发布单元列表失败")})},getloaddepunitLists:function(){var e=this;Object(l.e)().then(function(t){e.loaddeployunitList=t.data}).catch(function(t){e.$message.error("加载发布单元列表失败")})},getapicasesList:function(){var e=this;this.caselistLoading=!0,this.searchcase.processtestcaseid=this.tmpprocesstestcaseid,this.searchcase.deployunitid=this.tmpdeployunitid,this.searchcase.apiid=this.tmpapiid,this.searchcase.casetype=this.tmpcasecasetype,Object(n.m)(this.searchcase).then(function(t){e.testcaselastList=t.data.list,e.casetotal=t.data.total,e.caselistLoading=!1}).catch(function(t){e.$message.error("加载用例列表失败")})},searchcaseBy:function(){var e=this;this.searchcase.page=1,this.searchcase.processtestcaseid=this.tmpprocesstestcaseid,this.searchcase.deployunitid=this.tmpdeployunitid,this.searchcase.apiid=this.tmpapiid,this.searchcase.casetype=this.tmpcasecasetype,console.log(this.searchcase),this.caselistLoading=!0,this.$refs.searchcase.validate(function(t){t&&Object(n.m)(e.searchcase).then(function(t){e.testcaselastList=t.data.list,e.casetotal=t.data.total}).catch(function(t){e.$message.error("获取已装载的用例失败")})}),this.caselistLoading=!1},casehandleSizeChange:function(e){this.searchcase.page=1,this.searchcase.size=e,this.getapicasesList()},casehandleCurrentChange:function(e){this.searchcase.page=e,this.getapicasesList()},casegetIndex:function(e){return(this.searchcase.page-1)*this.searchcase.size+e+1},showUpdateprocesstestcaseDialog:function(e){this.dialogFormVisible=!0,this.dialogStatus="update",this.tmpprocesstestcase.id=this.processtestcasecaseList[e].id,this.tmpprocesstestcase.processtestcasename=this.processtestcasecaseList[e].processtestcasename,this.tmpprocesstestcase.status=this.processtestcasecaseList[e].status,this.tmpprocesstestcase.usetype=this.processtestcasecaseList[e].usetype,this.tmpprocesstestcase.memo=this.processtestcasecaseList[e].memo,this.tmpprocesstestcase.enviromentname=this.processtestcasecaseList[e].enviromentname,this.tmpprocesstestcase.businesstype=this.processtestcasecaseList[e].businesstype,this.tmpprocesstestcase.creator=this.name,this.tmpprocesstestcase.runmode=this.processtestcasecaseList[e].runmode,console.log(this.tmpprocesstestcase.runmode),"性能"===this.tmpprocesstestcase.usetype?this.PerformanceVisible=!0:(this.PerformanceVisible=!1,this.tmpprocesstestcase.runmode="多机执行");for(var t=0;t<this.enviromentnameList.length;t++)this.enviromentnameList[t].enviromentname===this.tmpprocesstestcase.enviromentname&&(this.tmpprocesstestcase.envid=this.enviromentnameList[t].id)},addprocesstestcase:function(){var e,t=this;if(this.testcaseList=[],0===this.casemultipleSelection.length)this.$message.error("请选择装载的用例");else{for(var s=0;s<this.casemultipleSelection.length;s++)this.testcaseList.push({processtestcaseid:this.tmpprocesstestcaseid,deployunitid:this.casemultipleSelection[s].deployunitid,apiid:this.casemultipleSelection[s].apiid,deployunitname:this.casemultipleSelection[s].deployunitname,apiname:this.casemultipleSelection[s].apiname,testcaseid:this.casemultipleSelection[s].id,casename:this.casemultipleSelection[s].casename,creator:this.name});(e=this.testcaseList,Object(o.a)({url:"/process/testcase/addcases",method:"post",data:e})).then(function(){t.casedialogFormVisible=!1,t.getprocesstestcasecaseList(),t.$message.success("装载成功")}).catch(function(e){t.$message.error("装载失败")})}},removebatchprocesstestcase:function(){var e=this;if(this.processtestcasecaseremovetList=[],this.testcaselastList.length===this.casemultipleSelection.length)this.$message.error("未找到需要取消装载的用例");else{for(var t=0;t<this.testcaselastList.length;t++){for(var s=!1,a=0;a<this.casemultipleSelection.length;a++)if(this.testcaselastList[t].id===this.casemultipleSelection[a].id){s=!0;break}this.testcaselastList[t].id,s||this.processtestcasecaseremovetList.push({processtestcaseid:this.tmpprocesstestcase.id,deployunitname:this.testcaselastList[t].deployunitname,apiname:this.testcaselastList[t].apiname,testcaseid:this.testcaselastList[t].id,casename:this.testcaselastList[t].casename})}console.log(this.processtestcasecaseremovetList),p(this.processtestcasecaseremovetList).then(function(){e.$message.success("取消装载用例成功")}).catch(function(t){e.$message.error("取消装载用例失败")})}},showTestCaseDialog:function(){this.casedialogFormVisible=!0,this.dialogStatus="add",this.searchcase.processtestcasename=null,this.searchcase.deployunitname=null,this.searchcase.apiname=null,this.testcaselastList=[],this.casetotal=0},removeprocesstestcase:function(e){var t=this;this.$confirm("删除该测试集合用例？","警告",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){var s,a=t.processtestcasecaseList[e].id;(s=a,Object(o.a)({url:"/process/testcase/"+s,method:"delete"})).then(function(){t.$message.success("删除成功"),t.getprocesstestcasecaseList()})}).catch(function(){t.$message.info("已取消删除")})},DeleteBatchPlanTestCase:function(){var e=this;this.$confirm("取消所选测试集合装载的用例？","警告",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){if(0===e.multipleSelection.length)e.$message.error("请选择需要取消的用例");else{e.processtestcasecaseremovetList=[],console.log(e.multipleSelection);for(var t=0;t<e.multipleSelection.length;t++)e.processtestcasecaseremovetList.push({processtestcaseid:e.multipleSelection[t].processtestcaseid,deployunitname:e.multipleSelection[t].deployunitname,apiname:e.multipleSelection[t].apiname,testcaseid:e.multipleSelection[t].testcaseid,casename:e.multipleSelection[t].casename});p(e.processtestcasecaseremovetList).then(function(){e.$message.success("取消装载用例成功"),e.getprocesstestcasecaseList()}).catch(function(t){e.$message.error("取消装载用例失败")})}}).catch(function(){e.$message.info("取消装载用例异常")})}}},g={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"filter-container"},[s("el-form",{attrs:{inline:!0}},[s("el-form-item",[e.hasPermission("processtestcase:list")?s("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-refresh"},nativeOn:{click:function(t){return t.preventDefault(),e.getprocesstestcasecaseList(t)}}},[e._v("刷新")]):e._e(),e._v(" "),e.hasPermission("processtestcase:list")?s("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},nativeOn:{click:function(t){return t.preventDefault(),e.showTestCaseDialog(t)}}},[e._v("装载用例")]):e._e(),e._v(" "),e.hasPermission("processtestcase:list")?s("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(t){return t.preventDefault(),e.DeleteBatchPlanTestCase(t)}}},[e._v("取消装载")]):e._e()],1),e._v(" "),e.hasPermission("processtestcase:search")?s("span",[s("el-form-item",{attrs:{prop:"processtestcasename"}},[s("el-select",{attrs:{placeholder:"测试集合"},on:{change:function(t){return e.loadtestplanselectChanged(t)}},model:{value:e.search.processtestcasename,callback:function(t){e.$set(e.search,"processtestcasename",t)},expression:"search.processtestcasename"}},[s("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.execplanList,function(e,t){return s("div",{key:t},[s("el-option",{attrs:{label:e.processtestcasename,value:e.processtestcasename}})],1)})],2)],1),e._v(" "),s("el-form-item",{attrs:{prop:"deployunitname"}},[s("el-select",{attrs:{placeholder:"发布单元"},on:{change:function(t){return e.loaddeployunitselectChanged(t)}},model:{value:e.search.deployunitname,callback:function(t){e.$set(e.search,"deployunitname",t)},expression:"search.deployunitname"}},[s("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.loaddeployunitList,function(e,t){return s("div",{key:t},[s("el-option",{attrs:{label:e.deployunitname,value:e.deployunitname,required:""}})],1)})],2)],1),e._v(" "),s("el-form-item",{attrs:{prop:"apiname"}},[s("el-select",{attrs:{placeholder:"api名"},on:{change:function(t){return e.loadApiselectChanged(t)}},model:{value:e.search.apiname,callback:function(t){e.$set(e.search,"apiname",t)},expression:"search.apiname"}},[s("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.loadapiList,function(e,t){return s("div",{key:t},[s("el-option",{attrs:{label:e.apiname,value:e.apiname}})],1)})],2)],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.searchBy}},[e._v("查询")])],1)],1):e._e()],1)],1),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:e.itemplanKey,ref:"fileTable",attrs:{data:e.processtestcasecaseList,"element-loading-text":"loading",border:"",fit:"","highlight-current-row":""},on:{"row-click":e.handleClickTableRow,"selection-change":e.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection",width:"40"}}),e._v(" "),s("el-table-column",{attrs:{label:"编号",align:"center",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",{domProps:{textContent:e._s(e.getIndex(t.$index))}})]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"测试集合名",align:"center",prop:"processtestcasename",width:"150"}}),e._v(" "),s("el-table-column",{attrs:{label:"发布单元",align:"center",prop:"deployunitname",width:"150"}}),e._v(" "),s("el-table-column",{attrs:{label:"用例名",align:"center",prop:"casename",width:"150"}}),e._v(" "),s("el-table-column",{attrs:{label:"API",align:"center",prop:"apiname",width:"150"}}),e._v(" "),s("el-table-column",{attrs:{label:"操作人",align:"center",prop:"creator",width:"80"}}),e._v(" "),s("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.unix2CurrentTime(t.row.createTime)))]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"最后修改时间",align:"center",prop:"lastmodifyTime",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.unix2CurrentTime(t.row.lastmodifyTime))+"\n      ")]}}])}),e._v(" "),e.hasPermission("processtestcase:update")||e.hasPermission("processtestcase:delete")?s("el-table-column",{attrs:{label:"管理",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.hasPermission("processtestcase:delete")&&t.row.id!==e.id?s("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(s){return s.preventDefault(),e.removeprocesstestcase(t.$index)}}},[e._v("删除")]):e._e()]}}],null,!1,1485833120)}):e._e()],1),e._v(" "),s("el-pagination",{attrs:{"current-page":e.search.page,"page-size":e.search.size,total:e.total,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),s("el-dialog",{attrs:{title:e.loadcase,visible:e.casedialogFormVisible},on:{"update:visible":function(t){e.casedialogFormVisible=t}}},[s("div",{staticClass:"filter-container"},[s("el-form",{ref:"searchcase",attrs:{inline:!0,model:e.searchcase}},[s("el-form-item",{attrs:{label:"测试集合:",prop:"processtestcasename",required:""}},[s("el-select",{attrs:{placeholder:"测试集合"},on:{change:function(t){return e.testplanselectChanged(t)}},model:{value:e.searchcase.processtestcasename,callback:function(t){e.$set(e.searchcase,"processtestcasename",t)},expression:"searchcase.processtestcasename"}},[s("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.execplanList,function(e,t){return s("div",{key:t},[s("el-option",{attrs:{label:e.processtestcasename,value:e.processtestcasename}})],1)})],2)],1),e._v(" "),s("el-form-item",{attrs:{label:"发布单元:",prop:"deployunitname",required:""}},[s("el-select",{attrs:{placeholder:"发布单元"},on:{change:function(t){return e.deployunitselectChanged(t)}},model:{value:e.searchcase.deployunitname,callback:function(t){e.$set(e.searchcase,"deployunitname",t)},expression:"searchcase.deployunitname"}},[s("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.deployunitList,function(e,t){return s("div",{key:t},[s("el-option",{attrs:{label:e.deployunitname,value:e.deployunitname}})],1)})],2)],1),e._v(" "),s("el-form-item",{attrs:{label:"API:"}},[s("el-select",{attrs:{placeholder:"api名"},on:{change:function(t){return e.ApiselectChanged(t)}},model:{value:e.searchcase.apiname,callback:function(t){e.$set(e.searchcase,"apiname",t)},expression:"searchcase.apiname"}},[s("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.apiList,function(e,t){return s("div",{key:t},[s("el-option",{attrs:{label:e.apiname,value:e.apiname}})],1)})],2)],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.searchcaseBy}},[e._v("查询")])],1)],1)],1),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.caselistLoading,expression:"caselistLoading",modifiers:{body:!0}}],key:e.itemcaseKey,ref:"caseTable",attrs:{data:e.testcaselastList,"element-loading-text":"loading",border:"",fit:"","highlight-current-row":""},on:{"row-click":e.casehandleClickTableRow,"selection-change":e.casehandleSelectionChange}},[s("el-table-column",{attrs:{label:"编号",align:"center",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",{domProps:{textContent:e._s(e.getIndex(t.$index))}})]}}])}),e._v(" "),s("el-table-column",{attrs:{type:"selection",prop:"status",width:"50"}}),e._v(" "),e.show?s("el-table-column",{attrs:{label:"apiid",align:"center",prop:"apiid",width:"120"}}):e._e(),e._v(" "),e.show?s("el-table-column",{attrs:{label:"deployunitid",align:"center",prop:"deployunitid",width:"120"}}):e._e(),e._v(" "),s("el-table-column",{attrs:{label:"用例名",align:"center",prop:"casename",width:"180"}}),e._v(" "),s("el-table-column",{attrs:{label:"发布单元",align:"center",prop:"deployunitname",width:"180"}}),e._v(" "),s("el-table-column",{attrs:{label:"API",align:"center",prop:"apiname",width:"220"}})],1),e._v(" "),s("el-pagination",{attrs:{"current-page":e.searchcase.page,"page-size":e.searchcase.size,total:e.casetotal,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.casehandleSizeChange,"current-change":e.casehandleCurrentChange}}),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{nativeOn:{click:function(t){t.preventDefault(),e.casedialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),s("el-button",{attrs:{type:"success",loading:e.btnLoading},nativeOn:{click:function(t){return t.preventDefault(),e.addprocesstestcase(t)}}},[e._v("装载")])],1)],1)],1)},staticRenderFns:[]},f=s("VU/8")(m,g,!1,null,null,null);t.default=f.exports}});
//# sourceMappingURL=37.7b8f3fb69b62a1491362.js.map