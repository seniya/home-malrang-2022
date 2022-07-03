---
emoji: 🧢
title: React. Firebase 연동 예제
subtitle: React.js 환경 내에서 redux 와 redux-saga 이용 방법 연구
date: '2019-02-19 00:00:00'
author: malrang
tags: React
categories: 블로그
comments: true
---

React.js 환경 내에서 **redux** 와 **redux-saga**를 이용한 구성 방법을 설명한다.
또한 **Firebase** 를 이용하여 간단한 Backend 시스템을 구축하여 연동한다.

## Sample image

![enter image description here](https://raw.githubusercontent.com/seniya/firebase-example-1/master/src/assets/firebase-example-1.PNG)

## Redux

**action** : 모델의 행위를 정의.
**reducer** : 행위에 대한 응답으로 **store** 변경 반환.

- **index.js** 에서 **stroe** 정의 및 주입 (react-redux 모듈 이용)
- 비동기 로직 처리에 대한 솔루션 없음

## Redux-saga

**Redux** - **action** 이 발생하면 **reducer** 로 가기전에 정의한 로직을 처리
완료 후 **reducer** 에게 해당 **action** 을 반환

## Firebase

클라우드 데이터베이스 서비스 및 기능 제공

- **firebase** javascript 모듈 이용. (서비스 인증 및 통신, 기능 역할)

> BaaS(Backend as a Service) 혹은 PaaS(Platform as a Service)는 작업 시간을 단축하기 위해 도입됐지만 실제로 서버 개발 인력을 없애더라도 누군가는 서버를 담당해야 하므로 프론트엔드 개발자들이 서버를 담당해야 하는 것이 현실입니다. 물론 AWS 등이 좋은 서비스를 많이 제공하고는 있지만 전문적인 지식과 경험을 가진 개발자가 필요한 것은 마찬가지이기 때문입니다. 물론 클라이언트 개발자의 역량을 넓힐 수 있다는 점에서는 좋을 것으로 생각합니다.(인용)

## 고민해볼 문제

- **Redux**를 도입함으로써 기존 화면 중심 개발에서 모델의 행위 중심 개발로 전환
- 이로 인한 프로젝트 폴더 구성 및 컨포넌트 추상화 변경.
- 간단한 예제 어플리케이션을 만드는 비용 증가. ( 대안 **context** 이용?)
- **Redux-Saga** 비동기 예외 처리 고민.
- **container** 기법의 좋은 적용 방법.

## 폴더 구조

```
project
│ README.md
└───public
└───src
|   │ index.js
|   │ App.js
│   └───components
│   └───pages
│   └───service
|      └───actions
|      └───reducers
|      └───sagas
```

## Available Scripts

1. npm install
2. yarn start

## Learn More

- Firebase 공식 사이트 : [Google Firebase](https://console.firebase.google.com/)
- Redux 참고 : [Redux 예제로 살펴보기](https://beomy.tistory.com/35)
- Redux-Saga 참고 : [redux-saga로 비동기처리와 분투하다](https://github.com/reactkr/learn-react-in-korean/blob/master/translated/deal-with-async-process-by-redux-saga.md)
- Redux-Saga 참고 : [React Redux Saga example app](https://medium.com/@lavitr01051977/make-your-first-call-to-api-using-redux-saga-15aa995df5b6)

```toc

```
