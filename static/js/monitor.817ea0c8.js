(window.webpackJsonp=window.webpackJsonp||[]).push([["monitor"],{"4fe1":function(e,t,n){},"8a6b":function(e,t,n){"use strict";n("4fe1")},b3e2:function(e,t,n){"use strict";n.r(t),n("d3b7");var c=n("7a23"),o=n("3ef4");var r=(n("e9c4"),Object(c.defineComponent)({setup:function(e){var t=Object(c.ref)(),n=null;return Object(c.onMounted)((function(){var e=-1;n=setInterval((function(){var n,c=window.MitoInstance.breadcrumb,o=c.getStack().length;o!==e&&(e=o,(null==t||null===(n=t.value)||void 0===n?void 0:n.contentWindow)&&t.value.contentWindow.postMessage({type:"breadcrumb",data:JSON.parse(JSON.stringify(c.getStack()))},"https://mitojs.github.io/mito-admin-demo/#/breadcrumbDemo"))}),1e3)})),Object(c.onUnmounted)((function(){n&&clearInterval(n)})),function(e,n){return Object(c.openBlock)(),Object(c.createElementBlock)("iframe",{ref:function(e,n){n.iframeRef=e,t.value=e},class:"iframeWrapper",src:"https://mitojs.github.io/mito-admin-demo/#/breadcrumbDemo",frameborder:"0"},null,512)}}})),a={class:"app-container monitor"},i={type:"info"},u=Object(c.createTextVNode)(" Count 加 + "),d=Object(c.createTextVNode)(" Count 减 - "),s=Object(c.createTextVNode)(" 触发 unhandledrejection "),f=Object(c.createTextVNode)(" 触发代码错误 "),b=Object(c.createTextVNode)(" 触发正常 xhr "),l=Object(c.createTextVNode)(" 触发异常 xhr "),p=Object(c.createTextVNode)(" 触发正常 fetch "),j=Object(c.createTextVNode)(" 触发异常 fetch "),O=Object(c.createTextVNode)(" 手动上报 "),h=Object(c.defineComponent)({setup:function(e){var t=Object(c.ref)(0),n=function(){t.value++},h=function(){t.value--},m=function(){new Promise((function(e,t){return t(new Error("this is promise reject"))})).then((function(e){}))},w=function(){throw new Error("vue error")},C=function(){var e=new XMLHttpRequest;e.open("get","https://dict-mobile.iciba.com/interface/index.php?c=word&m=getsuggest&word=hello"),e.setRequestHeader("content-type","application/json"),e.send(),e.onreadystatechange=function(){4===e.readyState&&o.a.success("request success")}},v=function(){var e=new XMLHttpRequest;e.open("get","https://bad/request"),e.setRequestHeader("content-type","application/json"),e.send(),e.onreadystatechange=function(){4!==e.readyState||e.response||o.a.error("request error")}},g=function(){fetch("https://dict-mobile.iciba.com/interface/index.php?c=word&m=getsuggest&word=hello",{method:"GET"}).then((function(){o.a.success("fetch success")}),(function(e){}))},x=function(){fetch("http://bad/fetch",{method:"GET"}).then((function(){return 0}),(function(e){o.a.error("fetch error")}))},N=function(){window.MitoInstance.log({message:"手动上报",tag:"手动上报"})};return function(e,o){var V=Object(c.resolveComponent)("el-card"),y=Object(c.resolveComponent)("el-button");return Object(c.openBlock)(),Object(c.createElementBlock)("div",a,[Object(c.createVNode)(V,{shadow:"never"},{default:Object(c.withCtx)((function(){return[Object(c.createElementVNode)("span",i,"Count: "+Object(c.toDisplayString)(t.value),1)]})),_:1}),Object(c.createVNode)(V,{shadow:"never"},{default:Object(c.withCtx)((function(){return[Object(c.createVNode)(y,{type:"primary",onClick:n},{default:Object(c.withCtx)((function(){return[u]})),_:1}),Object(c.createVNode)(y,{onClick:h},{default:Object(c.withCtx)((function(){return[d]})),_:1})]})),_:1}),Object(c.createVNode)(V,{shadow:"never"},{default:Object(c.withCtx)((function(){return[Object(c.createVNode)(y,{type:"danger",onClick:m},{default:Object(c.withCtx)((function(){return[s]})),_:1}),Object(c.createVNode)(y,{type:"danger",onClick:w},{default:Object(c.withCtx)((function(){return[f]})),_:1}),Object(c.createVNode)(y,{type:"primary",onClick:C},{default:Object(c.withCtx)((function(){return[b]})),_:1}),Object(c.createVNode)(y,{type:"danger",onClick:v},{default:Object(c.withCtx)((function(){return[l]})),_:1}),Object(c.createVNode)(y,{type:"primary",onClick:g},{default:Object(c.withCtx)((function(){return[p]})),_:1}),Object(c.createVNode)(y,{type:"danger",onClick:x},{default:Object(c.withCtx)((function(){return[j]})),_:1}),Object(c.createVNode)(y,{type:"success",onClick:N},{default:Object(c.withCtx)((function(){return[O]})),_:1})]})),_:1}),Object(c.createVNode)(r)])}}}),m=(n("8a6b"),n("6b0d"));const w=n.n(m)()(h,[["__scopeId","data-v-508e57f0"]]);t.default=w}}]);