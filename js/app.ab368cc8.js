(function(e){function t(t){for(var c,o,i=t[0],u=t[1],l=t[2],s=0,d=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0cb6":function(e,t,n){"use strict";n("ca7e")},"1ee1":function(e,t,n){"use strict";n("7822")},"2d01":function(e,t,n){},"4b5a":function(e,t,n){},5126:function(e,t,n){"use strict";n("4b5a")},5842:function(e,t,n){"use strict";n("f481")},"6f3c":function(e,t,n){"use strict";n("8a1a")},"72bb":function(e,t,n){},7822:function(e,t,n){},"8a1a":function(e,t,n){},a195:function(e,t,n){"use strict";n("2d01")},afd0:function(e,t,n){"use strict";n("dce7")},b474:function(e,t,n){},ba51:function(e,t,n){"use strict";n("72bb")},bcf1:function(e,t,n){"use strict";n("b474")},ca7e:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("4160"),n("b0c0"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t){var n=Object(c["t"])("calculator"),r=Object(c["t"])("calendar"),a=Object(c["t"])("layout"),o=Object(c["t"])("window-container");return Object(c["k"])(),Object(c["d"])(o,{"bg-url":e.bgUrl},{default:Object(c["x"])((function(){return[Object(c["f"])(n),Object(c["f"])(r),Object(c["f"])(a),Object(c["f"])(n),Object(c["f"])(r),Object(c["f"])(a),Object(c["f"])(n),Object(c["f"])(r),Object(c["f"])(a),Object(c["f"])(n),Object(c["f"])(r),Object(c["f"])(a),Object(c["f"])(n),Object(c["f"])(r),Object(c["f"])(a),Object(c["f"])(n),Object(c["f"])(r),Object(c["f"])(a)]})),_:1},8,["bg-url"])}var a=Object(c["o"])({darkMode:!0,idPool:{window:[],"block-container":[]}}),o=(n("99af"),n("cb29"),n("4de4"),n("7db0"),n("d81d"),n("13d5"),n("a434"),n("4fad"),n("2909")),i=function(e){var t=e>>16,n=e>>8&255,c=255&e;return[t,n,c]},u=function(e){var t=a.idPool[e],n=0!==t.length?t[t.length-1]+1:0;return t.push(n),n},l=function(e,t){return Array(e).fill(null).map((function(e,n){return t(n)}))},f={xs:0,sm:-1,md:-2,lg:-3,xl:-4},s=Object(c["p"])(["xs","sm","md","lg","xl"]),d=Object(c["p"])(Object(o["a"])(s).reverse()),b=function(){var e=Object(c["h"])("window-size");if(!e)throw new Error("useBreakPoint必须在window组件的包裹的组件内");return Object(c["b"])((function(){var t=e.width;return{xs:t<578,sm:t<768,md:t<992,lg:t<1200,xl:!0}}))},O=function(){var e=b();return Object(c["b"])((function(){return Object.entries(e.value).filter((function(e){return e[1]})).sort((function(e,t){return f[t[0]]-f[e[0]]})).map((function(e){return e[0]}))}))},j=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];return e.splice.apply(e,[0,e.length].concat(n)),e};function v(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];return function(){for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return e.apply(void 0,n.concat(c))}}function p(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return{type:t||null,required:e}}Array.prototype.groupBy=function(e){return this.reduce((function(t,n){var c=n[e],r=t.find((function(t){return t[0][e]===c}));return r?r.push(n):t.push([n]),t}),[])};var h=Object(c["z"])("data-v-5ff25644");Object(c["n"])("data-v-5ff25644");var w={class:"temp-area"},g={class:"display-area"};Object(c["l"])();var y=h((function(e,t){var n=Object(c["t"])("reveal"),r=Object(c["t"])("reveal-container"),a=Object(c["t"])("window");return Object(c["k"])(),Object(c["d"])(a,{name:"计算器",dark:!1,size:{height:384,width:512}},{default:h((function(){return[Object(c["f"])(r,null,{default:h((function(){return[Object(c["f"])("div",w,Object(c["u"])(e.tempText),1),Object(c["f"])("div",g,Object(c["u"])(e.displayText),1),Object(c["f"])("div",null,[(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["r"])(e.operators,(function(t){return Object(c["k"])(),Object(c["d"])(n,{key:t,class:"key-btn op-btn",onClick:function(n){return e.keydown(t)}},{default:h((function(){return[Object(c["e"])(Object(c["u"])(t),1)]})),_:2},1032,["onClick"])})),128))]),Object(c["f"])("div",null,[(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["r"])(e.numKeys,(function(t){return Object(c["k"])(),Object(c["d"])(n,{key:t,class:"key-btn",onClick:function(n){return e.keydown(t)}},{default:h((function(){return[Object(c["e"])(Object(c["u"])(t),1)]})),_:2},1032,["onClick"])})),128))])]})),_:1})]})),_:1})})),m=(n("a15b"),n("a9e3"),Object(c["g"])({setup:function(){var e=Object(c["o"])([0]),t=Object(c["b"])((function(){return e.join("")})),n=Object(c["o"])(new Array),r=Object(c["b"])((function(){return n.join("")})),a=Object(c["o"])(l(10,(function(e){return e}))),i=function(e,t,n){switch(e){case"+":return t+n;case"-":return t-n;case"*":return t*n;case"/":return t/n}},u=function(){var e=function(){var e=n.shift();while(e&&"number"===typeof n[0])e="".concat(e).concat(n.shift());return Number(e)},t=e();while(n.length&&void 0!==t){var c=n.shift(),r=e();t=i(c,t,r)}return t},f=function(t){var c=e;switch(t){case"c":j(c,0),j(n);break;case"+":case"-":case"*":case"/":c.push(t),n.push(t);break;case"ce":j(c,0);break;case"=":j.apply(void 0,[c].concat(Object(o["a"])(n),["=",u()]));break;case"del":c.pop(),n.pop();break;default:n.push(t),"number"!==typeof c[c.length-1]&&j(c),1===c.length&&0===c[0]&&c.pop(),c.push(t);break}},s=Object(c["o"])(["+","-","*","/","c","ce","=","del"]);return{numKeys:a,displayText:t,keydown:f,operators:s,tempText:r}}}));n("a195");m.render=y,m.__scopeId="data-v-5ff25644";var k=m,x=Object(c["z"])("data-v-709ee116");Object(c["n"])("data-v-709ee116");var S={class:"profile"},z={class:"action-bar"},_={class:"title"},P={key:1,class:"block-adapter table-cell"};Object(c["l"])();var C=x((function(e,t){var n=Object(c["t"])("reveal"),r=Object(c["t"])("reveal-container"),a=Object(c["t"])("window");return Object(c["k"])(),Object(c["d"])(a,{name:"日历",size:{height:550,width:448}},{default:x((function(){return[Object(c["f"])(r,null,{default:x((function(){return[Object(c["f"])("div",S,[Object(c["f"])("div",z,[Object(c["f"])(n,null,{default:x((function(){return[Object(c["f"])("div",{class:"action-icon",onClick:t[1]||(t[1]=function(t){return e.onActionBtnClick("decr")})},"←")]})),_:1}),Object(c["f"])(n,null,{default:x((function(){return[Object(c["f"])("div",{class:"action-icon",onClick:t[2]||(t[2]=function(t){return e.onActionBtnClick("incr")})},"→")]})),_:1})]),Object(c["f"])("div",_,Object(c["u"])(e.day.format("L")),1)]),Object(c["f"])("div",null,[(Object(c["k"])(),Object(c["d"])(c["a"],null,Object(c["r"])(7,(function(t){return Object(c["f"])("span",{key:t,class:"table-cell block-adapter"},"星期"+Object(c["u"])(e.bucketsMap[t-1]),1)})),64)),(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["r"])(e.buckets,(function(t,r){return Object(c["k"])(),Object(c["d"])("div",{key:r},[(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["r"])(t,(function(t,r){return Object(c["k"])(),Object(c["d"])("span",{key:r},[void 0!==t?Object(c["f"])(n,{key:0,class:"day table-cell","data-now":e.day.get("date")===t,onClick:function(n){return e.onDayBtnClick(t)}},{default:x((function(){return[Object(c["e"])(Object(c["u"])(t),1)]})),_:2},1032,["data-now","onClick"]):(Object(c["k"])(),Object(c["d"])("div",P))])})),128))])})),128))])]})),_:1})]})),_:1})})),M=n("5a0c"),R=n.n(M),A=n("23ad"),I=n.n(A);n("a471");R.a.locale("zh-cn"),R.a.extend(I.a);var B=function(e,t){return R()().set("year",t).set("month",e+1).set("date",-1).get("date")+1},L=Object(c["g"])({setup:function(){var e=Object(c["q"])(R()()),t=Object(c["b"])((function(){return B(e.value.get("month"),e.value.get("year"))})),n=function(t){switch(t){case"incr":e.value=e.value.add(1,"month");break;case"decr":e.value=e.value.subtract(1,"month");break}},r=function(t){e.value=e.value.set("date",t)},a=Object(c["b"])((function(){return l(t.value,(function(e){return e+1})).reduce((function(t,n){var c,r=e.value.set("date",n),a=r.get("day");return 0===a||t[t.length-1].length>6?(c=new Array,t.push(c)):c=t[t.length-1],c[a]=n,t}),[[]])})),o="天一二三四五六";return{days:t,day:e,onActionBtnClick:n,onDayBtnClick:r,bucketsMap:o,buckets:a}}});n("6f3c");L.render=C,L.__scopeId="data-v-709ee116";var q=L,E=Object(c["e"])("hello"),T=Object(c["e"])("world");function $(e,t){var n=Object(c["t"])("reveal"),r=Object(c["t"])("fd-col"),a=Object(c["t"])("fd-row"),o=Object(c["t"])("reveal-container"),i=Object(c["t"])("window");return Object(c["k"])(),Object(c["d"])(i,{"init-pos":{top:512,left:1024},name:"响应式24栏栅格"},{default:Object(c["x"])((function(){return[Object(c["f"])(o,null,{default:Object(c["x"])((function(){return[Object(c["f"])(a,null,{default:Object(c["x"])((function(){return[(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["r"])(e.blocks,(function(e){return Object(c["k"])(),Object(c["d"])(r,{key:e,span:{xs:6,md:5,xl:4},offset:{xs:0,md:1,xl:2}},{default:Object(c["x"])((function(){return[Object(c["f"])(n,null,{default:Object(c["x"])((function(){return[Object(c["e"])(Object(c["u"])(e),1)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1}),Object(c["f"])(a,null,{default:Object(c["x"])((function(){return[(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["r"])(e.blocks,(function(e){return Object(c["k"])(),Object(c["d"])(r,{key:e,span:{xs:8,xl:6}},{default:Object(c["x"])((function(){return[Object(c["f"])(n,{value:e},{default:Object(c["x"])((function(){return[Object(c["e"])(Object(c["u"])(e),1)]})),_:2},1032,["value"])]})),_:2},1024)})),128))]})),_:1}),Object(c["f"])(a,null,{default:Object(c["x"])((function(){return[Object(c["f"])(r,{span:"4",offset:"3"},{default:Object(c["x"])((function(){return[E]})),_:1}),Object(c["f"])(r,{span:"4",offset:"3"},{default:Object(c["x"])((function(){return[T]})),_:1})]})),_:1})]})),_:1})]})),_:1})}var D=Object(c["g"])({name:"App",setup:function(){var e=Object(c["o"])(l(6,(function(e){return String.fromCharCode(65+e)})));return{blocks:e}}});D.render=$;var N=D,U="https://static.ioflow.link/0cfedb5240eadc505e723bf2bc4f14e8bf7eb3fb96fc6ea53e856f3f863c2ba0d38f83de492f609290bc6ad0a9a2b583.jpg",W=Object(c["g"])({components:{calculator:k,calendar:q,layout:N},name:"App",setup:function(){var e=Object(c["o"])(l(6,(function(e){return String.fromCharCode(65+e)})));return{window:window,darkMode:Object(c["v"])(a,"darkMode"),blocks:e,bgUrl:U}}});W.render=r;var X=W,Y=Object(c["z"])("data-v-53f7ccad");Object(c["n"])("data-v-53f7ccad");var F={class:"blur-layer"},G=Object(c["f"])("div",{class:"noise-layer"},null,-1);Object(c["l"])();var J=Y((function(e,t){return Object(c["k"])(),Object(c["d"])("div",{class:"container-wrap",style:e.style,onMousedown:t[1]||(t[1]=Object(c["y"])((function(){return e.control.apply(e,arguments)}),["left"])),onMouseup:t[2]||(t[2]=Object(c["y"])((function(){return e.release.apply(e,arguments)}),["left"])),onMouseleave:t[3]||(t[3]=function(){return e.release.apply(e,arguments)}),"data-window-switch":1!==e.state.scale},[Object(c["f"])("div",F,[Object(c["f"])("div",{class:"color-layer",style:e.colorLayerStyle},[G],4)]),Object(c["f"])("div",{class:"content",style:"color:".concat(e.darkMode?"white":"black")},[Object(c["s"])(e.$slots,"default")],4)],44,["data-window-switch"])})),H=(n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),new Map),K=function(e,t){var n=H.get(e);n?n.push(t):H.set(e,[t])},Q=function(e){return H.get(e)||[]},V=(n("a630"),n("6062"),{start:"move",resize:"nwse-resize"}),Z=function(e,t,n,r){return Object(c["o"])({offset:{top:0,left:0},size:r,zIndex:0,backgroundPos:{top:0,left:0},flagSet:new Set,initPos:e,name:n,hasInitPos:t,scale:1,id:u("window"),styles:new Array})},ee=function(e){var t=e,n=Object(c["b"])((function(){var n={top:(-t.offset.top-t.initPos.top)/e.scale-2+16,left:(-t.offset.left-t.initPos.left)/e.scale-2+16},c=new Array;return c.push("\n    background-position:".concat(n.left,"px ").concat(n.top,"px;\n    transform:translate(").concat(t.offset.left+t.initPos.left,"px,").concat(t.offset.top+t.initPos.top,"px) scale(").concat(t.scale,");\n    cursor:").concat(V[Array.from(t.flagSet.keys())[0]],";\n    width:").concat(t.size.width,"px;\n    height:").concat(t.size.height,"px;\n    z-index:").concat(t.zIndex,";\n    background-size:").concat(1/e.scale*100,"vw;\n    transform-origin: top left;")),e.flagSet.has("anim")&&c.push("transition: all .7s ease"),e.flagSet.has("ani-delay")&&c.push("transition-delay: .1s"),[].concat(Object(o["a"])(e.styles),c).join(";")}));return{style:n}},te=1,ne=function(){return++te},ce=function(e){var t=Object(c["h"])("add-trigger-window"),n=function(n){t&&t("click",e),e.flagSet.add("start"),e.zIndex<te&&(console.log(e.flagSet.has("anim")),e.zIndex=te+1,te=e.zIndex)},r=new Array,a=e,o=function(e){if(!a.flagSet.has("tile")){var t=e.type;switch(t){case"mouseleave":!a.flagSet.has("resize")&&a.flagSet.clear();break;case"mouseup":a.flagSet.clear();break}}},i=function(e){if(!a.flagSet.has("tile")){a.flagSet.has("start")&&(a.flagSet.has("resize")?(a.size.width+=e.movementX,a.size.height+=e.movementY):(a.offset.left+=e.movementX,a.offset.top+=e.movementY));var t=a.offset.left+a.initPos.left+a.size.width,n=a.offset.top+a.initPos.top+a.size.height,c=16;if(t-e.pageX>0&&t-e.pageX<c&&n-e.pageY>0&&n-e.pageY<c)a.flagSet.has("resize")||r.push(Array.from(a.flagSet)),a.flagSet.add("resize");else if(a.flagSet.has("resize")){var o=r.pop();o&&(a.flagSet.clear(),o.forEach((function(e){return a.flagSet.add(e)})))}}};return{release:o,control:n,move:i}},re=function(e){var t=e?e.filter((function(e){return!e.hasInitPos})).length:0;return{top:128+32*t,left:128+32*t}},ae=Object(c["g"])({name:"window",props:{initPos:p(!1),name:{type:String,default:""},dark:{type:Boolean,default:void 0},size:{default:function(){return{width:512,height:256}}}},setup:function(e){var t=e,n=Object(c["h"])("windows"),r=t.initPos||re(n),o=Z(r,!!t.initPos,t.name,t.size),u=ee(o),l=u.style,f=ce(o),s=f.move,d=f.control,b=f.release;Object(c["m"])("window-size",o.size),Object(c["m"])("window-offset",o.offset),Object(c["m"])("window-state",Object(c["q"])(o));var O=Object(c["h"])("window-regist");O&&O(o),Object(c["i"])((function(){K("mousemove",s)}));var j=Object(c["q"])(void 0===e.dark?Object(c["v"])(a,"darkMode"):e.dark),v=Object(c["b"])((function(){return"background: rgba(".concat(i(j.value?0:16777215),", 0.4)")}));return{style:l,colorLayerStyle:v,release:b,control:d,darkMode:j,state:o}}});n("5842");ae.render=J,ae.__scopeId="data-v-53f7ccad";var oe=ae,ie=Object(c["z"])("data-v-29110724");Object(c["n"])("data-v-29110724");var ue={class:"block",ref:"domRef"};Object(c["l"])();var le=ie((function(e,t){return Object(c["k"])(),Object(c["d"])("div",ue,[Object(c["s"])(e.$slots,"default")],512)})),fe=Object(c["g"])({name:"reveal",setup:function(){var e,t=Object(c["q"])(),n=Object(c["q"])(null),r=Object(c["q"])(),a=Object(c["h"])("unmounted-block"),o=Object(c["h"])("regist-any-block"),i=Object(c["h"])("update-block-state"),u=Object(c["h"])("on-will-update-rect");return Object(c["i"])((function(){var c=t.value;if(!c)throw new Error("任意形状块获取dom失败!!!");if(!(o&&i&&u))throw new Error("block组件必须在block-container组件的包裹下");e=new ResizeObserver((function(e){n.value=e[0].target.getBoundingClientRect(),i({rect:n.value,id:r.value||-1})})),e.observe(c),r.value=o({rect:n.value,id:-1}),u((function(){n.value=c.getBoundingClientRect(),i({rect:n.value,id:r.value})}),r.value)})),Object(c["j"])((function(){var n=t.value;n&&e&&e.disconnect(),a&&a(r.value)})),{domRef:t}}});n("afd0");fe.render=le,fe.__scopeId="data-v-29110724";var se=fe,de=Object(c["z"])("data-v-f19864f8");Object(c["n"])("data-v-f19864f8");var be=Object(c["f"])("stop",{offset:"0%","stop-color":"white"},null,-1),Oe=Object(c["f"])("stop",{offset:"100%","stop-color":"transparent"},null,-1);Object(c["l"])();var je=de((function(e,t){return Object(c["k"])(),Object(c["d"])("div",{class:"block-container",onMousemove:t[1]||(t[1]=function(){return e.control.apply(e,arguments)}),onMouseleave:t[2]||(t[2]=function(){return e.release.apply(e,arguments)}),ref:"blockContainerRef"},[Object(c["s"])(e.$slots,"default"),(Object(c["k"])(),Object(c["d"])("svg",{class:"svg-mask",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 ".concat(Math.max(e.windowSize.width-32,0)," ").concat(Math.max(e.windowSize.height-32,0)),ref:"svgRef"},[Object(c["f"])("defs",null,[Object(c["f"])("radialGradient",{id:"Gradient-".concat(e.id),cx:e.svgCursorPercent.x,cy:e.svgCursorPercent.y,r:"0.2"},[be,Oe],8,["id","cx","cy"]),Object(c["f"])("mask",{id:"Mask-".concat(e.id)},[(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["r"])(e.layout,(function(e){return Object(c["k"])(),Object(c["d"])("rect",{x:e.x-1,y:e.y-1,width:e.width,height:e.height,key:e.i,fill:"black",stroke:"white","stroke-width":"2"},null,8,["x","y","width","height"])})),128))],8,["id"])]),Object(c["f"])("rect",{x:"0",y:"0",width:e.maxSide,height:e.maxSide,fill:e.isStart?"url('#Gradient-".concat(e.id,"')"):"transparent",mask:e.isStart?"url('#Mask-".concat(e.id,"')"):void 0},null,8,["width","height","fill","mask"])],8,["viewBox"]))],544)})),ve=(n("c740"),n("2ef0")),pe=function(e,t,n){var r=Object(c["q"])(),a=Object(c["q"])(),o={ro:new ResizeObserver((function(){a.value=r.value.getBoundingClientRect()})),mounted:function(){var e=r.value;if(!e)throw new Error("获取svg dom失败!!!");a.value=e.getBoundingClientRect(),o.ro.observe(e)},unmounted:function(){o.ro.disconnect()}},i=Object(c["q"])({x:0,y:0}),u=Object(c["b"])((function(){return Math.max(e.value.height-32,e.value.width-32,0)})),l=Object(c["o"])(new Set),f=function(){l.add("start")},s=function(){l.delete("start")},d=function(e){if(!(null===n||void 0===n?void 0:n.value.flagSet.has("tile"))){var t=r.value;if(l.has("start")&&t){var c=t.getBoundingClientRect(),a=e.x-c.x,o=e.y-c.y;i.value={x:a/u.value,y:o/u.value}}}},b=Object(c["o"])(new Array),O=Object(c["b"])((function(){var e=r.value,t=e?e.getBoundingClientRect():{x:0,y:0},n=b.filter((function(e){return e.rect})).map((function(e){return{width:e.rect.width,height:e.rect.height,i:e.id,x:e.rect.x-t.x,y:e.rect.y-t.y}}));return n})),j=Object(c["b"])((function(){return!(null===n||void 0===n?void 0:n.value.flagSet.has("tile"))&&l.has("start")}));return{layout:O,svgCursorPercent:i,svgRef:r,control:f,release:s,cursorMove:d,blocks:b,isStart:j,maxSide:u,svgObserver:o}},he=function(e){var t=Object(c["q"])(0),n=new Array;return Object(c["m"])("regist-any-block",(function(n){return n.id=++t.value,e.push(n),n.id})),Object(c["m"])("update-block-state",(function(t){var n=e.findIndex((function(e){return e.id===t.id}));-1!==n&&(e[n]=t)})),Object(c["m"])("on-will-update-rect",(function(e,t){n.push({cb:e,id:t})})),Object(c["m"])("unmounted-block",(function(t){n.splice(n.findIndex((function(e){return e.id===t})),1),e.splice(e.findIndex((function(e){return e.id===t})),1)})),{updateQuene:n}},we=Object(c["g"])({name:"reveal-container",setup:function(){var e=Object(c["h"])("window-state"),t=u("block-container"),n={top:0,left:0},r=Object(c["q"])({width:200,height:200}),a=Object(c["q"])(n),o=pe(r,a,e),i=o.layout,l=o.svgCursorPercent,f=o.svgRef,s=o.cursorMove,d=o.control,b=o.release,O=o.blocks,j=o.isStart,v=o.maxSide,p=o.svgObserver,h=he(O),w=h.updateQuene,g=Object(ve["debounce"])((function(){w.forEach((function(e){return e.cb()}))}),100),y=Object(c["q"])(),m=new ResizeObserver(g);return Object(c["i"])((function(){var t=y.value;t&&m.observe(t);var n=Object(c["h"])("window-size"),o=Object(c["h"])("window-offset");if(!n)throw new Error("block-container组件必须在window组件的包裹下或手动注入窗口尺寸");r.value=n,o&&(a.value=o),p.mounted(),r.value&&Object(c["w"])([e&&Object(c["v"])(e.value,"flagSet"),r],g,{deep:!0,immediate:!0}),K("mousemove",Object(ve["debounce"])(s))})),Object(c["j"])((function(){p.unmounted(),m.disconnect()})),{layout:i,svgCursorPercent:l,svgRef:f,control:d,release:b,windowSize:r,isStart:j,maxSide:v,id:t,blockContainerRef:y}}});n("1ee1");we.render=je,we.__scopeId="data-v-f19864f8";var ge=we,ye=Object(c["z"])("data-v-00d140c8"),me=ye((function(e,t){var n=Object(c["t"])("sidebar");return Object(c["k"])(),Object(c["d"])("div",{class:"window-container",ref:"selfRef",onMousemove:t[1]||(t[1]=function(){return e.onMouseMove.apply(e,arguments)}),style:e.style},[Object(c["s"])(e.$slots,"default"),Object(c["f"])(n,{"container-state":e.state},null,8,["container-state"])],36)})),ke=(n("c975"),n("fb6a"),n("5530")),xe=n("b85c"),Se=function(e,t){return e.slice(0,t).reduce((function(e,t){return e+t.width}),0)},ze=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n&&console.log(t+(t?": \n":"")+JSON.stringify(e,null,4))},_e=function(e,t,n){var c=Object(ve["cloneDeep"])(e),r=c.reduce((function(e,t){return e+t.width}),0),a=c.reduce((function(e,t){return e>t.y?e:t.y}),0);if(r<=t.width&&a<=t.y)return j(c,t);for(var o,i,u=v(Se,c),l=n+t.width,f=0;f<c.length;f++){var s=c[f],d=u(f);if(!o&&d<=n&&n<=d+s.width&&(o=s),d<=l&&l<=d+s.width&&(i=s),o&&i)break}if(!o||!i)throw ze(o,"start-base"),ze(i,"end-base"),new Error("找不到startBase或endBase");var b=c.indexOf(o),O=c.indexOf(i),p={y:o.y,width:n-u(b)},h={y:i.y,width:u(O)+i.width-(u(b)+p.width+t.width)};c.splice(b,O-b+1,p,t,h);while(c.find((function(e){return!e.width})))c.splice(c.findIndex((function(e){return e.width<1})),1);return ze(c,"更新基线"),c},Pe=function(e,t){var n=e.baselines,c=e.maxWidth,r=v(Se,n),a=function e(a){for(var o=arguments.length,i=new Array(o>1?o-1:0),u=1;u<o;u++)i[u-1]=arguments[u];i.push(a);var l=n.indexOf(a),f=r(l-(i.length-1));if(i[0].y<a.y)return null;var s=i.reduce((function(e,t){return e+t.width}),0);if(s>=t&&f+t<=c)return{bls:i,start:f};if(l+1===n.length||f+s>c){var d=n.reduce((function(e,t){return e>t.y?e:t.y}),0);return{start:0,bls:[{width:t,y:d}]}}return e.apply(void 0,[n[l+1]].concat(i))};return a},Ce=function(e,t){var n=e.baselines,c=e.scale,r=e.margin,a=v(_e,n),i=0,u=0,l=t.size;if(!0===e.hasInsertFirst){var f,s=l.width*c+2*r,d=new Array,b=Object(xe["a"])(n);try{for(b.s();!(f=b.n()).done;){var O=f.value,p=Pe(e,s)(O);p&&d.push({baseLine:{width:s,y:Math.max.apply(Math,Object(o["a"])(p.bls.map((function(e){return e.y}))))+t.size.height*c+2*r},start:p.start})}}catch(k){b.e(k)}finally{b.f()}if(!d.length||0===d[0].baseLine.y)return null;var h=d.sort((function(e,t){return e.baseLine.y-t.baseLine.y}))[0];if(i=h.start,u=h.baseLine.y-t.size.height*c-2*r,h.baseLine.y>e.maxHeight)return null;var w=a(h.baseLine,h.start);j.apply(void 0,[n].concat(Object(o["a"])(w)))}else{var g=l.height*c+2*r,y=l.width*c;ze({y:g,width:y},"新插入基线-");var m=a({y:g,width:y},0);j.apply(void 0,[n].concat(Object(o["a"])(m)))}return e.hasInsertFirst=!0,{scale:c,x:i,y:u}},Me=function(e,t,n){var r=Object(c["w"])(e.windowTriggerPool,(function(c){var a;null===(a=c.get("click"))||void 0===a||a.forEach((function(){r();var a=function(){var e=t.map((function(e){return{e:n.find((function(t){return t.id===e.bind.id})),s:e}}));return e.forEach.bind(e)};a()((function(e){var t=e.s,n=e.e;t.bind.flagSet.add("anim"),t.bind.flagSet.delete("start"),t.bind.scale=n.scale,t.bind.initPos=n.initPos,t.bind.offset=n.offset})),setTimeout((function(){a()((function(e){var t=e.s;t.bind.flagSet.delete("tile"),t.bind.flagSet.delete("anim")}))}),700),c.delete("click"),e.flagSet.delete("window-switch")}))}))},Re=function(e,t,n,c,r){var a=e.map((function(e){var c=Object(ve["cloneDeep"])(e.bind);return c.initPos={top:0,left:0},c.offset={top:e.y+t.top+n,left:e.x+t.left+n},c.scale=e.scale,{start:e,end:c}}));a.forEach((function(e){var t=e.start,n=e.end;t.bind.flagSet.delete("start"),t.bind.flagSet.add("tile"),t.bind.flagSet.add("anim"),t.bind.scale=n.scale,t.bind.initPos=n.initPos,t.bind.offset=n.offset})),setTimeout((function(){a.forEach((function(e){var t=e.start;t.bind.flagSet.delete("anim")})),Me(c,e,r)}),700),c.flagSet.add("window-switch")},Ae=function(e){if(!e.flagSet.has("window-switch")){var t=e.windows,n=e.bodyRect,c=Object(ve["cloneDeep"])(t),r=n,a={top:16,left:16,right:160,bottom:16},i=8;if(r){var u=new Array,l=r.width-a.left-a.right,f=r.height-a.top-a.bottom,s=[{y:0,width:l}];ze(s,"初始基线");var d=Object(o["a"])(t),b={baselines:s,scale:1,maxWidth:l,maxHeight:f,hasInsertFirst:!1,margin:i};while(d.length){var O=d.shift();if(!O)break;var v=Ce(b,O);if(v)u.push(Object(ke["a"])({bind:O},v));else if(b.scale-=.05,j.apply(void 0,[d].concat(Object(o["a"])(t))),j(u),j(s,{y:0,width:l}),b.scale<0)throw new Error("分配异常")}Re(u,a,i,e,c),ze(s,"结束"),ze(u)}}},Ie=Object(c["z"])("data-v-1f991317");Object(c["n"])("data-v-1f991317");var Be={class:"aside-manage-bar"},Le={class:"windows-list",ref:"windowsListRef"},qe=Object(c["f"])("div",null,"平铺所有窗口",-1);Object(c["l"])();var Ee=Ie((function(e,t){return Object(c["k"])(),Object(c["d"])("div",Be,[Object(c["f"])("ul",Le,[Object(c["f"])("li",{class:"profile auto-layout",onClick:t[1]||(t[1]=function(){return e.autoLayout.apply(e,arguments)})},[qe]),(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["r"])(e.windows,(function(t){return Object(c["k"])(),Object(c["d"])("li",{key:t.id,class:"profile"},[Object(c["f"])("div",{onClick:function(n){return e.pullWindow(t)}},Object(c["u"])(t.name),9,["onClick"])])})),128))],512)])})),Te=Object(c["g"])({name:"window-container-sidebar",props:{containerState:p()},setup:function(e){var t=Object(c["q"])(new Array),n=Object(c["q"])(),r=Object(c["o"])({width:0,height:0});Object(c["m"])("window-size",r),Object(c["i"])((function(){t.value=Object(c["h"])("windows",[])}));var a=function(e){e.zIndex=ne()},o=function(){Ae(e.containerState)};return{windows:t,windowsListRef:n,pullWindow:a,autoLayout:o}}});n("5126");Te.render=Ee,Te.__scopeId="data-v-1f991317";var $e=Te,De=Object(c["g"])({name:"window-container",props:{bgUrl:p()},components:{sidebar:$e},setup:function(e){var t=Object(c["o"])({windowTriggerPool:new Map,bodyRect:null,windows:new Array,flagSet:new Set});Object(c["m"])("add-trigger-window",(function(e,n){var c=t.windowTriggerPool.get("click");c?c.push(n):t.windowTriggerPool.set("click",[n])}));var n=new ResizeObserver((function(e){t.bodyRect=e[0].target.getBoundingClientRect()}));Object(c["m"])("windows",t.windows),Object(c["m"])("window-regist",(function(e){t.windows.push(e)}));var r=Object(c["q"])(null);Object(c["i"])((function(){var e=r.value;e&&(n.observe(e),document.body.addEventListener("keydown",(function(e){"Escape"===e.key&&e.target===document.body&&Ae(t)})),setTimeout((function(){Ae(t)}),500))}));var a=function(e){Q("mousemove").forEach((function(t){return t(e)}))},o=Object(c["b"])((function(){return"background-image:url(".concat(e.bgUrl,")")}));return{window:window,selfRef:r,onMouseMove:a,style:o,state:t}}});n("ba51");De.render=me,De.__scopeId="data-v-00d140c8";var Ne=De,Ue=Object(c["z"])("data-v-eaa04406"),We=Ue((function(e,t){return Object(c["k"])(),Object(c["d"])("div",{class:[].concat(Object(o["a"])(e.classList),["base-col-class"])},[Object(c["s"])(e.$slots,"default")],2)})),Xe=function(e,t,n){var r=Object(c["b"])((function(){var c=new Array,r=t.value,a=n.value,o=e.value;if("number"===typeof r)c.push("col-offset-".concat(r));else{var i=o.filter((function(e){return r[e]}))[0];if(i)c.push("col-offset-".concat(r[i]));else for(var u=d,l=o[0],f=u.indexOf(l)+1;f<u.length;f++)if(r[u[f]]){c.push("col-offset-".concat(r[u[f]]));break}}if("number"===typeof a)c.push("col-span-".concat(a));else{var s=o.filter((function(e){return a[e]}))[0];if(s)c.push("col-span-".concat(a[s]));else for(var b=d,O=o[0],j=b.indexOf(O)+1;j<b.length;j++)if(a[b[j]]){c.push("col-span-".concat(a[b[j]]));break}}return c}));return{classList:r}},Ye=Object(c["g"])({name:"fd-col",props:{span:p(),offset:{default:0}},setup:function(e){var t=O(),n=Object(c["b"])((function(){var t=e.span,n="string"===typeof t?Number(t):t;return n})),r=Object(c["b"])((function(){var t=e.offset,n="string"===typeof t?Number(t):t;return n})),a=Xe(t,r,n),o=a.classList;return{classList:o}}});n("0cb6");Ye.render=We,Ye.__scopeId="data-v-eaa04406";var Fe=Ye,Ge=Object(c["z"])("data-v-8052f986"),Je=Ge((function(e,t){return Object(c["k"])(),Object(c["d"])("div",null,[Object(c["s"])(e.$slots,"default")])})),He=Object(c["g"])({name:"fd-row",props:{},setup:function(){return{}}});n("bcf1");He.render=Je,He.__scopeId="data-v-8052f986";var Ke=He,Qe=Object(c["c"])(X),Ve=[oe,se,ge,Ne,Fe,Ke];Ve.forEach((function(e){Qe.component(e.name,e)})),Qe.mount("#app")},dce7:function(e,t,n){},f481:function(e,t,n){}});
//# sourceMappingURL=app.ab368cc8.js.map