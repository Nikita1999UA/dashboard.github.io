!function(){"use strict";if("undefined"!=typeof window&&window.addEventListener){var e,t,n=Object.create(null),o=function(){clearTimeout(t),t=setTimeout(e,100)},i=function(){},r=function(){var e;window.addEventListener("resize",o,!1),window.addEventListener("orientationchange",o,!1),window.MutationObserver?(e=new MutationObserver(o),e.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),i=function(){try{e.disconnect(),window.removeEventListener("resize",o,!1),window.removeEventListener("orientationchange",o,!1)}catch(t){}}):(document.documentElement.addEventListener("DOMSubtreeModified",o,!1),i=function(){document.documentElement.removeEventListener("DOMSubtreeModified",o,!1),window.removeEventListener("resize",o,!1),window.removeEventListener("orientationchange",o,!1)})},u=function(e){function t(e){var t;return void 0!==e.protocol?t=e:(t=document.createElement("a"),t.href=e),t.protocol.replace(/:/g,"")+t.host}var n,o,i;return window.XMLHttpRequest&&(n=new XMLHttpRequest,o=t(location),i=t(e),n=void 0===n.withCredentials&&""!==i&&i!==o?XDomainRequest||void 0:XMLHttpRequest),n},d="http://www.w3.org/1999/xlink";e=function(){function e(){L-=1,0===L&&(i(),r())}function t(e){return function(){n[e.base]!==!0&&(e.useEl.setAttributeNS(d,"xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function o(t){return function(){var n,o=document.body,i=document.createElement("x");t.onload=null,i.innerHTML=t.responseText,n=i.getElementsByTagName("svg")[0],n&&(n.setAttribute("aria-hidden","true"),n.style.position="absolute",n.style.width=0,n.style.height=0,n.style.overflow="hidden",o.insertBefore(n,o.firstChild)),e()}}function s(t){return function(){t.onerror=null,t.ontimeout=null,e()}}var a,l,c,h,m,f,v,w,E,b,g="",L=0;for(i(),E=document.getElementsByTagName("use"),m=0;m<E.length;m+=1){try{l=E[m].getBoundingClientRect()}catch(p){l=!1}h=E[m].getAttribute("href")||E[m].getAttributeNS(d,"href")||E[m].getAttribute("xlink:href"),w=h&&h.split?h.split("#"):["",""],a=w[0],c=w[1],f=l&&0===l.left&&0===l.right&&0===l.top&&0===l.bottom,l&&0===l.width&&0===l.height&&!f?(g&&!a.length&&c&&!document.getElementById(c)&&(a=g),E[m].hasAttribute("href")&&E[m].setAttributeNS(d,"xlink:href",h),a.length&&(b=n[a],b!==!0&&setTimeout(t({useEl:E[m],base:a,hash:c}),0),void 0===b&&(v=u(a),void 0!==v&&(b=new v,n[a]=b,b.onload=o(b),b.onerror=s(b),b.ontimeout=s(b),b.open("GET",a),b.send(),L+=1)))):f?a.length&&n[a]&&setTimeout(t({useEl:E[m],base:a,hash:c}),0):void 0===n[a]?n[a]=!0:n[a].onload&&(n[a].abort(),delete n[a].onload,n[a]=!0)}E="",L+=1,e()};var s;s=function(){window.removeEventListener("load",s,!1),t=setTimeout(e,0)},"complete"!==document.readyState?window.addEventListener("load",s,!1):s()}}();