---
emoji: π§’
title: React. Firebase μ°λ μμ 
subtitle: React.js νκ²½ λ΄μμ redux μ redux-saga μ΄μ© λ°©λ² μ°κ΅¬
date: '2019-02-19 00:00:00'
author: malrang
tags: React
categories: λΈλ‘κ·Έ
comments: true
---

React.js νκ²½ λ΄μμ **redux** μ **redux-saga**λ₯Ό μ΄μ©ν κ΅¬μ± λ°©λ²μ μ€λͺνλ€.
λν **Firebase** λ₯Ό μ΄μ©νμ¬ κ°λ¨ν Backend μμ€νμ κ΅¬μΆνμ¬ μ°λνλ€.

## Sample image

![enter image description here](https://raw.githubusercontent.com/seniya/firebase-example-1/master/src/assets/firebase-example-1.PNG)

## Redux

**action** : λͺ¨λΈμ νμλ₯Ό μ μ.
**reducer** : νμμ λν μλ΅μΌλ‘ **store** λ³κ²½ λ°ν.

- **index.js** μμ **stroe** μ μ λ° μ£Όμ (react-redux λͺ¨λ μ΄μ©)
- λΉλκΈ° λ‘μ§ μ²λ¦¬μ λν μλ£¨μ μμ

## Redux-saga

**Redux** - **action** μ΄ λ°μνλ©΄ **reducer** λ‘ κ°κΈ°μ μ μ μν λ‘μ§μ μ²λ¦¬
μλ£ ν **reducer** μκ² ν΄λΉ **action** μ λ°ν

## Firebase

ν΄λΌμ°λ λ°μ΄ν°λ² μ΄μ€ μλΉμ€ λ° κΈ°λ₯ μ κ³΅

- **firebase** javascript λͺ¨λ μ΄μ©. (μλΉμ€ μΈμ¦ λ° ν΅μ , κΈ°λ₯ μ­ν )

> BaaS(Backend as a Service) νΉμ PaaS(Platform as a Service)λ μμ μκ°μ λ¨μΆνκΈ° μν΄ λμλμ§λ§ μ€μ λ‘ μλ² κ°λ° μΈλ ₯μ μμ λλΌλ λκ΅°κ°λ μλ²λ₯Ό λ΄λΉν΄μΌ νλ―λ‘ νλ‘ νΈμλ κ°λ°μλ€μ΄ μλ²λ₯Ό λ΄λΉν΄μΌ νλ κ²μ΄ νμ€μλλ€. λ¬Όλ‘  AWS λ±μ΄ μ’μ μλΉμ€λ₯Ό λ§μ΄ μ κ³΅νκ³ λ μμ§λ§ μ λ¬Έμ μΈ μ§μκ³Ό κ²½νμ κ°μ§ κ°λ°μκ° νμν κ²μ λ§μ°¬κ°μ§μ΄κΈ° λλ¬Έμλλ€. λ¬Όλ‘  ν΄λΌμ΄μΈνΈ κ°λ°μμ μ­λμ λν μ μλ€λ μ μμλ μ’μ κ²μΌλ‘ μκ°ν©λλ€.(μΈμ©)

## κ³ λ―Όν΄λ³Ό λ¬Έμ 

- **Redux**λ₯Ό λμν¨μΌλ‘μ¨ κΈ°μ‘΄ νλ©΄ μ€μ¬ κ°λ°μμ λͺ¨λΈμ νμ μ€μ¬ κ°λ°λ‘ μ ν
- μ΄λ‘ μΈν νλ‘μ νΈ ν΄λ κ΅¬μ± λ° μ»¨ν¬λνΈ μΆμν λ³κ²½.
- κ°λ¨ν μμ  μ΄νλ¦¬μΌμ΄μμ λ§λλ λΉμ© μ¦κ°. ( λμ **context** μ΄μ©?)
- **Redux-Saga** λΉλκΈ° μμΈ μ²λ¦¬ κ³ λ―Ό.
- **container** κΈ°λ²μ μ’μ μ μ© λ°©λ².

## ν΄λ κ΅¬μ‘°

```
project
β README.md
ββββpublic
ββββsrc
|   β index.js
|   β App.js
β   ββββcomponents
β   ββββpages
β   ββββservice
|      ββββactions
|      ββββreducers
|      ββββsagas
```

## Available Scripts

1. npm install
2. yarn start

## Learn More

- Firebase κ³΅μ μ¬μ΄νΈ : [Google Firebase](https://console.firebase.google.com/)
- Redux μ°Έκ³  : [Redux μμ λ‘ μ΄ν΄λ³΄κΈ°](https://beomy.tistory.com/35)
- Redux-Saga μ°Έκ³  : [redux-sagaλ‘ λΉλκΈ°μ²λ¦¬μ λΆν¬νλ€](https://github.com/reactkr/learn-react-in-korean/blob/master/translated/deal-with-async-process-by-redux-saga.md)
- Redux-Saga μ°Έκ³  : [React Redux Saga example app](https://medium.com/@lavitr01051977/make-your-first-call-to-api-using-redux-saga-15aa995df5b6)

```toc

```
