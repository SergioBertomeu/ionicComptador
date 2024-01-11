import{h as P,j as B,e as O,f as p,k as h,l as F,m as H,o as U}from"./index-930abedd.js";import{K as Y,a as $}from"./keyboard-fedafbf3.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const A=new WeakMap,D=(e,o,t,s=0,n=!1)=>{A.has(e)!==t&&(t?G(e,o,s,n):W(e,o))},q=e=>e===e.getRootNode().activeElement,G=(e,o,t,s=!1)=>{const n=o.parentNode,i=o.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,s&&(i.disabled=!0),n.appendChild(i),A.set(e,i);const a=e.ownerDocument.dir==="rtl"?9999:-9999;e.style.pointerEvents="none",o.style.transform="translate3d(".concat(a,"px,").concat(t,"px,0) scale(0)")},W=(e,o)=>{const t=A.get(e);t&&(A.delete(e),t.remove()),e.style.pointerEvents="",o.style.transform=""},N=50,j=(e,o,t)=>{if(!t||!o)return()=>{};const s=a=>{q(o)&&D(e,o,a)},n=()=>D(e,o,!1),i=()=>s(!0),c=()=>s(!1);return P(t,"ionScrollStart",i),P(t,"ionScrollEnd",c),o.addEventListener("blur",n),()=>{B(t,"ionScrollStart",i),B(t,"ionScrollEnd",c),o.removeEventListener("blur",n)}},I="input, textarea, [no-blur], [contenteditable]",z=()=>{let e=!0,o=!1;const t=document,s=()=>{o=!0},n=()=>{e=!0},i=c=>{if(o){o=!1;return}const a=t.activeElement;if(!a||a.matches(I))return;const f=c.target;f!==a&&(f.matches(I)||f.closest(I)||(e=!1,setTimeout(()=>{e||a.blur()},50)))};return P(t,"ionScrollStart",s),t.addEventListener("focusin",n,!0),t.addEventListener("touchend",i,!1),()=>{B(t,"ionScrollStart",s,!0),t.removeEventListener("focusin",n,!0),t.removeEventListener("touchend",i,!1)}},J=.3,Q=(e,o,t,s)=>{var n;const i=(n=e.closest("ion-item,[ion-item]"))!==null&&n!==void 0?n:e;return V(i.getBoundingClientRect(),o.getBoundingClientRect(),t,s)},V=(e,o,t,s)=>{const n=e.top,i=e.bottom,c=o.top,a=Math.min(o.bottom,s-t),f=c+15,v=a-N-i,d=f-n,l=Math.round(v<0?-v:d>0?-d:0),S=Math.min(l,n-c),T=Math.abs(S)/J,r=Math.min(400,Math.max(150,T));return{scrollAmount:S,scrollDuration:r,scrollPadding:t,inputSafeY:-(n-f)+4}},R="$ionPaddingTimer",M=(e,o,t)=>{const s=e[R];s&&clearTimeout(s),o>0?e.style.setProperty("--keyboard-offset","".concat(o,"px")):e[R]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),t&&t()},120)},_=(e,o,t)=>{const s=()=>{o&&M(o,0,t)};e.addEventListener("focusout",s,{once:!0})};let g=0;const K="data-ionic-skip-scroll-assist",X=(e,o,t,s,n,i,c,a=!1)=>{const f=i&&(c===void 0||c.mode===$.None);let u=!1;const v=h!==void 0?h.innerHeight:0,d=m=>{if(u===!1){u=!0;return}k(e,o,t,s,m.detail.keyboardHeight,f,a,v,!1)},l=()=>{u=!1,h===null||h===void 0||h.removeEventListener("ionKeyboardDidShow",d),e.removeEventListener("focusout",l,!0)},S=async()=>{if(o.hasAttribute(K)){o.removeAttribute(K);return}k(e,o,t,s,n,f,a,v),h===null||h===void 0||h.addEventListener("ionKeyboardDidShow",d),e.addEventListener("focusout",l,!0)};return e.addEventListener("focusin",S,!0),()=>{e.removeEventListener("focusin",S,!0),h===null||h===void 0||h.removeEventListener("ionKeyboardDidShow",d),e.removeEventListener("focusout",l,!0)}},C=e=>{document.activeElement!==e&&(e.setAttribute(K,"true"),e.focus())},k=async(e,o,t,s,n,i,c=!1,a=0,f=!0)=>{if(!t&&!s)return;const u=Q(e,t||s,n,a);if(t&&Math.abs(u.scrollAmount)<4){C(o),i&&t!==null&&(M(t,g),_(o,t,()=>g=0));return}if(D(e,o,!0,u.inputSafeY,c),C(o),F(()=>e.click()),i&&t&&(g=u.scrollPadding,M(t,g)),typeof window<"u"){let v;const d=async()=>{v!==void 0&&clearTimeout(v),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",d),t&&await U(t,0,u.scrollAmount,u.scrollDuration),D(e,o,!1,u.inputSafeY),C(o),i&&_(o,t,()=>g=0)},l=()=>{window.removeEventListener("ionKeyboardDidShow",l),window.addEventListener("ionKeyboardDidShow",d)};if(t){const S=await H(t),m=S.scrollHeight-S.clientHeight;if(f&&u.scrollAmount>m-S.scrollTop){o.type==="password"?(u.scrollAmount+=N,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",d),v=setTimeout(d,1e3);return}}d()}},Z=!0,oe=async(e,o)=>{const t=document,s=o==="ios",n=o==="android",i=e.getNumber("keyboardHeight",290),c=e.getBoolean("scrollAssist",!0),a=e.getBoolean("hideCaretOnScroll",s),f=e.getBoolean("inputBlurring",s),u=e.getBoolean("scrollPadding",!0),v=Array.from(t.querySelectorAll("ion-input, ion-textarea")),d=new WeakMap,l=new WeakMap,S=await Y.getResizeMode(),m=async r=>{await new Promise(b=>O(r,b));const y=r.shadowRoot||r,w=y.querySelector("input")||y.querySelector("textarea"),L=p(r),x=L?null:r.closest("ion-footer");if(!w)return;if(L&&a&&!d.has(r)){const b=j(r,w,L);d.set(r,b)}if(!(w.type==="date"||w.type==="datetime-local")&&(L||x)&&c&&!l.has(r)){const b=X(r,w,L,x,i,u,S,n);l.set(r,b)}},T=r=>{if(a){const y=d.get(r);y&&y(),d.delete(r)}if(c){const y=l.get(r);y&&y(),l.delete(r)}};f&&Z&&z();for(const r of v)m(r);t.addEventListener("ionInputDidLoad",r=>{m(r.detail)}),t.addEventListener("ionInputDidUnload",r=>{T(r.detail)})};export{oe as startInputShims};
