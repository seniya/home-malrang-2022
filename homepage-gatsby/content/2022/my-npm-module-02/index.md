---
emoji: ๐ผ
title: ๋๋ง์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ง๋ค๊ธฐ - 02.๋ฐฐํฌํ๊ธฐ(๊ธฐ๋ณธ) 
subtitle: ๋ฐฐํฌํ์ผ๋ก ๋ง๋ค๊ธฐ
date: '2022-07-16 00:00:00'
author: malrang
tags: javascript
categories: ๋ธ๋ก๊ทธ
comments: true
---

## ์ฐ๊ด ๊ฒ์๊ธ  

| ๋จ๊ณ | ์ ๋ชฉ |
|---|:---|
| `01.์์ํ๊ธฐ` | [๋๋ง์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ง๋ค๊ธฐ](/2022/my-npm-module-01/) |
| `02.๋ฐฐํฌํ๊ธฐ(๊ธฐ๋ณธ)` | [๋๋ง์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ง๋ค๊ธฐ](/2022/my-npm-module-02/) `<- ํ์ฌ๊ธ` |
| `03.๋ฐฐํฌํ๊ธฐ(๋ฒ๋ค๋ฌ)` | [๋๋ง์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ง๋ค๊ธฐ](/2022/my-npm-module-03/) |

<br />

---

<br />

## ์์ ์  ์ค๋น๋ฌผ

- node ํ๊ฒฝ ๋ฐ ์ธํฐ๋ท ํ๊ฒฝ
- Visual Studio Code
- Javasciprt ์ ํ์ง์
- node ๋ฐ npm ์ ํ์ง์

<br />

## 1. ์์ํ๊ธฐ

์ด์ ์ ๋ง๋ค์ด ๋ณธ **๊ณ ์์ด-๋ช์ธ-๋ผ์ด๋ธ๋ฌ๋ฆฌ**( [๋๋ง์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ง๋ค๊ธฐ](/2022/my-npm-module-01/) ) ๋ฅผ ๋ค๋ฅธ ์น๊ตฌ๋ค์ด ์ด์ฉํ๊ฒ ํ๋ ค๋ฉด ์ด๋ป๊ฒ ํด์ผ ํ ๊น์

### 1.1 ๊ฐ๋จํ ๋ฐฉ๋ฒ `**`

์์ฑํ ์ฝ๋๋ฉ์ด๋ฆฌ๋ฅผ `zip` ํ์ผ๋ก ์์ถํ๊ณ  ์น๊ตฌ๋ค์๊ฒ   

1. ํ์ผ์ ์ ๋ฌ
2. ํ์ํ ๋ถ๋ถ์ ์ ๋นํ ์นดํผ/๋ณต์ฌ ํ์ฌ ์ฌ์ฉํ  ์ ์๋๋ก ์ฌ์ฉ๋ฒ์ ์ ๋ฌ  

์ด๋ ๊ฒ ํ๋ฉด ๋ ๊ฒ ๊ฐ์ต๋๋ค.   
ํ์ฌ ๋ฌธ์์์ ์งํํด ๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค.


### 1.2 ์ธ๋ จ๋ ๋ฐฉ๋ฒ

`node_module` ํด๋ ์์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ํํ๋ก ๋ค์ด๊ฐ ์ ์๋๋ก ๋ง๋ค์ด์ ์กฐ๊ธ ๋ ํธ๋ฆฌํ๊ฒ ์ฌ์ฉํ๋๋ก ์๋ดํฉ๋๋ค.  
๋ค์ ๋ฌธ์์์ ์งํํด ๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค.

<br />

## 2. ๋ฐฐํฌ์ฉ ํ๋ก์ ํธ ๋ง๋ค๊ธฐ

- old school ๋ฒ์ ์ผ๋ก ๋ง๋ค์ด ๋ณด๊ฒ ์ต๋๋ค.


### 2.1 ํ๋ก์ ํธ ์์ฑ

```bash
# [shell]

mkdir app_step2  # old school ๋ฒ์  ์ฑ ๋๋ ํ ๋ฆฌ
cd app_step2 # ์ด๋

# ํด๋น ๊ณต๊ฐ์ ๋ธ๋ํจํค์ง๋งค๋์  ์ด๊ธฐํ (package.json ์์ฑ)
# ํน๋ณํ ์ค์  ์์ด ์ํฐ ์น๋ฉด์ ์งํ ์๋ฃํ ๋ชจ์ต
npm init

# public ๋๋ ํ ๋ฆฌ ์์ฑ
mkdir public

# src ๋๋ ํ ๋ฆฌ ์์ฑ
mkdir src
```

### 2.2 ํ๋ก์ ํธ ํ์ผ ์์ฑ

<img src="./img/project-files.png">

- public ํด๋๋ฅผ ์์ฑํฉ๋๋ค.
  - `index.html` ํ์ผ์ ์์ฑํฉ๋๋ค.
  - `index.html` ์ **์๋๋ฐฉ**์ด ์์ฑํ๋ ํ์ด์ง๋ผ๊ณ  ๊ฐ์ ํฉ๋๋ค.

- src ํด๋๋ฅผ ์์ฑํฉ๋๋ค.
  - index.js, style.css ํ์ผ์ ์์ฑํฉ๋๋ค.
  - `src` ํด๋ ์ดํ์ ํ์ผ๋ค์ ๋ด๊ฐ **์๋๋ฐฉ**์๊ฒ ์ ๋ฌํด์ฃผ๋ **๋ผ์ด๋ธ๋ฌ๋ฆฌ**๋ผ๊ณ  ๊ฐ์ ํฉ๋๋ค. 

<br />

### 2.3 ํ์ผ ์์ฑ - index.html

```html
<!--
  [html] public/index.html
--> 

<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Wise Cat Saying</title>
  <link rel="stylesheet" href="../src/style.css">
  <script type="module" src="../src/wiseCatSaying.js"></script>
  <style>
    *, *:before, *:after {
      box-sizing: border-box;
    }
    body {
      background: linear-gradient(to bottom, rgb(140, 122, 122) 0%, rgb(175, 135, 124) 65%, rgb(175, 135, 124) 100%) fixed;
      background-size: cover;
      font: 14px/20px "Lato", Arial, sans-serif;
      color: #9E9E9E;
      margin-top: 30px;
    }
  </style>
</head>

<body>
  <div class="wcs-container" id="wcs-container"></div> 
</body>
</html>
```

### 2.4 ํ์ผ ์์ฑ - style.css

``` css
/*
 [css] src/style.css
*/
.wcs-container {
  margin: auto;
  width: 600px;
  text-align: center;
}
.wcs-container .wcs-card {
  background: white;
  width: 300px;
  display: inline-block;
  margin: auto;
  border-radius: 14px;
  position: relative;
  text-align: center;
  box-shadow: -1px 15px 30px -12px black;
  z-index: 9999;
}
.wcs-container .wcs-card .wcs-card__image {
  position: relative;
  height: 230px;
  margin-bottom: 35px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}
.wcs-container .wcs-card .wcs-card__image img {
  position: absolute;
  height: 250px;
  width: 300px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}
.wcs-container .wcs-card .wcs-card__name {
  font-size: 26px;
  color: black;
  font-weight: 900;
  margin-bottom: 5px;
}
.wcs-container .wcs-card .wcs-card__contents {
  padding: 20px;
  margin-bottom: 10px;
}
```

### 2.5 ํ์ผ ์์ฑ - wiseCatSaying.js

```js
// [js] src/wiseCatSaying.js
const wiseword = [
  {
    key: 1,
    contents: '์ด์ ๋ง์์ ์ค๋น๊ฐ ์๋ ์ฌ๋์๊ฒ๋ง ๋ฏธ์๋ฅผ ์ง๋๋ค.',
    name: 'ํ์คํด๋ฅด'    
  },
  {
    key: 2,
    contents: '์ฌ๋์ ์ ๋ขฐ์ ํ์๋ค, ๋ฏฟ์ผ๋๊น ๋ฏฟ๋ ๊ฒ์ด๋ค, ์ฌ๋ํ๋๊น ์ฌ๋ํ๋ ๊ฒ์ด๋ค',
    name: '๋ก๋ง๋กค๋'    
  },
  {
    key: 3,
    contents: '์๋ํจ์๋ ์ ๋น์ฑ์ด ํ์ํ๋ค, ๋๋ฌด ์๋ฉด ์ฌ๋๋ค์ ์กด๊ฒฝํ์ง ์๋๋ค',
    name: '๋๊ณจ',
  },
  {
    key: 4,
    contents: '์๊ตฌ๋ฐ๊ธฐ ์ ์ ๋จผ์  ์ถฉ๊ณ ํ์ง ๋ง๋ผ',
    name: '์๋ผ์ค๋ฌด์ค',
  },
  {
    key: 5,
    contents: '์ฐ์ฃผ๋ฅผ ํ ์ฌ๋์ผ๋ก ์ถ์์ํค๊ณ  ๊ทธ ์ฌ๋์ ์ ์ผ๋ก ํ๋์ํค๋ ๊ฒ์ด ๋ฐ๋ก ์ฌ๋์ด๋ค',
    name: '๋นํ ๋ฅด ์๊ณ ',
  },
  ...
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomWord = wiseword[getRandomInt(0,24)]

document.querySelector('#wcs-container').insertAdjacentHTML(
  'afterbegin',
  `
  <div class="wcs-card">
    <div class="wcs-card__image">
      <img 
        src="https://thecatapi.com/api/images/get?format=src&type=gif" 
        style="display: block;">
    </div>          
    <div id="wise_name" class="wcs-card__name">${randomWord.name}</div>
    <div id="wise_contents" class="wcs-card__contents">${randomWord.contents}</div>
  </div>
  `
);

```

## 3. ์ฝ๋ ์ค๋ช

### 3.1 markup ์ค๋ช

```html
<!--
  [html] public/index.html
--> 
  ...
  <link rel="stylesheet" href="../src/style.css">
  <script type="module" src="../src/wiseCatSaying.js"></script>
  ...

  <div class="wcs-container" id="wcs-container"></div> 
  ...
```
- ์๋๋ฐฉ์๊ฒ **๊ณ ์์ด-๋ช์ธ-๋ผ์ด๋ธ๋ฌ๋ฆฌ** ๋ฅผ ์ฌ์ฉํ๋ ค๋ฉด ์ ๋ฌ๋ ํ์ผ๊ณผ ํจ๊ป ์์ ์ฝ๋ ์ธ์ค์ ์ถ๊ฐํ๋ผ๊ณ  ์ด์ผ๊ธฐ ํฉ๋๋ค. 
1. css๋ฅผ ๋ถ๋ฌ๋ค์ด๊ณ , 
2. jsํ์ผ์ ๋ถ๋ฌ๋ค์ด๊ณ , 
3. ํ์ํ๊ณ ์ ํ๋ ๋งํฌ์ ์ด๋์๊ฐ `<div class="wcs-container" id="wcs-container"></div>` ์ฝ๋๋ฅผ ์ถ๊ฐํ๋ผ๊ณ  ์ด์ผ๊ธฐ ํฉ๋๋ค.


### 3.2 javascript ์ฝ๋

```js
// [js] src/wiseCatSaying.js
const wiseword = [
  {
    key: 1,
    contents: '์ด์ ๋ง์์ ์ค๋น๊ฐ ์๋ ์ฌ๋์๊ฒ๋ง ๋ฏธ์๋ฅผ ์ง๋๋ค.',
    name: 'ํ์คํด๋ฅด'    
  },
  ...
]
...
```

- ์ฌ์ฉ๋ฒ์ ํธ๋ฆฌํ๊ฒ ํ๊ณ ์ js ํ์ผ์ ๊ฐฏ์๋ฅผ ์ค์ด๊ธฐ ์ํ์ฌ ๊ธฐ์กด **๋ช์ธ์ฌ์ (wiseword.js)** ์ `wiseCatSaying.js` ํ์ผ์ ํฌํจ์ํต๋๋ค.  

```js
// [js] src/wiseCatSaying.js
...
document.querySelector('#wcs-container').insertAdjacentHTML(
  'afterbegin',
  `
  <div class="wcs-card">
    <div class="wcs-card__image">
      <img 
        src="https://thecatapi.com/api/images/get?format=src&type=gif" 
        style="display: block;">
    </div>          
    <div id="wise_name" class="wcs-card__name">${randomWord.name}</div>
    <div id="wise_contents" class="wcs-card__contents">${randomWord.contents}</div>
  </div>
  `
);
...
```

- ์ฌ์ฉ๋ฒ์ ํธ๋ฆฌํ๊ฒ ํ๊ณ ์ js ์คํฌ๋ฆฝํธ์์ ํ์ํ ๋งํฌ์์ ์์ฑํ๋๋ก ํด๋น ๊ตฌ๋ฌธ์ ์ถ๊ฐํฉ๋๋ค.  
- randomWord ๊ด๋ จ ๋ด์ฉ์ ์ค๋ช ์๋ตํฉ๋๋ค.


## 4. app ์คํ

- vscode ์ [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) ๋ฅผ ์ด์ฉํ์ฌ ํ์ธํด ๋ณผ์ ์์ต๋๋ค. <- ์๋๋ฐฉ์ ์์ฅ์๋๋ค.

<img src="./img/people-see.png">

- ๋ค์๊ณผ ๊ฐ์ด ์คํ๋ฉ๋๋ค.

<br />

---

<br />

## 5. ๋ค์๋จ๊ณ๋ก

- ๋ฉ์ง๊ฒ ๋์ค๋ฉด ์ฑ๊ณต์๋๋ค.  

1. ์ด์  `src` ํด๋๋ฅผ ์์ถํด์ ์น๊ตฌ๋ค์๊ฒ ์ ๋ฌํ๊ณ  ์ฌ์ฉ๋ฒ์ ์ค๋ชํด์ฃผ๋ฉด ๋ฉ๋๋ค.  
2. **module** ๋ฐฉ์์ ์ด์ฉํ๊ธฐ ๋๋ฌธ์ ์๋๋ฐฉ์ด ์์ฑํ ์ฝ๋์ ์ฐ๋ฆฌ๊ฐ ๋ง๋ค์ด ๋์ `wiseword`, `randomWord` ์ค๋ธ์ ํธ์ **scope**๊ฐ ์๋ก ์ค์ผ๋์ง ์์ต๋๋ค.
3. ํ์ง๋ง ์ ๋ฌ์ด ๋ฒ๊ฑฐ๋กญ๊ณ  ์ค๋ช ์ญ์ ๋ณต์กํฉ๋๋ค.
    > css ํ์ผ์ js ์ฝ๋ ์์ผ๋ก ๋ฃ์ด์ ํ์ผ์ ๊ฐฏ์๋ฅผ ์ค์ผ์๋ ์์ต๋๋ค.  
4. ์กฐ๊ธ ๋ ๋์ ๋ฐฉ๋ฒ์ ์ด๋ป๊ฒ ํ ๊น์

```toc

```
