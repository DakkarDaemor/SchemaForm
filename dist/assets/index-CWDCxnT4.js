var Se=Object.defineProperty;var Ce=(r,e,t)=>e in r?Se(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var m=(r,e,t)=>Ce(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,G=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),re=new WeakMap;let ge=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(G&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=re.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&re.set(t,e))}return e}toString(){return this.cssText}};const Oe=r=>new ge(typeof r=="string"?r:r+"",void 0,Q),E=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new ge(t,r,Q)},Ne=(r,e)=>{if(G)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=I.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},ne=G?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Oe(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pe,defineProperty:Ue,getOwnPropertyDescriptor:Me,getOwnPropertyNames:Le,getOwnPropertySymbols:He,getPrototypeOf:Te}=Object,y=globalThis,oe=y.trustedTypes,Ie=oe?oe.emptyScript:"",j=y.reactiveElementPolyfillSupport,N=(r,e)=>r,B={toAttribute(r,e){switch(e){case Boolean:r=r?Ie:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ve=(r,e)=>!Pe(r,e),ae={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:ve};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ae){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ue(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=Me(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){const l=i==null?void 0:i.call(this);n==null||n.call(this,o),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ae}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;const e=Te(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){const t=this.properties,s=[...Le(t),...He(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(ne(i))}else e!==void 0&&t.push(ne(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ne(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var n;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:B).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var n,o;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=s.getPropertyOptions(i),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((n=l.converter)==null?void 0:n.fromAttribute)!==void 0?l.converter:B;this._$Em=i;const h=a.fromAttribute(t,l.type);this[i]=h??((o=this._$Ej)==null?void 0:o.get(i))??h,this._$Em=null}}requestUpdate(e,t,s,i=!1,n){var o;if(e!==void 0){const l=this.constructor;if(i===!1&&(n=this[e]),s??(s=l.getPropertyOptions(e)),!((s.hasChanged??ve)(n,t)||s.useDefault&&s.reflect&&n===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(l._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i){const{wrapped:l}=o,a=this[n];l!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[N("elementProperties")]=new Map,w[N("finalized")]=new Map,j==null||j({ReactiveElement:w}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,le=r=>r,R=P.trustedTypes,he=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,ye="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,be="?"+v,Re=`<${be}>`,A=document,U=()=>A.createComment(""),M=r=>r===null||typeof r!="object"&&typeof r!="function",X=Array.isArray,ke=r=>X(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",z=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,de=/>/g,b=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ue=/'/g,pe=/"/g,_e=/^(?:script|style|textarea|title)$/i,je=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),d=je(1),S=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),me=new WeakMap,_=A.createTreeWalker(A,129);function xe(r,e){if(!X(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return he!==void 0?he.createHTML(e):e}const ze=(r,e)=>{const t=r.length-1,s=[];let i,n=e===2?"<svg>":e===3?"<math>":"",o=O;for(let l=0;l<t;l++){const a=r[l];let h,u,c=-1,$=0;for(;$<a.length&&(o.lastIndex=$,u=o.exec(a),u!==null);)$=o.lastIndex,o===O?u[1]==="!--"?o=ce:u[1]!==void 0?o=de:u[2]!==void 0?(_e.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=b):u[3]!==void 0&&(o=b):o===b?u[0]===">"?(o=i??O,c=-1):u[1]===void 0?c=-2:(c=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?b:u[3]==='"'?pe:ue):o===pe||o===ue?o=b:o===ce||o===de?o=O:(o=b,i=void 0);const g=o===b&&r[l+1].startsWith("/>")?" ":"";n+=o===O?a+Re:c>=0?(s.push(h),a.slice(0,c)+ye+a.slice(c)+v+g):a+v+(c===-2?l:g)}return[xe(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class L{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[h,u]=ze(e,t);if(this.el=L.createElement(h,s),_.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=_.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(ye)){const $=u[o++],g=i.getAttribute(c).split(v),T=/([.?@])?(.*)/.exec($);a.push({type:1,index:n,name:T[2],strings:g,ctor:T[1]==="."?De:T[1]==="?"?Be:T[1]==="@"?Ve:k}),i.removeAttribute(c)}else c.startsWith(v)&&(a.push({type:6,index:n}),i.removeAttribute(c));if(_e.test(i.tagName)){const c=i.textContent.split(v),$=c.length-1;if($>0){i.textContent=R?R.emptyScript:"";for(let g=0;g<$;g++)i.append(c[g],U()),_.nextNode(),a.push({type:2,index:++n});i.append(c[$],U())}}}else if(i.nodeType===8)if(i.data===be)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(v,c+1))!==-1;)a.push({type:7,index:n}),c+=v.length-1}n++}}static createElement(e,t){const s=A.createElement("template");return s.innerHTML=e,s}}function C(r,e,t=r,s){var o,l;if(e===S)return e;let i=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const n=M(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=C(r,i._$AS(r,e.values),i,s)),e}class qe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??A).importNode(t,!0);_.currentNode=i;let n=_.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new H(n,n.nextSibling,this,e):a.type===1?h=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(h=new Je(n,this,e)),this._$AV.push(h),a=s[++l]}o!==(a==null?void 0:a.index)&&(n=_.nextNode(),o++)}return _.currentNode=A,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class H{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),M(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ke(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=L.createElement(xe(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const o=new qe(i,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=me.get(e.strings);return t===void 0&&me.set(e.strings,t=new L(e)),t}k(e){X(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new H(this.O(U()),this.O(U()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=le(e).nextSibling;le(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(e,t=this,s,i){const n=this.strings;let o=!1;if(n===void 0)e=C(this,e,t,0),o=!M(e)||e!==this._$AH&&e!==S,o&&(this._$AH=e);else{const l=e;let a,h;for(e=n[0],a=0;a<n.length-1;a++)h=C(this,l[s+a],t,a),h===S&&(h=this._$AH[a]),o||(o=!M(h)||h!==this._$AH[a]),h===p?e=p:e!==p&&(e+=(h??"")+n[a+1]),this._$AH[a]=h}o&&!i&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class De extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class Be extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Ve extends k{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??p)===S)return;const s=this._$AH,i=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Je{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const q=P.litHtmlPolyfillSupport;q==null||q(L,H),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.3.3");const We=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const n=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new H(e.insertBefore(U(),n),n,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis;class f extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=We(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return S}}var $e;f._$litElement$=!0,f.finalized=!0,($e=x.litElementHydrateSupport)==null||$e.call(x,{LitElement:f});const D=x.litElementPolyfillSupport;D==null||D({LitElement:f});(x.litElementVersions??(x.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=Symbol.for(""),Fe=r=>{if((r==null?void 0:r.r)===Ae)return r==null?void 0:r._$litStatic$},ee=r=>({_$litStatic$:r,r:Ae}),fe=new Map,Ze=r=>(e,...t)=>{const s=t.length;let i,n;const o=[],l=[];let a,h=0,u=!1;for(;h<s;){for(a=e[h];h<s&&(n=t[h],(i=Fe(n))!==void 0);)a+=i+e[++h],u=!0;h!==s&&l.push(n),o.push(a),h++}if(h===s&&o.push(e[s]),u){const c=o.join("$$lit$$");(e=fe.get(c))===void 0&&(o.raw=o,fe.set(c,e=o)),t=l}return r(e,...t)},te=Ze(d),se={string:"string-field",boolean:"boolean-field",number:"number-field",integer:"number-field",object:"object-field",array:"array-field",enum:"enum-field"};class V extends f{constructor(){super(),this.error=""}_validateFormat(e){var s;if(!e||!((s=this.schema)!=null&&s.format))return!0;switch(this.schema.format){case"email":return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);case"uri":case"url":try{return new URL(e),!0}catch{return!1}case"uuid":return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e);case"date":return/^\d{4}-\d{2}-\d{2}$/.test(e)&&!isNaN(Date.parse(e));case"time":return/^\d{2}:\d{2}(?::\d{2})?(?:Z|[+-]\d{2}:\d{2})?$/.test(e);case"date-time":return!isNaN(Date.parse(e));default:return!0}}_validateLength(e){var i,n;if(!e)return!0;const t=(i=this.schema)==null?void 0:i.minLength,s=(n=this.schema)==null?void 0:n.maxLength;return!(t&&e.length<t||s&&e.length>s)}_handleInput(e){const t=e.target.value;this.error="",this._validateLength(t)?this._validateFormat(t)||(this.error=`Formato non valido: ${this.schema.format}`):this.error=`Lunghezza tra ${this.schema.minLength||0} e ${this.schema.maxLength||"∞"}`,e.target.classList.toggle("error",!!this.error),this.dispatchEvent(new CustomEvent("field-input",{detail:{value:t,valid:!this.error}}))}render(){var e;return d`
      <div class="group">
        <label>
          ${this.label}
          ${this.required?d`<span class="required">*</span>`:""}
        </label>
        <input 
          type="text" 
          .value=${this.value||""} 
          @input=${this._handleInput}
          placeholder=${(e=this.schema)!=null&&e.format?`es. ${this._getFormatPlaceholder()}`:""}
        >
        ${this.error?d`<div class="error-message">${this.error}</div>`:""}
      </div>
    `}_getFormatPlaceholder(){var t;switch((t=this.schema)==null?void 0:t.format){case"email":return"user@example.com";case"uri":case"url":return"https://example.com";case"uuid":return"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";case"date":return"YYYY-MM-DD";case"time":return"HH:MM:SS";case"date-time":return"2024-01-15T10:30:00Z";default:return""}}}m(V,"styles",E`
    .group { display: flex; flex-direction: column; gap: 0.4rem; }
    label { font-weight: 600; color: #333; font-size: 0.95rem; }
    input { padding: 0.6rem; border: 1px solid #ccc; border-radius: 6px; font-size: 1rem; }
    input:focus { border-color: #0076ff; outline: none; box-shadow: 0 0 0 2px rgba(0,118,255,0.2); }
    input.error { border-color: #d32f2f; background: #ffebee; }
    .error-message { color: #d32f2f; font-size: 0.85rem; margin-top: 0.2rem; }
    .required { color: #d32f2f; }
  `),m(V,"properties",{label:{type:String},value:{type:String},schema:{type:Object},required:{type:Boolean}});customElements.define("string-field",V);class J extends f{constructor(){super(),this.error=""}_validateMultipleOf(e){var s;if(e==null||!((s=this.schema)!=null&&s.multipleOf))return!0;const t=this.schema.multipleOf;return e/t%1===0}_handleInput(e){const t=e.target.valueAsNumber;this.error="",!isNaN(t)&&!this._validateMultipleOf(t)?(this.error=`Deve essere un multiplo di ${this.schema.multipleOf}`,e.target.classList.add("error")):e.target.classList.remove("error"),this.dispatchEvent(new CustomEvent("field-input",{detail:{value:isNaN(t)?null:t,valid:!this.error}}))}render(){return d`
      <div class="group">
        <label>
          ${this.label}
          ${this.required?d`<span class="required">*</span>`:""}
        </label>
        <input 
          type="number" 
          .value=${this.value??""} 
          min=${this.min??""} 
          max=${this.max??""} 
          step=${this.step??"any"}
          @input=${this._handleInput}
        >
        ${this.error?d`<div class="error-message">${this.error}</div>`:""}
      </div>
    `}}m(J,"styles",E`
    .group { display: flex; flex-direction: column; gap: 0.4rem; }
    label { font-weight: 600; color: #333; font-size: 0.95rem; }
    input { padding: 0.6rem; border: 1px solid #ccc; border-radius: 6px; font-size: 1rem; }
    input:focus { border-color: #0076ff; outline: none; box-shadow: 0 0 0 2px rgba(0,118,255,0.2); }
    input.error { border-color: #d32f2f; background: #ffebee; }
    .error-message { color: #d32f2f; font-size: 0.85rem; margin-top: 0.2rem; }
    .required { color: #d32f2f; }
  `),m(J,"properties",{label:{type:String},value:{type:Number},min:{type:Number},max:{type:Number},step:{type:Number},schema:{type:Object},required:{type:Boolean}});customElements.define("number-field",J);class W extends f{_handleChange(e){this.dispatchEvent(new CustomEvent("field-input",{detail:{value:e.target.checked}}))}render(){return d`
      <div class="group">
        <input type="checkbox" id="chk" .checked=${!!this.value} @change=${this._handleChange}>
        <label for="chk">${this.label}</label>
      </div>
    `}}m(W,"styles",E`
    .group { display: flex; align-items: center; gap: 0.6rem; cursor: pointer; user-select: none; }
    label { font-weight: 600; color: #333; font-size: 0.95rem; cursor: pointer; }
    input { width: 1.2rem; height: 1.2rem; cursor: pointer; }
  `),m(W,"properties",{label:{type:String},value:{type:Boolean}});customElements.define("boolean-field",W);class F extends f{_handleChange(e){const t=e.target.value;let s=t;!isNaN(t)&&t!==""?s=Number(t):t==="true"?s=!0:t==="false"&&(s=!1),this.dispatchEvent(new CustomEvent("field-input",{detail:{value:s===""?null:s}}))}render(){var t;const e=((t=this.schema)==null?void 0:t.enum)||[];return d`
      <div class="group">
        <label>
          ${this.label}
          ${this.required?d`<span class="required">*</span>`:""}
        </label>
        <select .value=${this.value??""} @change=${this._handleChange}>
          <option value="">-- Seleziona --</option>
          ${e.map(s=>d`
            <option value=${s} ?selected=${s===this.value}>
              ${s}
            </option>
          `)}
        </select>
      </div>
    `}}m(F,"styles",E`
    .group { display: flex; flex-direction: column; gap: 0.4rem; }
    label { font-weight: 600; color: #333; font-size: 0.95rem; }
    select { padding: 0.6rem; border: 1px solid #ccc; border-radius: 6px; font-size: 1rem; background: white; cursor: pointer; }
    select:focus { border-color: #0076ff; outline: none; box-shadow: 0 0 0 2px rgba(0,118,255,0.2); }
    .required { color: #d32f2f; }
  `),m(F,"properties",{label:{type:String},value:{type:[String,Number,Boolean]},schema:{type:Object},required:{type:Boolean}});customElements.define("enum-field",F);class Z extends f{constructor(){super(),this.value={}}willUpdate(e){var t,s;if((t=this.schema)!=null&&t.properties&&(!this.value||typeof this.value!="object")&&(this.value={}),(s=this.schema)!=null&&s.properties&&this.value){const i={...this.value};for(const n of Object.keys(this.schema.properties))n in i||(i[n]=void 0);JSON.stringify(i)!==JSON.stringify(this.value)&&(this.value=i)}}_onFieldChange(e,t){this.value={...this.value,[e]:t.detail.value},this.dispatchEvent(new CustomEvent("field-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return!this.schema||!this.schema.properties?d`<div class="unsupported">Schema non valido per l'oggetto</div>`:d`
      <div class="group">
        <div class="title">${this.label}</div>
        <div class="fields-container">
          ${Object.entries(this.schema.properties).map(([e,t])=>{var l;let s;if(t.enum)s="enum-field";else{const a=t.type;s=se[a]}if(!s)return d`<div class="unsupported">Tipo non supportato: <strong>${t.type}</strong> per il campo <em>${e}</em></div>`;const i=ee(s),n=this.value[e],o=t.type==="integer"?1:void 0;return te`
              <${i}
                  .label=${t.title||e}
                  .value=${n}
                  .schema=${t}
                  .min=${t.minimum}
                  .max=${t.maximum}
                  .step=${o}
                  .required=${(l=this.schema.required)==null?void 0:l.includes(e)}
                  @field-input=${a=>this._onFieldChange(e,a)}>
              </${i}>
            `})}
        </div>
      </div>
    `}}m(Z,"styles",E`
    .group { display: flex; flex-direction: column; }
    .title { font-weight: 700; color: #1a1a1a; font-size: 1.05rem; padding: 0.8rem 0; border-bottom: 1px dotted #0076ff; }
    .fields-container { padding-left: 1rem; border-left: 1px dotted #0076ff; }
    .unsupported { color: #d32f2f; background: #ffebee; padding: 0.5rem; border-radius: 4px; }
  `),m(Z,"properties",{label:{type:String},schema:{type:Object},value:{type:Object},required:{type:Boolean}});customElements.define("object-field",Z);class Y extends f{constructor(){super(),this.value=[],this.error=""}willUpdate(e){Array.isArray(this.value)||(this.value=[])}_validateLength(e){var i,n;const t=(i=this.schema)==null?void 0:i.minItems,s=(n=this.schema)==null?void 0:n.maxItems;return t&&e.length<t?`Minimo ${t} elemento/i`:s&&e.length>s?`Massimo ${s} elemento/i`:""}_onFieldChange(e,t){const s=[...this.value];s[e]=t.detail.value,this.value=s,this.dispatchEvent(new CustomEvent("field-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_removeItem(e){const t=this.value.filter((s,i)=>i!==e);this.value=t,this.error=this._validateLength(this.value),this.dispatchEvent(new CustomEvent("field-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_addItem(){var s,i;if((s=this.schema)!=null&&s.maxItems&&this.value.length>=this.schema.maxItems){this.error=`Massimo ${this.schema.maxItems} elemento/i`;return}const e=(i=this.schema)==null?void 0:i.items;let t;if(e)switch(e.type){case"string":t="";break;case"number":case"integer":t=0;break;case"boolean":t=!1;break;case"object":t={};break;case"array":t=[];break}this.value=[...this.value,t],this.error=this._validateLength(this.value),this.dispatchEvent(new CustomEvent("field-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){if(!this.schema||!this.schema.items)return d`<div class="unsupported">Schema non valido per l'array</div>`;const e=this.schema.items;let t;if(e.enum)t="enum-field";else{const s=e.type;t=se[s]}return t?d`
      <div class="group">
        <div class="title">
          ${this.label}
          ${this.required?d`<span style="color: #d32f2f;">*</span>`:""}
        </div>
        ${this.error?d`<div style="color: #d32f2f; background: #ffebee; padding: 0.5rem; border-radius: 4px; margin: 0.5rem 0;">${this.error}</div>`:""}
        <div class="array-container">
          ${this.value.length===0?d`<div class="empty-message">Nessun elemento</div>`:d`
              ${this.value.map((s,i)=>{const n=ee(t),o=e.type==="integer"?1:void 0;return te`
                  <div class="array-item">
                    <div class="item-index">[${i}]</div>
                    <div class="item-content">
                      <${n}
                        .label=${e.title||`Elemento ${i}`}
                        .value=${s}
                        .schema=${e}
                        .min=${e.minimum}
                        .max=${e.maximum}
                        .step=${o}
                        @field-input=${l=>this._onFieldChange(i,l)}>
                      </${n}>
                    </div>
                    <button class="remove-btn" @click=${()=>this._removeItem(i)}>Rimuovi</button>
                  </div>
                `})}
            `}
          <button class="add-btn" @click=${()=>this._addItem()}>+ Aggiungi elemento</button>
        </div>
      </div>
    `:d`<div class="unsupported">Tipo non supportato per gli elementi dell'array: <strong>${e.type}</strong></div>`}}m(Y,"styles",E`
    .group { display: flex; flex-direction: column; }
    .title { font-weight: 700; color: #1a1a1a; font-size: 1.05rem; padding: 0.8rem 0; border-bottom: 1px dotted #0076ff; }
    .array-container { padding-left: 1rem; border-left: 1px dotted #0076ff; }
    .array-item { 
      display: flex; 
      align-items: flex-start; 
      gap: 0.5rem; 
      margin: 0.8rem 0;
      padding: 0.8rem;
      background: #f5f5f5;
      border-radius: 4px;
    }
    .item-content { flex: 1; }
    .item-index { 
      font-weight: 600; 
      color: #666; 
      min-width: 2rem;
      padding-top: 0.6rem;
    }
    .remove-btn {
      padding: 0.4rem 0.8rem;
      background: #d32f2f;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
      min-height: 2.4rem;
      display: flex;
      align-items: center;
    }
    .remove-btn:hover { background: #c62828; }
    .add-btn {
      padding: 0.6rem 1rem;
      background: #0076ff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.95rem;
      font-weight: 600;
    }
    .add-btn:hover { background: #0056b3; }
    .unsupported { color: #d32f2f; background: #ffebee; padding: 0.5rem; border-radius: 4px; }
    .empty-message { color: #999; font-style: italic; padding: 0.5rem 0; }
  `),m(Y,"properties",{label:{type:String},schema:{type:Object},value:{type:Array},required:{type:Boolean}});customElements.define("array-field",Y);class K extends f{constructor(){super(),this.schema={},this.value={}}willUpdate(e){var t;if((t=this.schema)!=null&&t.properties){const s={...this.value};for(const i of Object.keys(this.schema.properties)){const n=this.schema.properties[i];i in s||(n.default!==void 0?s[i]=n.default:n.type==="object"?s[i]={}:n.type==="array"?s[i]=[]:s[i]=void 0)}JSON.stringify(s)!==JSON.stringify(this.value)&&(this.value=s)}}_onFieldChange(e,t){this.value={...this.value,[e]:t.detail.value},this.dispatchEvent(new CustomEvent("form-changed",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return!this.schema||!this.schema.properties?d`<p>Incolla uno schema JSON valido per generare il form.</p>`:d`
      <form @submit=${e=>e.preventDefault()}>
        ${Object.entries(this.schema.properties).map(([e,t])=>{var a;let s;if(t.enum)s="enum-field";else{const h=t.type;s=se[h]}if(!s)return d`<div class="unsupported">Tipo non supportato: <strong>${t.type}</strong> per il campo <em>${e}</em></div>`;const i=ee(s),n=this.value[e],o=t.type==="integer"?1:void 0,l=(a=this.schema.required)==null?void 0:a.includes(e);return te`
            <${i}
                .label=${t.title||e}
                .value=${n}
                .schema=${t}
                .min=${t.minimum}
                .max=${t.maximum}
                .step=${o}
                .required=${l}
                @field-input=${h=>this._onFieldChange(e,h)}>
            </${i}>
         `})}
      </form>
    `}}m(K,"styles",E`
    :host { display: block; font-family: system-ui, -apple-system, sans-serif; }
    form { display: flex; flex-direction: column; gap: 1.2rem; }
    .unsupported { color: #d32f2f; background: #ffebee; padding: 0.5rem; border-radius: 4px; }
  `),m(K,"properties",{schema:{type:Object},value:{type:Object}});customElements.define("schema-form",K);const Ee={type:"object",required:["username","email"],properties:{username:{type:"string",title:"Nome Utente",minLength:3,maxLength:20},email:{type:"string",title:"Email",format:"email"},ruolo:{type:"string",title:"Ruolo",enum:["admin","user","guest"],default:"user"},eta:{type:"integer",title:"Età",minimum:0,maximum:150},accountAttivo:{type:"boolean",title:"Account Attivo",default:!0},via:{type:"object",title:"Via",properties:{nome:{type:"string",title:"Nome"},numero:{type:"integer",title:"Numero Civico",minimum:1}}},tags:{type:"array",title:"Tag",items:{type:"string"},minItems:1,maxItems:5}}},we=document.getElementById("editor"),ie=document.getElementById("form-preview"),Ye=document.getElementById("output");we.value=JSON.stringify(Ee,null,2);ie.schema=Ee;we.addEventListener("input",r=>{try{const e=JSON.parse(r.target.value);ie.schema=e}catch{}});ie.addEventListener("form-changed",r=>{Ye.textContent=JSON.stringify(r.detail.value,null,2)});
