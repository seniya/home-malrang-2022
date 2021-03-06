---
emoji: π§’
title: PWA. Progressive Web App sample code - by Google
subtitle: ν΄λΉ μν μ½λλ₯Ό ν΅νμ¬ PWA κ°λμ μ΄ν΄νλ€.
date: '2019-02-18 00:00:00'
author: malrang
tags: PWA
categories: λΈλ‘κ·Έ
comments: true
---

## Sample Image

![λ°λͺ¨ νλ©΄](https://raw.githubusercontent.com/seniya/pwa-sample/master/pwa-example-1.PNG)

## Progressive Web Appμ΄λ

λ€μμ νμ€κΈ°μ λͺ¨μμ κΈ°λ°μ λλ Webμ μ₯μ κ³Ό Appμ μ₯μ μ κ²°ν©ν Web App μ μ»¨μ. (κ΅¬νμ²΄κ° μλ)

## μ£Όμ ν€μλ

- νλ‘κ·Έλ μλΈ : μ μ§μ μΈ κ°μ μ ν΅ν΄ μμ±λλ―λ‘, μ΄λ€ λΈλΌμ°μ λ₯Ό μ ννλ  μκ΄μμ΄ λͺ¨λ  μ¬μ©μμκ² μ ν©ν©λλ€.
- **λ°μν** : λ°μ€ν¬ν±, λͺ¨λ°μΌ, νλΈλ¦Ώ λ± λͺ¨λ  νΌ ν©ν°μ λ§μ΅λλ€.
- **μ°κ²° λλ¦½μ ** : μλΉμ€ μμ»€λ₯Ό μ¬μ©νμ¬ μ€νλΌμΈμ΄λ λλ¦° λ€νΈμν¬μμ μλνλλ‘ ν₯μλ©λλ€.
- **μ±κ³Ό μ μ¬** : μ± μΈ λͺ¨λμμ μμ±λκΈ° λλ¬Έμ μ± μ€νμΌμ μνΈμμ© λ° νμ κΈ°λ₯μ μ¬μ©μμκ² μ κ³΅ν©λλ€.
- μ΅μ  μν : μλΉμ€ μμ»€ μλ°μ΄νΈ νλ‘μΈμ€ λλΆμ ν­μ μ΅μ  μνλ‘ μ μ§λ©λλ€.
- μμ  : HTTPSλ₯Ό ν΅ν΄ μ κ³΅λλ―λ‘ μ€λνμ΄ μ°¨λ¨λλ©°, μ½νμΈ κ° λ³μ‘°λμ§ μλλ‘ λ³΄μ₯ν©λλ€.
- κ²μ κ°λ₯ : W3C λ§€λνμ€νΈ λ° μλΉμ€ μμ»€ λ±λ‘ λ²μ λλΆμ 'μ νλ¦¬μΌμ΄μ'μΌλ‘ μλ³λλ―λ‘, κ²μ μμ§μμ κ²μμ΄ κ°λ₯ν©λλ€.
- **μ¬μ°Έμ¬ κ°λ₯** : νΈμ μλ¦Όκ³Ό κ°μ κΈ°λ₯μ ν΅ν΄ μ½κ² μ¬μ°Έμ¬κ° κ°λ₯ν©λλ€.
- μ€μΉ κ°λ₯ : μ± μ€ν μ΄μμ μ¨λ¦ν  νμ μμ΄ μ¬μ©μκ° μμ μκ² κ°μ₯ μ μ©ν μ±μ ν νλ©΄μ μ μ§ν  μ μμ΅λλ€.
- λ§ν¬ μ°κ²° κ°λ₯ : URLμ ν΅ν΄ μμ½κ² κ³΅μ ν  μ μμΌλ©° λ³΅μ‘ν μ€μΉ μμμ΄ λΆνμν©λλ€.

### \* λ§€λνμ€νΈ (manifest.json) μ¬μ©

μΉ μ± λ§€λνμ€νΈλ μ¬μ΄νΈ λΆλ§ν¬λ₯Ό κΈ°κΈ°μ ν νλ©΄μ μ μ₯νλ κΈ°λ₯μ μ κ³΅

```javascript
{
	"name": "Weather",
	"short_name": "Weather",
	"icons": [
		{
		"src": "images/icons/icon-128x128.png",
		"sizes": "128x128",
		"type": "image/png"
		},{
		"src": "images/icons/icon-144x144.png",
		"sizes": "144x144",
		"type": "image/png"
		}...
	],
	"start_url": "/index.html",
	"display": "standalone",
	"background_color": "#3E4EB8",
	"theme_color": "#2F3BA2"
}
```

![λ°λͺ¨ νλ©΄](https://raw.githubusercontent.com/seniya/pwa-sample/master/pwa-example-2.PNG)
![λ°λͺ¨ νλ©΄](https://raw.githubusercontent.com/seniya/pwa-sample/master/pwa-example-3.PNG)
![λ°λͺ¨ νλ©΄](https://raw.githubusercontent.com/seniya/pwa-sample/master/pwa-example-4.PNG)

### \* λ°μν CSS μ¬μ©

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

```css
body {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  ...;
}
```

### Service Worker νμ©

```javascript
// μλΉμ€ μμ»€κ° μλμ§ νμΈ
if ('serviceWorker' in navigator) {
  // μλΉμ€ μμ»€ λ±λ‘ μ²λ¦¬
  navigator.serviceWorker.register('./service-worker.js').then(function () {
    console.log('Service Worker Registered');
  });
}
```

```javascript
// μ€μΉ ν μμ
self.addEventListener('install', function(e) {
	console.log('μ€μΉ μλ£',  event);
	...
});
self.addEventListener('activate', function(e) {
	...
});
self.addEventListener('fetch', function(e) {
	...
});
```

![λ°λͺ¨ νλ©΄](https://raw.githubusercontent.com/seniya/pwa-sample/master/pwa-example-6.png)

## νμ€μ μΈ μ΄μ© μ λ΅

- **PWA**λ₯Ό κ΅¬μ±νλ ν΅μ¬ κΈ°μ μ **Service Worker**(μ€νλΌμΈ μΊμ±) μ ν΅ν μλ ν₯μ.
- λ§μ°¬κ°μ§λ‘ μ¬μ© μλλ₯Ό λμ± λμ΄λ €λ μ¬λ¬ κΈ°μ λ€μ΄ ν€μλμ μ€μ¬μ΄ λ¨.
- λ¦¬μμ€μ μ΅μν, Lazy Loding κΈ°λ², CRP(critical rendering path) λ±λ±.
- κ²°κ΅­ Web App μ λ―Έλ μ§νλ°©ν₯μ νμ΄λμ μ»¨μμ΄λΌ νλ¨λ¨.

## κ³ λ―Όν΄λ³Ό λ¬Έμ 

- κ΄λ²μν νΉμ§κ³Ό ν€μλλ€μ΄ λμ΄λλ―λ‘μ μ νν μ»¨μμ μ΄ν΄νκΈ° μ΄λ €μ.
- μ νν λλ νΈλ λν κ΅¬νμ²΄κ° μ‘΄μ¬νμ§ μμ.(κ°λ°μ μ­λμ ν¬κ² μν₯μ λ―ΈμΉ¨)
- μΊμ±μ λ²μ κ΄λ¦¬ μ€λ¬΄ μ μ©μ λΆνΈν¨. (μ΄μνλ μμ₯μ λΆνΈν¨ μ¦κ°.)

## CODE

```javascript
var dataCacheName = 'weatherData-v1';
var cacheName = 'weatherPWA-final-1';
var filesToCache = [
  '/',
  '/index.html',
  '/scripts/app.js',
  '/styles/inline.css',
  '/images/clear.png',
  '/images/cloudy-scattered-showers.png',
  ...
];

/*
1.μΊμ μμ­μ μ μνκ³ 
2.ν΄λΉ μΊμμμ­μ λ―Έλ¦¬ μ μλ μΊμλ  λͺ©λ‘μ λ£λλ€.
*/
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

/*
μ΄μ  μλΉμ€ μμ»€κ° μ¬λΌμ§κ³  μ μλΉμ€ μμ»€κ° ν΄λΌμ΄μΈνΈλ₯Ό μ μ΄ν  μ μλ κ²½μ° μ΄ μμμ΄ μμλ¨.
λ°μ΄ν°λ² μ΄μ€ λ§μ΄κ·Έλ μ΄μ λ° μΊμ μ§μ°κΈ° κ°μ μμμ μ§νν¨.
*/
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});
/*
μμ±λ μμ²­μ κ°λ‘μ±μ μλΉμ€ μμ»€ μ²λ¦¬.
μ¦, μμ²­μ μ²λ¦¬νλ λ°©λ²κ³Ό μΊμλ μλ΅μ μ κ³΅ λ°©λ²μ κ²°μ .
*/
self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
  if (e.request.url.indexOf(dataUrl) > -1) {
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});
```

![λ°λͺ¨ νλ©΄](https://raw.githubusercontent.com/seniya/pwa-sample/master/pwa-example-5.PNG)

## ν΄λ κ΅¬μ‘°

```
project
β README.md
β favicon.ico
β index.html
β manifest.json
β service-worker.js
ββββimages
ββββscript
|   β App.js
ββββstyles
|   β inline.js
```

## Available Scripts

1. uses a local Web-Server.
   ex) [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=ko)

## Learn More

- μμ€ μΆμ² : [μ¬λ¬λΆμ μ²« Progressive Web App](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=ko)
- μ°Έκ³  : [2018λκ³Ό μ΄ν JavaScriptμ λν₯ - λΈλΌμ°μ  λ°μ JavaScript](https://d2.naver.com/helloworld/5644368?utm_source=gaerae.com&utm_campaign=%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%8A%A4%EB%9F%BD%EB%8B%A4&utm_medium=social)
- μ°Έκ³  : [νλ‘κ·Έλ μλΈ μΉ μ±](https://www.seenbuy.kr/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%A0%88%EC%8B%9C%EB%B8%8C-%EC%9B%B9-%EC%95%B1-pwa-progressive-web-apps/)

```toc

```
