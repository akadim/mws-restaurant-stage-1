const cacheName = 'restaurant-review-app';

self.addEventListener('install', (evt) => {
    evt.waitUntil(caches.open(cacheName).then( (cache) => {
        return cache.addAll([
           './img/1.jpg',
           './img/2.jpg',
           './img/3.jpg',
           './img/4.jpg',
           './img/5.jpg',
           './img/6.jpg',
           './img/7.jpg',
           './img/8.jpg',
           './img/9.jpg',
           './img/10.jpg',
           './css/styles.css',
           './data/restaurants.json',
           './js/dbhelper.js',
           './js/main.js',
           './js/restaurant_info.js',
           './index.html',
           './restaurant.html'
        ]);
    }));
});

self.addEventListener('activate', (evt) => {
    evt.waitUntil(caches.keys().then( (keyList) => {
         Promise.all( keyList.map( key => {
              if( key !== cacheName) {
                  caches.delete(key);
              }
         }));
    }));
});

self.addEventListener('fetch', (evt) => {
   evt.respondWith( caches.match(evt.request).then( (response) => {
       return response || fetch(evt.request);
   }));
});