(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{331:function(t,s,a){},412:function(t,s,a){"use strict";a(331)},418:function(t,s,a){"use strict";a.r(s);var i={name:"indexPage",data:function(){return{errorMsg:"",password:"",hasPass:!1}},mounted:function(){this.hasPass=!!this.$cookie.getCookie("hasPass")},methods:{login:function(){this.password?"ylzinfo"===this.password?(this.$cookie.setCookie("hasPass",1,1),this.hasPass=!0,this.errorMsg=""):this.errorMsg="密码不正确！":this.errorMsg="密码不能为空！"}}},e=(a(412),a(45)),n=Object(e.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.hasPass?a("div",{staticClass:"home-page"},[a("div",{staticClass:"contentWrapper"},[a("div",{staticClass:"home-header"},[a("div",{staticClass:"menu"},[a("i",{staticClass:"iconfont icon-kucun"}),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{path:"/docs/frontend/content/培训内容"}}},[t._v("在线文档")])],1),t._v(" "),t._m(0)])])]),t._v(" "),a("div",{staticClass:"home-content"},[a("div",{staticClass:"banner"},[t._m(1),t._v(" "),t._m(2),t._v(" "),a("router-link",{staticClass:"startBtn",attrs:{to:{path:"/docs/frontend/content/培训内容"}}},[t._v("快速上手")])],1),t._v(" "),t._m(3)])]),t._v(" "),t._m(4)]):t._e(),t._v(" "),t.hasPass?t._e():a("div",{staticClass:"apt-password-wrap"},[a("div",{staticClass:"apt-password-login-form"},[a("div",{staticClass:"apt-password-wrap-form"},[a("h1",[t._v("医保项目学习指南")]),t._v(" "),a("div",{staticClass:"apt-password-wrap-form-input"},[a("input",{attrs:{type:"hidden",name:"key",value:"b32ae8054252a168"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"输入文档查看密码"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),t._v(" "),a("button",{staticClass:"apt-password-login-btn",attrs:{type:"button"},on:{click:t.login}},[t._v("查看文档")])]),t._v(" "),a("small",[a("a",{attrs:{target:""}},[t._v(t._s(t.errorMsg))])])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",{attrs:{href:"http://i58yaw.edtsoft.com/medicals/quick-doc",target:"_blank"}},[this._v("GitLab")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("span",[this._v("医保项目学习指南")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("p",[this._v("基础业务产品部医保项目学习指南2.0")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"iconWrapper"},[s("i",{staticClass:"iconfont icon-kucun"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"footerWrapper"},[a("p",[t._v("你可以使用 医保项目学习指南 做什么？")]),t._v(" "),a("div",{staticClass:"advantage"},[a("div",{staticClass:"tips"},[a("i",{staticClass:"iconfont icon-kuaijierukou"}),t._v(" "),a("p",[t._v("更快的熟悉项目结构")])]),t._v(" "),a("div",{staticClass:"tips"},[a("i",{staticClass:"iconfont icon-suoyouzhaobiaoxiangmu"}),t._v(" "),a("p",[t._v("高效利用已建设资源")])]),t._v(" "),a("div",{staticClass:"tips"},[a("i",{staticClass:"iconfont icon-wupinguanli"}),t._v(" "),a("p",[t._v("文档定时更新维护")])])]),t._v(" "),a("p",{staticClass:"copyright"},[t._v("MIT Licensed | Copyright © 2020-present 易联众（民生）")])])}],!1,null,"15e1c67e",null);s.default=n.exports}}]);