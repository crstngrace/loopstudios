(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(6792)}])},1049:function(e,t,s){"use strict";function i(e){let{src:t,width:s,quality:i}=e;return"".concat(t,"?w=").concat(s,"&q=").concat(i||75)}s.r(t),s.d(t,{default:function(){return i}})},6792:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return z}});var i=s(5893),a=s(7294),r=s(9723),n=s(6905);let o=()=>({init:function(){r.p8.registerPlugin(n.i),n.i.defaults({toggleActions:"play reverse play reverse"})},slide:function(e){let{el:t,to:s,trigger:i=!1,name:a=""}=e,r=[t,{opacity:0,x:"left"==s?"100px":"-100px"},i?{scrollTrigger:t,duration:.3,autoAlpha:1,x:0,ease:"power0"}:{duration:1.2,autoAlpha:1,x:0}];return a&&r.push(a),r},batchAnimate:function(e){r.p8.set(e,{opacity:0,y:100,duration:.3,ease:"power3"}),n.i.batch(e,{onEnter:e=>r.p8.to(e,{opacity:1,y:0,stagger:{each:.15,grid:[1,3]},overwrite:!0}),onLeave:e=>r.p8.set(e,{opacity:0,y:-100,overwrite:!0}),onEnterBack:e=>r.p8.to(e,{opacity:1,y:0,stagger:.15,overwrite:!0}),onLeaveBack:e=>r.p8.set(e,{opacity:0,y:100,overwrite:!0})}),n.i.addEventListener("refreshInit",()=>r.p8.set(e,{y:0}))}});var c=s(5569),l=s(5675),d=s.n(l),A=s(4184),h=s.n(A),u=s(8519),m=s.n(u),g={src:"/loopstudios//_next/static/media/logo.44951f1f.svg",height:32,width:192};let x=e=>{let{loaderRef:t}=e,[s]=(0,a.useContext)(c.I);return(0,i.jsx)("div",{className:h()(m().loader,{[m().loaded]:s}),children:(0,i.jsx)(d(),{src:g,alt:"loopstudios",className:m().logo,ref:t})})};var p=s(6237),j=s.n(p),f=s(4243),_=s.n(f),v=s(1664),b=s.n(v);let w=()=>(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(b(),{href:"javascript:;",children:"About"})}),(0,i.jsx)("li",{children:(0,i.jsx)(b(),{href:"javascript:;",children:"Careers"})}),(0,i.jsx)("li",{children:(0,i.jsx)(b(),{href:"javascript:;",children:"Events"})}),(0,i.jsx)("li",{children:(0,i.jsx)(b(),{href:"javascript:;",children:"Products"})}),(0,i.jsx)("li",{children:(0,i.jsx)(b(),{href:"javascript:;",children:"Support"})})]});var C={src:"/loopstudios//_next/static/media/icon-hamburger.97f1be60.svg",height:16,width:24};let N=e=>{let{setMenuIsOpen:t}=e;return(0,i.jsxs)("header",{children:[(0,i.jsx)("div",{className:"".concat(_().logo),children:(0,i.jsx)(d(),{src:g,className:"custom-slide-left",alt:"loopstudios"})}),(0,i.jsx)(d(),{src:C,onClick:()=>t(!0),className:"d-md-none"}),(0,i.jsx)("nav",{className:h()(_().nav,"custom-slide-right","d-none d-md-block"),children:(0,i.jsx)(w,{})})]})};var E=s(2358),y=s.n(E),k={src:"/loopstudios//_next/static/media/icon-close.068862d6.svg",height:20,width:20};let I=e=>{let{isMenuOpen:t,setMenuIsOpen:s}=e;return(0,i.jsxs)("div",{className:h()(y()["menu-container"],{[y().open]:t}),children:[(0,i.jsxs)("header",{className:"".concat(y().header),children:[(0,i.jsx)("div",{className:"".concat(y().logo),children:(0,i.jsx)(d(),{src:g,alt:"loopstudios"})}),(0,i.jsx)("nav",{className:"".concat(y().nav),children:(0,i.jsx)(d(),{src:k,className:"d-md-none",onClick:()=>s(!1),alt:"X"})})]}),(0,i.jsx)("div",{className:h()(y()["main-nav"],"main-nav"),children:(0,i.jsx)(w,{})})]})},Q=()=>{let[e,t]=(0,a.useState)(!1),[s]=(0,a.useContext)(c.I),n=(0,a.useRef)(),{slide:l}=o();return(0,a.useEffect)(()=>{let e=n.current;if(s&&e){let t=r.p8.timeline();t.fromTo(...l({el:e.querySelectorAll(".custom-slide-left"),to:"left",name:"parallel"})).fromTo(...l({el:e.querySelectorAll(".custom-slide-right"),name:"parallel"}))}},[s]),(0,i.jsxs)("section",{className:"".concat(j().landing),ref:n,children:[(0,i.jsx)(N,{setMenuIsOpen:t}),(0,i.jsx)(I,{isMenuOpen:e,setMenuIsOpen:t}),(0,i.jsx)("div",{className:"".concat(j().banner," custom-slide-left"),children:(0,i.jsx)("h1",{children:"Immersive experiences that deliver"})})]})};var M=s(1917),T=s.n(M),B={src:"/loopstudios//_next/static/media/image-interactive.22c4c36a.jpg",height:500,width:731,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAgfZ//8QAGxAAAgMAAwAAAAAAAAAAAAAAAQQCAxEAMTL/2gAIAQEAAT8AZbYteslsAIrCXnT3hG8//8QAGhEBAAEFAAAAAAAAAAAAAAAAAQACAxMxsf/aAAgBAgEBPwCxSOQTScJ//8QAFxEAAwEAAAAAAAAAAAAAAAAAAANCcv/aAAgBAwEBPwBV6P/Z",blurWidth:8,blurHeight:5};let F=()=>{let e=(0,a.useRef)(),[t]=(0,a.useContext)(c.I),{slide:s}=o();return(0,a.useEffect)(()=>{let i=e.current;t&&i&&(r.p8.fromTo(...s({el:i.firstChild,trigger:!0})),r.p8.fromTo(...s({el:i.lastChild,to:"left",trigger:!0})))},[t]),(0,i.jsxs)("section",{className:"".concat(T().about),ref:e,children:[(0,i.jsx)("div",{className:"".concat(T()["interactive-img"]),children:(0,i.jsx)(d(),{src:B,alt:"Interactive VR"})}),(0,i.jsxs)("div",{className:"".concat(T()["about-description"]),children:[(0,i.jsx)("h1",{children:"The leader in interactive VR"}),(0,i.jsx)("p",{children:"Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand."})]})]})};var S=s(2752),P=s.n(S),R={src:"/loopstudios//_next/static/media/icon-facebook.cb8ec932.svg",height:24,width:24},D={src:"/loopstudios//_next/static/media/icon-twitter.1b6582cb.svg",height:20,width:24},L={src:"/loopstudios//_next/static/media/icon-pinterest.94a5f0e4.svg",height:24,width:24},V={src:"/loopstudios//_next/static/media/icon-instagram.a78fbe9d.svg",height:24,width:24};let O=()=>(0,i.jsxs)("footer",{className:"".concat(P().footer),children:[(0,i.jsxs)("div",{className:"".concat(P()["footer-quick-links"]),children:[(0,i.jsx)(d(),{src:g,alt:"loopstudios"}),(0,i.jsx)(w,{})]}),(0,i.jsxs)("div",{className:"".concat(P()["footer-socials"]),children:[(0,i.jsxs)("ul",{className:"".concat(P()["social-media"]),children:[(0,i.jsx)("li",{children:(0,i.jsx)(b(),{href:"javascript:;",children:(0,i.jsx)(d(),{src:R,alt:"Facebook"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(b(),{href:"javascript:;",children:(0,i.jsx)(d(),{src:D,alt:"Twitter"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(b(),{href:"javascript:;",children:(0,i.jsx)(d(),{src:L,alt:"Pinterest"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(b(),{href:"javascript:;",children:(0,i.jsx)(d(),{src:V,alt:"Instagram"})})})]}),(0,i.jsx)("span",{className:"".concat(P().copyright),children:"\xa9 2021 Loopstudios. All rights reserved."})]})]});var X=s(4516),q=s.n(X),G=s(6946),U=s.n(G);let Y=e=>{let{item:{name:t,img:s}}=e,{batchAnimate:r}=o(),[n]=(0,a.useContext)(c.I);return(0,a.useEffect)(()=>{n&&r(".item")},[n]),(0,i.jsxs)("div",{className:"".concat(U().item," item"),children:[(0,i.jsx)(d(),{src:"".concat("https://crstngrace.github.io/loopstudios","/").concat(s),alt:t,width:200,height:200}),(0,i.jsx)("h2",{children:t})]})},Z=()=>{let e=[{name:"Deep earth",img:"/assets/images/creations/image-deep-earth.jpg"},{name:"Night arcade",img:"/assets/images/creations/image-night-arcade.jpg"},{name:"Soccer team VR",img:"/assets/images/creations/image-soccer-team.jpg"},{name:"The grid",img:"/assets/images/creations/image-grid.jpg"},{name:"From up above VR",img:"/assets/images/creations/image-from-above.jpg"},{name:"Pocket borealis",img:"/assets/images/creations/image-pocket-borealis.jpg"},{name:"The curiosity",img:"/assets/images/creations/image-curiosity.jpg"},{name:"Make it fisheye",img:"/assets/images/creations/image-fisheye.jpg"}].map((e,t)=>(0,i.jsx)(Y,{item:e},t));return e},K=()=>{let e=(0,a.useRef)(),[t]=(0,a.useContext)(c.I),{slide:s}=o();return(0,a.useEffect)(()=>{let i=e.current;t&&i&&(r.p8.fromTo(...s({el:i.querySelector("h1"),to:"left",trigger:!0})),r.p8.fromTo(...s({el:i.querySelector("button"),trigger:!0})))},[t]),(0,i.jsxs)("section",{className:"".concat(q().creations),ref:e,children:[(0,i.jsxs)("div",{className:"".concat(q()["creations-header"]),children:[(0,i.jsx)("h1",{children:"Our creations"}),(0,i.jsx)("button",{className:"d-none d-md-block",children:"See all"})]}),(0,i.jsx)("div",{className:"".concat(q()["creation-items"]),children:(0,i.jsx)(Z,{})}),(0,i.jsx)("button",{className:"d-block d-md-none mx-auto",children:"See all"})]})};function z(){let[e,t]=(0,a.useContext)(c.I),s=(0,a.useRef)(),n=(0,a.useRef)(),{init:l}=o();l();let d=()=>{r.p8.to(s.current,{duration:1,scale:3,autoAlpha:0,ease:"none",onComplete:()=>{r.p8.to(n.current,{visibility:"visible"}),t(1)}})};return(0,a.useEffect)(()=>{d()},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{loaderRef:s}),(0,i.jsxs)("main",{ref:n,children:[(0,i.jsx)(Q,{}),(0,i.jsx)(F,{}),(0,i.jsx)(K,{})]}),(0,i.jsx)(O,{})]})}},2752:function(e){e.exports={footer:"Footer_footer__Ksopt","footer-socials":"Footer_footer-socials__fnwdV","footer-quick-links":"Footer_footer-quick-links__2YQ_D","social-media":"Footer_social-media__hjqt6",copyright:"Footer_copyright__UNsV6"}},4243:function(e){e.exports={nav:"Header_nav__SMZyC"}},6946:function(e){e.exports={item:"Item_item__X8XY0"}},8519:function(e){e.exports={loader:"Loader_loader__DJTWa",loaded:"Loader_loaded__bmYNz",logo:"Loader_logo__cwpvX"}},2358:function(e){e.exports={"menu-container":"Menu_menu-container__nzybn",logo:"Menu_logo__Q_2K1",open:"Menu_open__Bu20s","main-nav":"Menu_main-nav__lbewZ"}},1917:function(e){e.exports={about:"About_about__73b1l","about-description":"About_about-description__PplCR","interactive-img":"About_interactive-img__bvhXG"}},4516:function(e){e.exports={"creations-header":"Creations_creations-header__DrQdP","creation-items":"Creations_creation-items__EZCVO"}},6237:function(e){e.exports={landing:"Main_landing__68zfB",banner:"Main_banner__N0eHj"}}},function(e){e.O(0,[802,325,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);