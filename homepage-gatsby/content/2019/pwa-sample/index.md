---
layout: post
title: PWA. Progressive Web App sample code - by Google
subtitle: 해당 샘플 코드를 통하여 PWA 개념을 이해한다.
gh-repo: seniya/pwa-sample
gh-badge: [star, fork, follow]
tags: [PWA]
comments: true
---

## Sample Image
![데모 화면](https://raw.githubusercontent.com/seniya/pwa-sample/master/pwa-example-1.PNG)


## Progressive Web App이란

다수의 표준기술모음에 기반을 두는 Web의 장점과 App의 장점을 결합한 Web App 의 컨셉. (구현체가 아님)


## 주요 키워드


- 프로그레시브 : 점진적인 개선을 통해 작성되므로, 어떤 브라우저를 선택하든 상관없이 모든 사용자에게 적합합니다.
- **반응형** : 데스크톱, 모바일, 태블릿 등 모든 폼 팩터에 맞습니다.
- **연결 독립적** : 서비스 워커를 사용하여 오프라인이나 느린 네트워크에서 작동하도록 향상됩니다.
- **앱과 유사** : 앱 셸 모드에서 작성되기 때문에 앱 스타일의 상호작용 및 탐색 기능을 사용자에게 제공합니다.
- 최신 상태 : 서비스 워커 업데이트 프로세스 덕분에 항상 최신 상태로 유지됩니다.
- 안전 : HTTPS를 통해 제공되므로 스누핑이 차단되며, 콘텐츠가 변조되지 않도록 보장합니다.
- 검색 가능 : W3C 매니페스트 및 서비스 워커 등록 범위 덕분에 '애플리케이션'으로 식별되므로, 검색 엔진에서 검색이 가능합니다.
- **재참여 가능** : 푸시 알림과 같은 기능을 통해 쉽게 재참여가 가능합니다.
- 설치 가능 : 앱 스토어에서 씨름할 필요 없이 사용자가 자신에게 가장 유용한 앱을 홈 화면에 유지할 수 있습니다.
- 링크 연결 가능 : URL을 통해 손쉽게 공유할 수 있으며 복잡한 설치 작업이 불필요합니다.

###  * 매니페스트 (manifest.json) 사용

웹 앱 매니페스트는 사이트 북마크를 기기의 홈 화면에 저장하는 기능을 제공
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
![데모 화면](https://raw.githubusercontent.com/seniya/pwa-sample/master/pwa-example-2.PNG)
![데모 화면](https://raw.githubusercontent.com/seniya/pwa-sample/master/pwa-example-3.PNG)
![데모 화면](https://raw.githubusercontent.com/seniya/pwa-sample/master/pwa-example-4.PNG)

###  * 반응형 CSS 사용

```html
<meta  name="viewport"  content="width=device-width, initial-scale=1.0">
```
``` css
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
	...
}
```

### Service Worker 활용

```javascript 
// 서비스 워커가 있는지 확인
if ('serviceWorker'  in  navigator) {
	// 서비스 워커 등록 처리
	navigator.serviceWorker
		.register('./service-worker.js')
		.then(function() { console.log('Service Worker Registered'); });
}
```

```javascript 
// 설치 후 작업
self.addEventListener('install', function(e) {
	console.log('설치 완료',  event);
	...
});
self.addEventListener('activate', function(e) {
	...
});
self.addEventListener('fetch', function(e) {
	...
});
```
![데모 화면](https://raw.githubusercontent.com/seniya/pwa-sample/master/pwa-example-6.png)


## 현실적인 이용 전략

- **PWA**를 구성하는 핵심 기술은 **Service Worker**(오프라인 캐싱) 을 통한 속도 향상.
- 마찬가지로 사용 속도를 더욱 높이려는 여러 기술들이 키워드의 중심이 됨. 
- 리소스의 최소화, Lazy Loding 기법, CRP(critical rendering path) 등등.
- 결국 Web App 의 미래 진행방향을 풀어놓은 컨셉이라 판단됨.


## 고민해볼 문제
- 광범위한 특징과 키워드들이 나열되므로서 정확한 컨셉을 이해하기 어려움.
- 정형화 또는 트렌드한 구현체가 존재하지 않음.(개발자 역량에 크게 영향을 미침)
- 캐싱의 버전관리 실무 적용의 불편함. (운영하는 입장의 불편함 증가.)

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
1.캐시 영역을 정의하고
2.해당 캐시영역에 미리 정의된 캐시될 목록을 넣는다.
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
이전 서비스 워커가 사라지고 새 서비스 워커가 클라이언트를 제어할 수 있는 경우 이 작업이 시작됨. 
데이터베이스 마이그레이션 및 캐시 지우기 같은 작업을 진행함.
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
생성된 요청을 가로채서 서비스 워커 처리. 
즉, 요청을 처리하는 방법과 캐시된 응답의 제공 방법을 결정.
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
![데모 화면](https://raw.githubusercontent.com/seniya/pwa-sample/master/pwa-example-5.PNG)


## 폴더 구조
```
project
│ README.md
│ favicon.ico
│ index.html
│ manifest.json
│ service-worker.js
└───images
└───script 
|   │ App.js
└───styles
|   │ inline.js
```


## Available Scripts

1. uses a local Web-Server.
ex) [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=ko)


## Learn More

- 소스 출처 : [여러분의 첫 Progressive Web App](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=ko)
- 참고 : [2018년과 이후 JavaScript의 동향 - 브라우저 밖의 JavaScript](https://d2.naver.com/helloworld/5644368?utm_source=gaerae.com&utm_campaign=%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%8A%A4%EB%9F%BD%EB%8B%A4&utm_medium=social)
- 참고 : [프로그레시브 웹 앱](https://www.seenbuy.kr/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%A0%88%EC%8B%9C%EB%B8%8C-%EC%9B%B9-%EC%95%B1-pwa-progressive-web-apps/)
