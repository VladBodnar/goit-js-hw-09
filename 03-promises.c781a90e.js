!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i"),l=document.querySelectorAll("input"),c=document.querySelector("button");document.querySelector("form").style="display:flex";var r=l[0],s=l[1],u=l[2];function a(e,n){var o={delay:e,position:n};console.log(o)}function d(e,n,o,t){if(t>o)return console.log("End"),i.Notify.success("End"),void clearTimeout();var l=Math.random()>.3;new Promise((function(){setTimeout((function(){l?(a(e,t),console.log("✅ Fulfilled promise ".concat(t," in ").concat(e,"ms")),i.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(e,"ms")),console.log("resolve",t)):(a(e,t),console.log("❌ Rejected promise ".concat(t," in ").concat(e,"ms")),i.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(e,"ms"))),d(e+=n,n,o,t+=1)}),e)}))}r.style="display:block",s.style="display:block",u.style="display:block",r.style.marginRight="30px",s.style.marginRight="30px",u.style.marginRight="30px",u.addEventListener("input",(function(){})),r.addEventListener("input",(function(){})),s.addEventListener("input",(function(){})),c.addEventListener("click",(function(e){e.preventDefault(),console.log("start");var n=Number(u.value);d(Number(r.value),Number(s.value),n,1),i.Notify.success("start")}))}();
//# sourceMappingURL=03-promises.c781a90e.js.map