const btf={debounce:function(o,i,r){let a;return function(){const e=this,t=arguments;var n=r&&!a;clearTimeout(a),a=setTimeout(function(){a=null,r||o.apply(e,t)},i),n&&o.apply(e,t)}},throttle:function(n,o,i){let r,a,s,l=0;i=i||{};function d(){l=!1===i.leading?0:(new Date).getTime(),r=null,n.apply(a,s),r||(a=s=null)}return function(){var e=(new Date).getTime(),t=(l||!1!==i.leading||(l=e),o-(e-l));a=this,s=arguments,t<=0||o<t?(r&&(clearTimeout(r),r=null),l=e,n.apply(a,s),r||(a=s=null)):r||!1===i.trailing||(r=setTimeout(d,t))}},sidebarPaddingR:()=>{var e=window.innerWidth,t=document.body.clientWidth;e!==t&&(document.body.style.paddingRight=e-t+"px")},snackbarShow:(e,t,n)=>{var t=void 0!==t&&t,n=void 0!==n?n:2e3,o=GLOBAL_CONFIG.Snackbar.position,i="light"===document.documentElement.getAttribute("data-theme")?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark;Snackbar.show({text:e,backgroundColor:i,showAction:t,duration:n,pos:o})},initJustifiedGallery:function(e){(e=e instanceof jQuery?e:$(e)).each(function(e,t){$(this).is(":visible")&&$(this).justifiedGallery({rowHeight:220,margins:4})})},diffDate:(e,t=!1)=>{var n,o,i,r=new Date,e=new Date(e),r=r.getTime()-e.getTime(),a=864e5;let s;return s=t?(t=r/a,o=r/36e5,i=r/6e4,12<(n=r/2592e6)?e.toLocaleDateString().replace(/\//g,"-"):1<=n?parseInt(n)+" "+GLOBAL_CONFIG.date_suffix.month:1<=t?parseInt(t)+" "+GLOBAL_CONFIG.date_suffix.day:1<=o?parseInt(o)+" "+GLOBAL_CONFIG.date_suffix.hour:1<=i?parseInt(i)+" "+GLOBAL_CONFIG.date_suffix.min:GLOBAL_CONFIG.date_suffix.just):parseInt(r/a)},loadComment:(e,t)=>{if("IntersectionObserver"in window){const n=new IntersectionObserver(e=>{e[0].isIntersecting&&(t(),n.disconnect())},{threshold:[0]});n.observe(e)}else t()},scrollToDest:(i,r)=>{if(!(i<0||r<0)){const a=window.scrollY||window.screenTop;if(a>i&&(i-=70),"CSS"in window&&CSS.supports("scroll-behavior","smooth"))window.scrollTo({top:i,behavior:"smooth"});else{let o=null;r=r||500,window.requestAnimationFrame(function e(t){var n;o=o||t,a<i?(n=t-o,window.scrollTo(0,(i-a)*n/r+a),n<r?window.requestAnimationFrame(e):window.scrollTo(0,i)):(n=t-o,window.scrollTo(0,a-(a-i)*n/r),n<r?window.requestAnimationFrame(e):window.scrollTo(0,i))})}}},fadeIn:(e,t)=>{e.style.cssText=`display:block;animation: to_show ${t}s`},fadeOut:(t,e)=>{t.addEventListener("animationend",function e(){t.style.cssText="display: none; animation: '' ",t.removeEventListener("animationend",e)}),t.style.animation=`to_hide ${e}s`},getParents:(e,t)=>{for(;e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},siblings:(t,n)=>[...t.parentNode.children].filter(e=>n?e!==t&&e.matches(n):e!==t),wrap:(e,t,n)=>{var o,i,r=document.createElement(t);for([o,i]of Object.entries(n))r.setAttribute(o,i);e.parentNode.insertBefore(r,e),r.appendChild(e)},unwrap:e=>{var t=e.parentNode;t!==document.body&&(t.parentNode.insertBefore(e,t),t.parentNode.removeChild(t))},isJqueryLoad:e=>{"undefined"==typeof jQuery?getScript(GLOBAL_CONFIG.source.jQuery).then(e):e()},isHidden:e=>0===e.offsetHeight&&0===e.offsetWidth,getEleTop:e=>{let t=e.offsetTop,n=e.offsetParent;for(;null!==n;)t+=n.offsetTop,n=n.offsetParent;return t}};