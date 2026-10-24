const C='planner-v3';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./ideas.json','./plans.json'])));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin!==location.origin||e.request.method!=='GET')return;
 const json=u.pathname.endsWith('.json'),req=json?new Request(u.href,{cache:'no-cache'}):e.request,key=json?u.origin+u.pathname:e.request.url;
 e.respondWith(fetch(req).then(r=>{if(r.ok){const cp=r.clone();caches.open(C).then(c=>c.put(key,cp).catch(()=>{}))}return r}).catch(()=>caches.match(key,{ignoreSearch:true})))});
