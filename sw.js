if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const u=e=>n(e,r),a={module:{uri:r},exports:o,require:u};s[r]=Promise.all(i.map((e=>a[e]||u(e)))).then((e=>(l(...e),o)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.a706a061.js",revision:null},{url:"assets/index.c72002fd.css",revision:null},{url:"index.html",revision:"3a343897b2b9e2e53adbb69018b357c8"},{url:"assets/amigos-do-futuro.d7bc538f.png",revision:null},{url:"assets/emaranhados.dc9af468.png",revision:null},{url:"assets/infovirus.89117b69.png",revision:null},{url:"assets/keep-vue.8934a2d4.png",revision:null},{url:"assets/luz_do_saber.1f490dfc.png",revision:null},{url:"assets/lyriks.5df2c8e5.png",revision:null},{url:"assets/mide-balanca.026b3590.png",revision:null},{url:"assets/mide-ilha.b58bde10.png",revision:null},{url:"assets/profile.a6bd84f4.png",revision:null},{url:"assets/react.991eb148.png",revision:null},{url:"assets/vite.c7f26869.png",revision:null},{url:"assets/weather-app.825a1bfb.png",revision:null},{url:"logo192.png",revision:"7d1ccd3ebd031d000fe760562b85aa27"},{url:"logo512.png",revision:"ffaf582ee8db7aa20f789bbefe64536b"},{url:"logo192.png",revision:"7d1ccd3ebd031d000fe760562b85aa27"},{url:"logo512.png",revision:"ffaf582ee8db7aa20f789bbefe64536b"},{url:"manifest.webmanifest",revision:"4b727f1a9d9f3d8ba7c9b5d4ae1f1497"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
