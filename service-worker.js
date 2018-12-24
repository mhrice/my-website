"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","8d181378f40469efdf96afb2fa19f300"],["/static/css/main.c990f828.css","c9b765e29b8fabd72cfe591e8b7d4e62"],["/static/js/main.be2a5d59.js","0f95453bca85e8172c404a667b305f90"],["/static/media/Background.c58e9d50.jpg","c58e9d50124ff3a62e776b56f68d97c2"],["/static/media/UCSD-logo.2af9b558.png","2af9b558ba3256b86d0558f8646fdbfa"],["/static/media/back-jam.ed5a72bf.png","ed5a72bf9d3122b7ccc720020b6e659a"],["/static/media/books.17b4426f.svg","17b4426fb7fc08ad228522b5e5f5b293"],["/static/media/code.5118310d.svg","5118310da9aeb98ecfe0745b24372f9c"],["/static/media/dsp.34894cea.svg","34894ceaef70d5f141fded9b4096c8ba"],["/static/media/employee.9becbe97.svg","9becbe97acf988cf8310ff4d42740e97"],["/static/media/facebook_prof_pic.de9d8f7e.png","de9d8f7e7d2a4c1402bf11c6b85ed29f"],["/static/media/heart.f66d92cc.svg","f66d92cc5fd68e050db3fb19eb7c315c"],["/static/media/left-icon.1304fdac.svg","1304fdacd75b35cdbe8ceef135c5d1ce"],["/static/media/mixer.c382c88a.svg","c382c88a5ad3bd798747e2a9bdb3cb4f"],["/static/media/my-logo.d8861f86.png","d8861f86ce7ccb27ca7739ac176cad0a"],["/static/media/right-icon.ce0942a5.svg","ce0942a5fb2f83517a4b7fb60093aebb"],["/static/media/rooftops.3e318af6.jpg","3e318af639028901a3c895424a173bd5"],["/static/media/spectrogram.99f717bb.png","99f717bb32e3cfc567a82ce5a4e3e73c"],["/static/media/sup.79375b89.svg","79375b89518f9408e3eea5cb4315bb87"],["/static/media/todo-app.924920ad.png","924920adb622d4852c70b76f683927d4"],["/static/media/tower.4f3ed096.png","4f3ed096c5d4369f394b035fc62eb611"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});