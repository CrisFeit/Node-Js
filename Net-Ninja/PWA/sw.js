const staticCacheName = 'assets-v1.0.4';
const dynamicCacheName = 'dynamic-v1.0.4'
const assets = [
  '/',
  '/index.html',
  '/js/app.js',
  '/js/ui.js',
  '/js/materialize.min.js',
  '/css/styles.css',
  '/css/materialize.min.css',
  '/img/dish.png',
  '/pages/fallback.html',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
];

// install event
self.addEventListener('install', async evt => {
  evt.waitUntil(await caches.open(staticCacheName).cache.addAll(assets));
});

// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil( 
      caches.keys().then(keys =>{
        console.log(keys); 
        return Promise.all(keys
          .filter(key => key !== staticCacheName && key !== dynamicCacheName)
          .map(key => caches.delete(key))
          )
      })
  )
});

// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url , fetchRes.clone())
          return fetchRes
        })
      })
    }).catch(()=> caches.match('/pages/fallback.html'))
  )
});