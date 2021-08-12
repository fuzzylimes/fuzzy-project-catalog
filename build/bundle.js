var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,c=!1;function l(t,e,n,r){for(;t<e;){const o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function u(t,e){c?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let o=0;for(let t=0;t<e.length;t++){const s=l(1,o+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;r[t]=n[s]+1;const i=s+1;n[i]=t,o=Math.max(i,o)}const s=[],i=[];let a=e.length-1;for(let t=n[o]+1;0!=t;t=r[t-1]){for(s.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);s.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<s.length&&i[e].claim_order>=s[n].claim_order;)n++;const r=n<s.length?s[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function f(t,e,n){c&&!n?u(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function b(){return m("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t){a=t}function _(){if(!a)throw new Error("Function called outside component initialization");return a}function w(){const t=_();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((e=>{e.call(t,o)}))}}}function x(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const k=[],E=[],j=[],z=[],A=Promise.resolve();let S=!1;function O(){S||(S=!0,A.then(N))}function P(t){j.push(t)}let C=!1;const L=new Set;function N(){if(!C){C=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];v(e),R(e.$$)}for(v(null),k.length=0;E.length;)E.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];L.has(e)||(L.add(e),e())}j.length=0}while(k.length);for(;z.length;)z.pop()();S=!1,C=!1,L.clear()}}function R(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const T=new Set;let I;function B(){I={r:0,c:[],p:I}}function M(){I.r||o(I.c),I=I.p}function W(t,e){t&&t.i&&(T.delete(t),t.i(e))}function q(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),I.c.push((()=>{T.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function F(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],a=e[s];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in i)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function D(t){return"object"==typeof t&&null!==t?t:{}}function H(t){t&&t.c()}function G(t,e,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,r),i||P((()=>{const e=c.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(P)}function U(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,n,s,i,l,u,f=[-1]){const d=a;v(e);const h=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:r(),dirty:f,skip_bound:!1};let m=!1;if(h.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&l(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),m&&function(t,e){-1===t.$$.dirty[0]&&(k.push(t),O(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],h.update(),m=!0,o(h.before_update),h.fragment=!!i&&i(h.ctx),n.target){if(n.hydrate){c=!0;const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(p)}else h.fragment&&h.fragment.c();n.intro&&W(e.$$.fragment),G(e,n.target,n.anchor,n.customElement),c=!1,N()}v(d)}class K{$destroy(){U(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const V=[];function X(t,e){return{subscribe:J(t,e).subscribe}}function J(e,n=t){let r;const o=[];function s(t){if(i(e,t)&&(e=t,r)){const t=!V.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),V.push(n,e)}if(t){for(let t=0;t<V.length;t+=2)V[t][0](V[t+1]);V.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,a=t){const c=[i,a];return o.push(c),1===o.length&&(r=n(s)||t),i(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function Q(e,n,r){const i=!Array.isArray(e),a=i?[e]:e,c=n.length<2;return X(r,(e=>{let r=!1;const l=[];let u=0,f=t;const p=()=>{if(u)return;f();const r=n(i?l[0]:l,e);c?e(r):f=s(r)?r:t},d=a.map(((e,n)=>function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(e,(t=>{l[n]=t,u&=~(1<<n),r&&p()}),(()=>{u|=1<<n}))));return r=!0,p(),function(){o(d),f()}}))}function Z(t){let n,r,o;const s=[t[2]];var i=t[0];function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(a()),n.$on("routeEvent",t[7])),{c(){n&&H(n.$$.fragment),r=b()},m(t,e){n&&G(n,t,e),f(t,r,e),o=!0},p(t,e){const o=4&e?F(s,[D(t[2])]):{};if(i!==(i=t[0])){if(n){B();const t=n;q(t.$$.fragment,1,0,(()=>{U(t,1)})),M()}i?(n=new i(a()),n.$on("routeEvent",t[7]),H(n.$$.fragment),W(n.$$.fragment,1),G(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(t){o||(n&&W(n.$$.fragment,t),o=!0)},o(t){n&&q(n.$$.fragment,t),o=!1},d(t){t&&p(r),n&&U(n,t)}}}function tt(t){let n,r,o;const s=[{params:t[1]},t[2]];var i=t[0];function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(a()),n.$on("routeEvent",t[6])),{c(){n&&H(n.$$.fragment),r=b()},m(t,e){n&&G(n,t,e),f(t,r,e),o=!0},p(t,e){const o=6&e?F(s,[2&e&&{params:t[1]},4&e&&D(t[2])]):{};if(i!==(i=t[0])){if(n){B();const t=n;q(t.$$.fragment,1,0,(()=>{U(t,1)})),M()}i?(n=new i(a()),n.$on("routeEvent",t[6]),H(n.$$.fragment),W(n.$$.fragment,1),G(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(t){o||(n&&W(n.$$.fragment,t),o=!0)},o(t){n&&q(n.$$.fragment,t),o=!1},d(t){t&&p(r),n&&U(n,t)}}}function et(t){let e,n,r,o;const s=[tt,Z],i=[];function a(t,e){return t[1]?0:1}return e=a(t),n=i[e]=s[e](t),{c(){n.c(),r=b()},m(t,n){i[e].m(t,n),f(t,r,n),o=!0},p(t,[o]){let c=e;e=a(t),e===c?i[e].p(t,o):(B(),q(i[c],1,1,(()=>{i[c]=null})),M(),n=i[e],n?n.p(t,o):(n=i[e]=s[e](t),n.c()),W(n,1),n.m(r.parentNode,r))},i(t){o||(W(n),o=!0)},o(t){q(n),o=!1},d(t){i[e].d(t),t&&p(r)}}}function nt(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const rt=X(null,(function(t){t(nt());const e=()=>{t(nt())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));Q(rt,(t=>t.location)),Q(rt,(t=>t.querystring));const ot=J(void 0);function st(t,e,n){let{routes:r={}}=e,{prefix:o=""}=e,{restoreScrollState:s=!1}=e;class i{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:r}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,o,s,i=[],a="",c=t.split("/");for(c[0]||c.shift();o=c.shift();)"*"===(n=o[0])?(i.push("wild"),a+="/(.*)"):":"===n?(r=o.indexOf("?",1),s=o.indexOf(".",1),i.push(o.substring(1,~r?r:~s?s:o.length)),a+=~r&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(a+=(~r?"?":"")+"\\"+o.substring(s))):a+="/"+o;return{keys:i,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=r}match(t){if(o)if("string"==typeof o){if(!t.startsWith(o))return null;t=t.substr(o.length)||"/"}else if(o instanceof RegExp){const e=t.match(o);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let r=0;for(;r<this._keys.length;){try{n[this._keys[r]]=decodeURIComponent(e[r+1]||"")||null}catch(t){n[this._keys[r]]=null}r++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const a=[];r instanceof Map?r.forEach(((t,e)=>{a.push(new i(e,t))})):Object.keys(r).forEach((t=>{a.push(new i(t,r[t]))}));let c=null,l=null,u={};const f=w();async function p(t,e){await(O(),A),f(t,e)}let d=null,h=null;var m;s&&(h=t=>{d=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",h),m=()=>{d?window.scrollTo(d.__svelte_spa_router_scrollX,d.__svelte_spa_router_scrollY):window.scrollTo(0,0)},_().$$.after_update.push(m));let g=null,b=null;const $=rt.subscribe((async t=>{g=t;let e=0;for(;e<a.length;){const r=a[e].match(t.location);if(!r){e++;continue}const o={route:a[e].path,location:t.location,querystring:t.querystring,userData:a[e].userData,params:r&&"object"==typeof r&&Object.keys(r).length?r:null};if(!await a[e].checkConditions(o))return n(0,c=null),b=null,void p("conditionsFailed",o);p("routeLoading",Object.assign({},o));const s=a[e].component;if(b!=s){s.loading?(n(0,c=s.loading),b=s,n(1,l=s.loadingParams),n(2,u={}),p("routeLoaded",Object.assign({},o,{component:c,name:c.name,params:l}))):(n(0,c=null),b=null);const e=await s();if(t!=g)return;n(0,c=e&&e.default||e),b=s}return r&&"object"==typeof r&&Object.keys(r).length?n(1,l=r):n(1,l=null),n(2,u=a[e].props),void p("routeLoaded",Object.assign({},o,{component:c,name:c.name,params:l})).then((()=>{ot.set(l)}))}n(0,c=null),b=null,ot.set(void 0)}));return function(t){_().$$.on_destroy.push(t)}((()=>{$(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&n(3,r=t.routes),"prefix"in t&&n(4,o=t.prefix),"restoreScrollState"in t&&n(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[c,l,u,r,o,s,function(e){x.call(this,t,e)},function(e){x.call(this,t,e)}]}class it extends K{constructor(t){super(),Y(this,t,st,et,i,{routes:3,prefix:4,restoreScrollState:5})}}var at=[{id:1,name:"beat-range",display:"Beat-Range",url:"https://beat-range.vercel.app",github:"https://github.com/fuzzylimes/beat-range",image:"./images/beat-range.png",completed:"4/28/2021",tags:["health"],description:"Simple web app for calculating your healthy heart beat ranges."},{id:2,name:"lookie-here",display:"LOOKIE-HERE!",url:"https://lookie-here.vercel.app",github:"https://github.com/fuzzylimes/lookie-here",image:"./images/lookie-here.png",completed:"5/5/2021",tags:["maps","games"],description:"Web app for sharing markers and notes on fictional maps, all without a database! Can choose from provided maps, or provide your own."},{id:3,name:"gym-bag",display:"Gym Bag",url:"https://gym-bag.vercel.app",github:"https://github.com/fuzzylimes/gym-bag",image:"./images/gym-bag.png",completed:"5/13/2021",tags:["health","fitness"],description:"Web app with some basic gym tools, such as timers, weight calculators, and circuit training."},{id:4,name:"poke-pack-sim",display:"Poké-Pack-Sim",url:"https://poke-pack-sim.vercel.app",github:"https://github.com/fuzzylimes/poke-pack-sim",image:"./images/poke-pack.png",completed:"5/23/2021",tags:["games"],description:"Web app to simulate opening pokemon card packs. Uses the Pokemon TCG API to pull pack details. (Much cheaper than buying cards)"},{id:5,name:"random-pexels",display:"Random Pexels",url:"https://random-pexels.vercel.app/api/random",github:"https://github.com/fuzzylimes/random-pexels",image:"",completed:"5/28/2021",tags:["api"],description:"API for retrieving random images from the pexels API."},{id:6,name:"fp-table-tracker",display:"Fox in the Woods Poker tracker",url:"http://fp-table-tracker.vercel.app",github:"https://github.com/fuzzylimes/fp-table-tracker",image:"./images/fp-tracker.png",completed:"7/14/2021",tags:["games"],description:"Web app for tracking poker table activity for a friend."},{id:7,name:"burn-after-reading",display:"Burn After Reading",url:"https://burn-after-reading.vercel.app",github:"https://github.com/fuzzylimes/burn-after-reading",image:"./images/bar.png",completed:"8/8/2021",tags:["security","tools"],description:"Web app for sending secure details through a one time link."}];function ct(e){let n,r;return{c(){n=h("span"),r=m(e[0]),$(n,"class","tag is-link is-light is-rounded mx-1")},m(t,e){f(t,n,e),u(n,r)},p(t,[e]){1&e&&y(r,t[0])},i:t,o:t,d(t){t&&p(n)}}}function lt(t,e,n){let{tag:r}=e;return t.$$set=t=>{"tag"in t&&n(0,r=t.tag)},[r]}class ut extends K{constructor(t){super(),Y(this,t,lt,ct,i,{tag:0})}}function ft(t,e,n){const r=t.slice();return r[1]=e[n],r}function pt(e){let n,r;return{c(){n=h("img"),n.src!==(r="./images/default.jpg")&&$(n,"src","./images/default.jpg"),$(n,"alt","No preview available")},m(t,e){f(t,n,e)},p:t,d(t){t&&p(n)}}}function dt(t){let e,n;return{c(){e=h("img"),e.src!==(n=t[0].image)&&$(e,"src",n),$(e,"alt","Project example")},m(t,n){f(t,e,n)},p(t,r){1&r&&e.src!==(n=t[0].image)&&$(e,"src",n)},d(t){t&&p(e)}}}function ht(t){let e,n;return e=new ut({props:{tag:t[1]}}),{c(){H(e.$$.fragment)},m(t,r){G(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.tag=t[1]),e.$set(r)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){q(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function mt(t){let e,n,r,o,s,i,a,c,l,b,v,_,w,x,k,E,j,z,A,S,O,P,C,L,N,R,T,I,F,D,H,G,U,Y=t[0].display+"",K=t[0].description+"",V=t[0].completed+"";function X(t,e){return""!==t[0].image?dt:pt}let J=X(t),Q=J(t),Z=t[0].tags,tt=[];for(let e=0;e<Z.length;e+=1)tt[e]=ht(ft(t,Z,e));const et=t=>q(tt[t],1,1,(()=>{tt[t]=null}));return{c(){e=h("div"),n=h("header"),r=h("p"),o=m(Y),s=g(),i=h("div"),a=h("figure"),Q.c(),c=g(),l=h("div"),b=h("div"),v=h("div"),_=h("p"),w=h("a"),x=m("Visit Site"),E=m(" | "),j=h("a"),z=m("github"),S=g(),O=h("div"),P=m(K),C=g(),L=h("br"),N=h("br"),R=g(),T=h("span"),I=m(V),F=g(),D=h("br"),H=h("br"),G=g();for(let t=0;t<tt.length;t+=1)tt[t].c();$(r,"class","card-header-title title is-4 has-text-info"),$(n,"class","card-header"),$(a,"class","image is-4by3"),$(i,"class","card-image"),$(w,"href",k=t[0].url),$(j,"href",A=t[0].github),$(_,"class","title is-4 is-link"),$(v,"class","media-content"),$(b,"class","media"),$(O,"class","content"),$(l,"class","card-content"),$(e,"class","card svelte-jnlzj1")},m(t,p){f(t,e,p),u(e,n),u(n,r),u(r,o),u(e,s),u(e,i),u(i,a),Q.m(a,null),u(e,c),u(e,l),u(l,b),u(b,v),u(v,_),u(_,w),u(w,x),u(_,E),u(_,j),u(j,z),u(l,S),u(l,O),u(O,P),u(O,C),u(O,L),u(O,N),u(O,R),u(O,T),u(T,I),u(O,F),u(O,D),u(O,H),u(O,G);for(let t=0;t<tt.length;t+=1)tt[t].m(O,null);U=!0},p(t,[e]){if((!U||1&e)&&Y!==(Y=t[0].display+"")&&y(o,Y),J===(J=X(t))&&Q?Q.p(t,e):(Q.d(1),Q=J(t),Q&&(Q.c(),Q.m(a,null))),(!U||1&e&&k!==(k=t[0].url))&&$(w,"href",k),(!U||1&e&&A!==(A=t[0].github))&&$(j,"href",A),(!U||1&e)&&K!==(K=t[0].description+"")&&y(P,K),(!U||1&e)&&V!==(V=t[0].completed+"")&&y(I,V),1&e){let n;for(Z=t[0].tags,n=0;n<Z.length;n+=1){const r=ft(t,Z,n);tt[n]?(tt[n].p(r,e),W(tt[n],1)):(tt[n]=ht(r),tt[n].c(),W(tt[n],1),tt[n].m(O,null))}for(B(),n=Z.length;n<tt.length;n+=1)et(n);M()}},i(t){if(!U){for(let t=0;t<Z.length;t+=1)W(tt[t]);U=!0}},o(t){tt=tt.filter(Boolean);for(let t=0;t<tt.length;t+=1)q(tt[t]);U=!1},d(t){t&&p(e),Q.d(),d(tt,t)}}}function gt(t,e,n){let{project:r}=e;return t.$$set=t=>{"project"in t&&n(0,r=t.project)},[r]}class bt extends K{constructor(t){super(),Y(this,t,gt,mt,i,{project:0})}}function $t(e){let n;return{c(){n=h("footer"),n.innerHTML='<div class="content has-text-centered"><p class="is-size-4">All projects created by <a href="https://fuzzylimes.net">fuzzylimes</a></p> \n    <p class="mt-3">Placeholder image by <a href="https://www.pexels.com/@anniroenkae?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">Anni Roenkae</a> from <a href="https://www.pexels.com/photo/close-up-photo-of-blue-liquid-2317711/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">Pexels</a>.</p> \n    <p>Favicon by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p></div>',$(n,"class","footer svelte-1dg7t1e")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&p(n)}}}class yt extends K{constructor(t){super(),Y(this,t,null,$t,i,{})}}function vt(t,e,n){const r=t.slice();return r[0]=e[n],r}function _t(e){let n,r,o,s;return r=new bt({props:{project:e[0]}}),{c(){n=h("div"),H(r.$$.fragment),o=g(),$(n,"class","column is-4")},m(t,e){f(t,n,e),G(r,n,null),u(n,o),s=!0},p:t,i(t){s||(W(r.$$.fragment,t),s=!0)},o(t){q(r.$$.fragment,t),s=!1},d(t){t&&p(n),U(r)}}}function wt(t){let e,n,r,o,s,i,a,c,l=at.reverse(),m=[];for(let e=0;e<l.length;e+=1)m[e]=_t(vt(t,l,e));const b=t=>q(m[t],1,1,(()=>{m[t]=null}));return a=new yt({}),{c(){e=h("main"),n=h("div"),r=h("div"),o=h("div"),o.innerHTML='<div class="section is-medium"><h1 class="title is-1 svelte-1c7am5e">fuzzy project catalog</h1> \n\t\t\t\t\t<h2 class="subtitle is-4 svelte-1c7am5e">A place for sharing my public projects.</h2></div>',s=g();for(let t=0;t<m.length;t+=1)m[t].c();i=g(),H(a.$$.fragment),$(o,"class","column is-full"),$(r,"class","columns has-text-centered is-centered is-vcentered is-multiline is-variable is-6"),$(n,"class","container px-5")},m(t,l){f(t,e,l),u(e,n),u(n,r),u(r,o),u(r,s);for(let t=0;t<m.length;t+=1)m[t].m(r,null);f(t,i,l),G(a,t,l),c=!0},p(t,[e]){if(0&e){let n;for(l=at.reverse(),n=0;n<l.length;n+=1){const o=vt(t,l,n);m[n]?(m[n].p(o,e),W(m[n],1)):(m[n]=_t(o),m[n].c(),W(m[n],1),m[n].m(r,null))}for(B(),n=l.length;n<m.length;n+=1)b(n);M()}},i(t){if(!c){for(let t=0;t<l.length;t+=1)W(m[t]);W(a.$$.fragment,t),c=!0}},o(t){m=m.filter(Boolean);for(let t=0;t<m.length;t+=1)q(m[t]);q(a.$$.fragment,t),c=!1},d(t){t&&p(e),d(m,t),t&&p(i),U(a,t)}}}function xt(e){let n;return{c(){n=h("main"),n.innerHTML='<div class="hero is-fullheight-with-navbar is-dark"><div class="hero-body"><div class="container"><div class="columns has-text-centered is-centered"><div class="column is-9-tablet is-half-widescreen"><p class="big svelte-11ytrm7">404</p> \n\t\t\t\t\t\t<p class="is-size-5 mt-5">Nothing to see here, move along.</p></div></div></div></div></div>'},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&p(n)}}}var kt={"/":class extends K{constructor(t){super(),Y(this,t,null,wt,i,{})}},"*":class extends K{constructor(t){super(),Y(this,t,null,xt,i,{})}}};function Et(e){let n,r;return n=new it({props:{routes:kt}}),{c(){H(n.$$.fragment)},m(t,e){G(n,t,e),r=!0},p:t,i(t){r||(W(n.$$.fragment,t),r=!0)},o(t){q(n.$$.fragment,t),r=!1},d(t){U(n,t)}}}return new class extends K{constructor(t){super(),Y(this,t,null,Et,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map