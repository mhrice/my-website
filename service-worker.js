"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","b0132fcd190b999b45dcb5f28a96c122"],["/static/css/main.f32b895c.css","bb2752e1378209b532f0a08696670eec"],["/static/js/main.4cbde40b.js","6b2b7a9be9f5b4deeb6dccc9ff02d3f8"],["/static/media/Background.c58e9d50.jpg","c58e9d50124ff3a62e776b56f68d97c2"],["/static/media/UCSD-logo.2af9b558.png","2af9b558ba3256b86d0558f8646fdbfa"],["/static/media/back-jam.ed5a72bf.png","ed5a72bf9d3122b7ccc720020b6e659a"],["/static/media/books.17b4426f.svg","17b4426fb7fc08ad228522b5e5f5b293"],["/static/media/employee.9becbe97.svg","9becbe97acf988cf8310ff4d42740e97"],["/static/media/heart.f66d92cc.svg","f66d92cc5fd68e050db3fb19eb7c315c"],["/static/media/left-icon.1304fdac.svg","1304fdacd75b35cdbe8ceef135c5d1ce"],["/static/media/my-logo.d8861f86.png","d8861f86ce7ccb27ca7739ac176cad0a"],["/static/media/right-icon.ce0942a5.svg","ce0942a5fb2f83517a4b7fb60093aebb"],["/static/media/rooftops.3e318af6.jpg","3e318af639028901a3c895424a173bd5"],["/static/media/spectrogram.99f717bb.png","99f717bb32e3cfc567a82ce5a4e3e73c"],["/static/media/sup.79375b89.svg","79375b89518f9408e3eea5cb4315bb87"],["/static/media/todo-app.924920ad.png","924920adb622d4852c70b76f683927d4"],["/static/media/tower.4f3ed096.png","4f3ed096c5d4369f394b035fc62eb611"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});