var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("iQIUW");const s=document.querySelectorAll("input"),l=document.querySelector("button");document.querySelector("form").style="display:flex";const r=s[0],c=s[1],u=s[2];function d(e,t){const o={delay:e,position:t};console.log(o)}function a(e,t,o,n){if(e+=t,(n+=1)>o)return console.log("End"),i.Notify.success("End",this.notifyOptions),void clearTimeout();const s=Math.random()>.3;new Promise((()=>{setTimeout((()=>{s?(d(e,n),console.log(`✅ Fulfilled promise ${n} in ${e}ms`),i.Notify.success(`✅ Fulfilled promise ${n} in ${e}ms`,this.notifyOptions),console.log("resolve",n)):(d(e,n),console.log(`❌ Rejected promise ${n} in ${e}ms`),i.Notify.failure(`❌ Rejected promise ${n} in ${e}ms`,this.notifyOptions)),a(e,t,o,n)}),e)}))}r.style="display:block",c.style="display:block",u.style="display:block",r.style.marginRight="30px",c.style.marginRight="30px",u.style.marginRight="30px",u.addEventListener("input",(()=>{})),r.addEventListener("input",(()=>{})),c.addEventListener("input",(()=>{})),l.addEventListener("click",(function(e){e.preventDefault(),console.log("start");const t=Number(u.value),o=Number(r.value),n=Number(c.value);a(o,n,t,0),i.Notify.success("start",this.notifyOptions)}));
//# sourceMappingURL=03-promises.1f4c7174.js.map
