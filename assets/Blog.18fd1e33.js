var l=Object.defineProperty;var n=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var r=(s,a,e)=>a in s?l(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,t=(s,a)=>{for(var e in a||(a={}))i.call(a,e)&&r(s,e,a[e]);if(n)for(var e of n(a))m.call(a,e)&&r(s,e,a[e]);return s};import{f as p,n as g,p as f,h as o,B as d,v as u,D as v,I as B,x as b,y as c,r as I}from"./app.80020f81.js";import{S as C}from"./SkipLink.a75fba12.js";var k=p({name:"Blog",setup(){const s=g(),a=f();return()=>[o(C),o(I("CommonWrapper"),{sidebar:!1},t({default:()=>s.value.home?o(d):o("main",{class:"page blog",id:"main-content"},o("div",{class:"blog-page-wrapper"},[o(u),o(v,{delay:.16},()=>o(B))])),navScreenBottom:()=>o(b)},a.value?{sidebar:()=>o(c)}:{}))]}});export{k as default};