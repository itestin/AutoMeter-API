webpackJsonp([22],{KR9Q:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{editableTabs:[{title:"Header",name:"1",content:"cccc"},{title:"Params",name:"2",content:""}],tabIndex:2,dynamicValidateForm:{domains:[{value:""}],email:""}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()},removeDomain:function(e){var t=this.dynamicValidateForm.domains.indexOf(e);-1!==t&&this.dynamicValidateForm.domains.splice(t,1)},addDomain:function(){this.dynamicValidateForm.domains.push({value:"",key:Date.now()})},handleClick:function(e,t){console.log(t),console.log(t.target.getAttribute("label")),console.log(t.target.getAttribute("title"))},beforeLeaveTab:function(){var e=this;return this.isTip?this.$confirm("此操作将切换tab页, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"切换成功！可以做一些其他的事情"+e.tabIndex})}).catch(function(){throw e.$message({type:"success",message:"取消成功！可以做一些其他的事情"}),new Error("取消成功！")}):(this.isTip=!0,!0)}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-tabs",{attrs:{type:"card",closable:"","before-leave":e.beforeLeaveTab},on:{"tab-remove":e.removeTab,"tab-click":e.handleClick},model:{value:e.Params,callback:function(t){e.Params=t},expression:"Params"}},e._l(e.editableTabs,function(t){return a("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[a(t.content,{tag:"component"}),e._v(" "),a("el-form",{ref:"dynamicValidateForm",refInFor:!0,attrs:{model:e.dynamicValidateForm,"label-width":"50px"}},[e._l(e.dynamicValidateForm.domains,function(t,n){return a("el-form-item",{key:t.key,attrs:{label:"key"+n,prop:"domains."+n+".value",rules:{required:!0,message:"域名不能为空",trigger:"blur"}}},[a("el-input",{staticStyle:{width:"200px"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"domain.value"}}),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return a.preventDefault(),e.removeDomain(t)}}},[e._v("删除")])],1)}),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("dynamicValidateForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:e.addDomain}},[e._v("新增key")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("dynamicValidateForm")}}},[e._v("重置")])],1)],2)],1)}),1)],1)},staticRenderFns:[]},r=a("VU/8")(n,i,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=22.fdcb76f3bb3ab2a75ba7.js.map