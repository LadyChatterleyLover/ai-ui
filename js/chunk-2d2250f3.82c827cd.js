(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2250f3"],{e37f:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),r=Object(o["createTextVNode"])("生成二维码"),l=Object(o["createVNode"])("br",null,null,-1),n=Object(o["createVNode"])("br",null,null,-1),a={key:0},d=Object(o["createVNode"])("h2",null,"不设置宽高",-1),u=Object(o["createVNode"])("br",null,null,-1),b={key:1},j=Object(o["createVNode"])("h2",null,"设置宽高",-1);function O(e,t,c,O,i,p){var v=Object(o["resolveComponent"])("a-input"),k=Object(o["resolveComponent"])("a-button"),s=Object(o["resolveComponent"])("qrcode");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(v,{style:{width:"600px","margin-right":"20px"},value:e.value,"onUpdate:value":t[1]||(t[1]=function(t){return e.value=t}),placeholder:"请输入文字或者网址"},null,8,["value"]),Object(o["createVNode"])(k,{type:"primary",onClick:e.handleClick},{default:Object(o["withCtx"])((function(){return[r]})),_:1},8,["onClick"]),l,n,e.qrcodeUrl?(Object(o["openBlock"])(),Object(o["createBlock"])("div",a,[d,Object(o["createVNode"])(s,{qrcodeUrl:e.qrcodeUrl},null,8,["qrcodeUrl"])])):Object(o["createCommentVNode"])("",!0),u,e.qrcodeUrl?(Object(o["openBlock"])(),Object(o["createBlock"])("div",b,[j,Object(o["createVNode"])(s,{qrcodeUrl:e.qrcodeUrl,width:500,height:500},null,8,["qrcodeUrl"])])):Object(o["createCommentVNode"])("",!0)],64)}var i=c("5530"),p=Object(o["defineComponent"])({name:"",components:{},props:{},setup:function(e,t){var c=Object(o["reactive"])({qrcodeUrl:"",value:""}),r=function(){c.qrcodeUrl=c.value,console.log(c.qrcodeUrl)};return Object(i["a"])(Object(i["a"])({},Object(o["toRefs"])(c)),{},{handleClick:r})}});p.render=O;t["default"]=p}}]);
//# sourceMappingURL=chunk-2d2250f3.82c827cd.js.map