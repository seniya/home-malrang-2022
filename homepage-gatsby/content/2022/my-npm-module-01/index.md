---
emoji: ๐ผ
title: ๋๋ง์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ง๋ค๊ธฐ - 01.์์ํ๊ธฐ
subtitle: ๋จผ์  ์๋ฌด๊ฑฐ๋ ๋ง๋ค๊ธฐ
date: '2022-07-16 00:00:00'
author: malrang
tags: javascript
categories: ๋ธ๋ก๊ทธ
comments: true
---

## ์ฐ๊ด ๊ฒ์๊ธ

| ๋จ๊ณ | ์ ๋ชฉ |
|---|:---|
| `01.์์ํ๊ธฐ` | [๋๋ง์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ง๋ค๊ธฐ](/2022/my-npm-module-01/) `<- ํ์ฌ๊ธ` |
| `02.๋ฐฐํฌํ๊ธฐ(๊ธฐ๋ณธ)` | [๋๋ง์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ง๋ค๊ธฐ](/2022/my-npm-module-02/) |
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

๋ด๊ฐ ๋ง๋  ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ๋ค๋ฅธ ์ฌ๋์๊ฒ ๊ณต์ ํ๊ณ  ๋๋ฆฌ ์ฌ์ฉ๋๋๋ก ๋ง๋ค์ด ๋ณผ๋ ค๊ณ  ํฉ๋๋ค.  
๋ค๋ฅธ ๋ด์ฉ์ ์ฐจํ ๋ฏธ๋ฃจ๊ณ  ๋จผ์  ๊ฐ๋จํ ๊ธฐ๋ฅ์ ๊ฐ์ง ์ปจํฌ๋ํธ๋ฅผ ๋ง๋ค์ด ๋ด์๋ค.

### 1.1 ์์ ์ด๋ฏธ์ง

<img src="./img/my-app-image1.png">

- ์นด๋ ๋ชจ์์ ๋ ์ด์์์ ๊ณ ์์ด ๊ทธ๋ฆผ๊ณผ ๋ช์ธ ํ์คํธ๊ฐ ๋์ค๋๋ก ํ ๋ ค๊ณ  ํฉ๋๋ค.
- ๋งค๋ฒ ๋ค๋ฅธ ํ๋ฉด๊ณผ ๋ค๋ฅธ ํ์คํธ๊ฐ ๋์ค๋๋ก ํ ๋ ค๊ณ  ํฉ๋๋ค.

### 1.2 ๋ฆฌ์์ค ๊ตฌํ๊ธฐ

- ์ด๋ฏธ์ง : https://thecatapi.com/
- ๋ช์ธ : ๊ตฌ๊ธ(?)

<br />

## 2. ์ผ๋จ ๋ง๋ค์ด ๋ณด๊ธฐ

- ๋ธ๋ผ์ฐ์ ์์ ๋ฐ๋ก ์คํ๋๋ HTML, CSS, JAVASCRIPT ๋ฐฉ์์ผ๋ก ๋ง๋ค์ด ๋ณด๊ฒ ์ต๋๋ค.
### 2.1 ํ๋ก์ ํธ ์์ฑ

```bash
# [shell]

mkdir myJavascriptLib  # ์ฌ์ฉํ๊ณ ์ ํ๋ ๋๋ ํ ๋ฆฌ
cd myJavascriptLib # ์ด๋

mkdir app_step1  # old school ๋ฒ์  ์ฑ ๋๋ ํ ๋ฆฌ
cd app_step1 # ์ด๋

# ํด๋น ๊ณต๊ฐ์ ๋ธ๋ํจํค์ง๋งค๋์  ์ด๊ธฐํ (package.json ์์ฑ)
# ํน๋ณํ ์ค์  ์์ด ์ํฐ ์น๋ฉด์ ์งํ ์๋ฃํ ๋ชจ์ต
npm init

# src ๋๋ ํ ๋ฆฌ ์์ฑ
mkdir src
cd src
```

### 2.2 ํ๋ก์ ํธ ํ์ผ ์์ฑ

<img src="./img/project-files.png">

- index.html, index.js, style.css, wiseword.js ํ์ผ์ ์์ฑํฉ๋๋ค.

<br />

### 2.3 ํ์ผ ์์ฑ - index.html

```html
<!--
  [html] index.html
--> 

<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Wise Cat Saying</title>
  <link rel="stylesheet" href="style.css">
  <script type="module" src="index.js"></script>
</head>

<body>
  <div class="wcs-container">
    <div class="wcs-card">
      <div class="wcs-card__image">
        <img 
          src="https://thecatapi.com/api/images/get?format=src&type=gif" 
          style="display: block;">
      </div>          
      <div id="wise_name" class="wcs-card__name">wise_name</div>
      <div id="wise_contents" class="wcs-card__contents">
        wise_contents
      </div>
    </div>
  </div> 
</body>
</html>
```

### 2.4 ํ์ผ ์์ฑ - style.css

``` css
/*
 [css] style.css
*/
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

### 2.5 ํ์ผ ์์ฑ - index.js

```js
// [js] index.js
import { wiseword } from './wiseword.js'

console.log('wiseword : ', wiseword);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomWord = wiseword[getRandomInt(0,24)]

document.getElementById('wise_name').textContent = randomWord.name
document.getElementById('wise_contents').textContent = randomWord.contents
```

### 2.6 ํ์ผ ์์ฑ - wiseword.js

```js
// [js] wiseword.js

export const wiseword = [
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


```


## 3. ์ฝ๋ ์ค๋ช

### 3.1 markup ์ค๋ช
```html
<!--
  [source] index.html
--> 
  ...
  <script type="module" src="index.js"></script>
  ...
```
- ์์ ํ ์์  ๋ฐฉ์์ ํ๋ก๊ทธ๋จ์ ์๋๋๋ค. `type="module"` ์ ์ด์ฉํ์ฌ ES2015(ES6) ์ง์ ํ์์ธ **javascript import/export** ๊ธฐ๋ฅ์ ์ฌ์ฉํฉ๋๋ค.
- css๋ ์ค๋ช์ ์๋ตํฉ๋๋ค.

  > ์ฐธ๊ณ  ๋งํฌ  
  >  [MDN - javascript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)  
  >  [MDN - javascript import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)  
  >  [MDN - javascript export](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export)


### 3.2 javascript ์ฝ๋

- ๋จผ์  ๊ตฌ๊ธ๋ง์ ํตํด ์ฐพ์ ๋ช์ธ์ ์ ๋นํ ๊ตฌ์กฐ์ฒด ํ์์ผ๋ก **๋ช์ธ์ฌ์ (wiseword.js)** ์ ๋ง๋ค๊ณ  import ํฉ๋๋ค.

```js
// [source] index.js
import { wiseword } from './wiseword.js'
...
```

- ๋๋ค ํจ์๋ฅผ ๋ง๋ค๊ณ  ๋งค๋ฒ ์๋ก์ด ๋ช์ธ ์ค๋ธ์ ํธ๋ฅผ ์ ํํ๋๋ก ํฉ๋๋ค. 

```js
// [source] index.js
...
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomWord = wiseword[getRandomInt(0,24)]
...
```

- ์ ํ๋ ๋ช์ธ ์ค๋ธ์ ํธ์ ์ด๋ฆ๊ณผ ๋ด์ฉ์ด ๋งํฌ์์ ํ์๋๋๋ก ํฉ๋๋ค.

```js
// [js] index.js
...
document.getElementById('wise_name').textContent = randomWord.name
document.getElementById('wise_contents').textContent = randomWord.contents
```


## 4. app ์คํ

- vscode ์ [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) ๋ฅผ ์ด์ฉํ์ฌ ํ์ธํด ๋ณผ์ ์์ต๋๋ค.

<img src="./img/live-server.png">

<br />

---

<img src="./img/my-app-image2.png">

- ๋ค์๊ณผ ๊ฐ์ด ์คํ๋ฉ๋๋ค.

<br />

## 5. ๋ค์๋จ๊ณ๋ก

- ์ด์  ๋ด๊ฐ ๋ง๋  ์ด ๊ฐ๋จํ ํ๋ก๊ทธ๋จ์ ๋ค๋ฅธ์ฌ๋๋ค๋ ์ฌ์ฉํ๋๋ก ํ๋ ค๋ฉด ์ด๋ป๊ฒ ํด์ผ ํ ์ง ๊ณ ๋ฏผํด ๋ด์๋ค


```toc

```
