---
emoji: ๐ผ
title: ๋๋ง์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ง๋ค๊ธฐ - 03.๋ฐฐํฌํ๊ธฐ(๋ฒ๋ค๋ฌ) 
subtitle: ๋ฒ๋ค๋ฌ๋ฅผ ์ด์ฉํ์ฌ ๋ฐฐํฌํ์ผ๋ก ๋ง๋ค๊ธฐ
date: '2022-07-16 00:00:00'
author: malrang
tags: javascript rollup
categories: ๋ธ๋ก๊ทธ
comments: true
---

## ์ฐ๊ด ๊ฒ์๊ธ

| ๋จ๊ณ | ์ ๋ชฉ |
|---|:---|
| `01.์์ํ๊ธฐ` | [๋๋ง์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ง๋ค๊ธฐ](/2022/my-npm-module-01/) |
| `02.๋ฐฐํฌํ๊ธฐ(๊ธฐ๋ณธ)` | [๋๋ง์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ง๋ค๊ธฐ](/2022/my-npm-module-02/)  |
| `03.๋ฐฐํฌํ๊ธฐ(๋ฒ๋ค๋ฌ)` | [๋๋ง์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ง๋ค๊ธฐ](/2022/my-npm-module-03/) `<- ํ์ฌ๊ธ` |

<br />

---

<br />

## ์์ ์  ์ค๋น๋ฌผ

- node ํ๊ฒฝ ๋ฐ ์ธํฐ๋ท ํ๊ฒฝ
- Visual Studio Code
- Javasciprt ์ ํ์ง์
- node ๋ฐ npm ์ ํ์ง์
- ๋ฒ๋ค๋ฌ ์ฌ์ฉ ์ ํ์ง์

<br />

## 1. ์์ํ๊ธฐ

์ด์ ์ ๋ง๋ค์ด ๋ณธ **๊ณ ์์ด-๋ช์ธ-๋ผ์ด๋ธ๋ฌ๋ฆฌ**( [๋๋ง์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ง๋ค๊ธฐ](/2022/my-npm-module-01/) ) ๋ฅผ ๋ค๋ฅธ ์น๊ตฌ๋ค์ด ์ด์ฉํ๊ฒ ํ๋ ค๋ฉด ์ด๋ป๊ฒ ํด์ผ ํ ๊น์

### 1.1 ๊ฐ๋จํ ๋ฐฉ๋ฒ

์์ฑํ ์ฝ๋๋ฉ์ด๋ฆฌ๋ฅผ `zip` ํ์ผ๋ก ์์ถํ๊ณ  ์น๊ตฌ๋ค์๊ฒ   

1. ํ์ผ์ ์ ๋ฌ
2. ํ์ํ ๋ถ๋ถ์ ์ ๋นํ ์นดํผ/๋ณต์ฌ ํ์ฌ ์ฌ์ฉํ  ์ ์๋๋ก ์ฌ์ฉ๋ฒ์ ์ ๋ฌ  

### 1.2 ์ธ๋ จ๋ ๋ฐฉ๋ฒ `**`

`node_module` ํด๋ ์์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ํํ๋ก ๋ค์ด๊ฐ ์ ์๋๋ก ๋ง๋ค์ด์ ์กฐ๊ธ ๋ ํธ๋ฆฌํ๊ฒ ์ฌ์ฉํ๋๋ก ์๋ดํฉ๋๋ค.  
์ด๋ฒ ๋ฌธ์์์ ์งํํด ๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค.


<br />

## 2. ๋ฐฐํฌ์ฉ ํ๋ก์ ํธ ๋ง๋ค๊ธฐ

- [rollupjs](https://rollupjs.org/guide/en/) ๋ก ๋ด๊ฐ ๋ง๋  ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ๋ฒ๋ค๋งํ์ฌ ๋ฐฐํฌํ๋ ๋ฐฉ๋ฒ์ ์งํํฉ๋๋ค.


### 2.1 ํ๋ก์ ํธ ์์ฑ

```bash
# [shell]

mkdir app_step3  # old school ๋ฒ์  ์ฑ ๋๋ ํ ๋ฆฌ
cd app_step3 # ์ด๋

# ํด๋น ๊ณต๊ฐ์ ๋ธ๋ํจํค์ง๋งค๋์  ์ด๊ธฐํ (package.json ์์ฑ)
# ํน๋ณํ ์ค์  ์์ด ์ํฐ ์น๋ฉด์ ์งํ ์๋ฃํ ๋ชจ์ต
npm init

# public ๋๋ ํ ๋ฆฌ ์์ฑ
mkdir public

# src ๋๋ ํ ๋ฆฌ ์์ฑ
mkdir src

# ๋ฒ๋ค๋ฌ ๋ชจ๋ ์ค์น (rollup)
npm install -D rollup
# support css import
npm install -D rollup-plugin-import-css
# A Rollup plugin to convert CommonJS modules to ES6
npm install -D @rollup/plugin-commonjs
# Locate and bundle third-party dependencies in node_modules
npm install -D @rollup/plugin-node-resolve
# Rollup plugin to minify generated es bundle
npm install -D rollup-plugin-terser

```

### 2.2 ํ๋ก์ ํธ ํ์ผ ์์ฑ

- public ํด๋๋ฅผ ์์ฑํฉ๋๋ค.
  - `index.html` ํ์ผ์ ์์ฑํฉ๋๋ค.
  - `index.html` ์ **์๋๋ฐฉ**์ด ์์ฑํ๋ ํ์ด์ง๋ผ๊ณ  ๊ฐ์ ํฉ๋๋ค.

- src ํด๋๋ฅผ ์์ฑํฉ๋๋ค.
  - index.js, style.css, util.js, word.js ํ์ผ์ ์์ฑํฉ๋๋ค.
  - `src` ํด๋ ์ดํ์ ํ์ผ๋ค์ ๋ด๊ฐ **์๋๋ฐฉ**์๊ฒ ์ ๋ฌํด์ฃผ๋ **๋ผ์ด๋ธ๋ฌ๋ฆฌ**๋ก ๋ฒ๋ค๋ง ๋๋ ํ๊ฒ์ผ๋ก ๊ฐ์ ํฉ๋๋ค. 
  - ๋ง์ง๋ง ๋ฒ๋ค๋ง์ ํตํ์ฌ ์ฝ๋๊ฐ ๋ฐฐํฌ๋๋ฏ๋ก ์ด์ ์ ๋ง๋ค์ด ๋์ ์ฝ๋๋ ๋ชจ๋ ์คํ์ผ๋ก ๋ค์ ๋ฆฌํํ ๋ง ํฉ๋๋ค.

- rollup.config.js ํ์ผ์ ์์ฑํฉ๋๋ค.
<br />

### 2.3 ํ์ผ ์์ฑ - style.css

``` css
/*
 [source] src/style.css
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

### 2.4 ํ์ผ ์์ฑ - util.js

```js
// [source] src/util.js
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

### 2.5 ํ์ผ ์์ฑ - word.js

```js
// [source] src/word.js
export const wiseWords = [
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

### 2.6 ํ์ผ ์์ฑ - index.js

```js
// [source] src/index.js

import { getRandomInt } from "./util.js"
import { wiseWords } from "./words.js"
import style_ from "./style.css";

export default class WiseCatSaying {

  style = style_
  words = wiseWords
  targetElement = ''
  imageUrl = 'https://thecatapi.com/api/images/get?format=src&type=gif'

  constructor(targetElement_) {
    console.log('WiseWord module start targetElement: ', targetElement_ )
    // console.log('catStyle_ : ', catStyle_)
    this.targetElement = targetElement_
    this.setStyle()
  }

  setStyle() {
    const styleSheet = document.createElement("style")
    styleSheet.innerText = this.style
    document.head.appendChild(styleSheet)
  }

  getTemplate() {
    const randomWord = this.actionSay()
    return `
      <div class="wcs-container">
        <div class="wcs-card">
          <div class="wcs-card__image">
            <img 
              src="${this.imageUrl}" 
              style="display: block;">
          </div>          
          <div id="wise_name" class="wcs-card__name">${randomWord.name}</div>
          <div id="wise_contents" class="wcs-card__contents">${randomWord.contents}</div>
        </div>
      </div>
    `
  }

  actionSay () {
    const seedNumber = getRandomInt(0,24)
    const randomWord = this.words[seedNumber]
    return randomWord
  }

  render() {
    const template = this.getTemplate()
    document.querySelector(`#${this.targetElement}`).insertAdjacentHTML(
      'afterbegin',
      template
    )
  }
}

```

## 3. ์ฝ๋ ์ค๋ช

### 3.1 javascript ์ฝ๋

```js
// [source] src/index.js
import { getRandomInt } from "./util.js"
import { wiseWords } from "./words.js"
import style_ from "./style.css";
...

```
- ์ฝ๋์ ์ฑ๊ฒฉ์ ๋ฐ๋ผ ํ์ผ์ ๋ถ๋ฆฌํฉ๋๋ค.
- ์ฌ์ฉ๋ฒ์ ํธ๋ฆฌํ๊ฒ ํ๊ณ ์ js ํ์ผ์ ๊ฐฏ์๋ฅผ ์ค์ด๊ธฐ ์ํ์ฌ ๊ธฐ์กด **๋ช์ธ์ฌ์ (word.js)** ๋ฅผ import ํฉ๋๋ค.  
- ์ต์ข ์ฌ์ฉ์๊ฐ ํ์ผ์ ํ๋๋ง import ํ์ฌ ์ฌ์นํ๋๋ก css๋ฅผ import ํฉ๋๋ค. (`rollup-plugin-import-css` ์ ์ง์ ๊ธฐ๋ฅ์๋๋ค.)  


```js
// [source] src/index.js
...
export default class WiseCatSaying {
  style = style_
  words = wiseWords
  targetElement = ''
  imageUrl = 'https://thecatapi.com/api/images/get?format=src&type=gif'

  constructor(targetElement_) {
    console.log('WiseWord module start targetElement: ', targetElement_ )
    // console.log('catStyle_ : ', catStyle_)
    this.targetElement = targetElement_
    this.setStyle()
  }
...
```
- ํธ๋ฆฌํ ์ฝ๋ ์งํ์ ์ํ์ฌ ์ด์  ์ฝ๋๋ฅผ class ์คํ์ผ๋ก ๋ฆฌํํ ๋ง ํฉ๋๋ค.
- ๊ฐ์ฒด ์์ฑ์ ๋๋๋ง๋  ํ๊ฒ์ ๋งํฌ์ ์์ด๋๋ฅผ ๊ฐ์  ํ์ง ์๊ฒ ํ๊ธฐ ์ํ์ฌ ์์ฑ์๊ตฌ๋ฌธ์์ ์ธ์๋ก ๋ฐ์ต๋๋ค.

```js
// [source] src/index.js
...
  actionSay () {
    const seedNumber = getRandomInt(0,24)
    const randomWord = this.words[seedNumber]
    return randomWord
  }
...
```
- ํด๋์ค ์ํ ๋ฉ์๋ ์๋๋ค. ์ฌ์ฉ์๊ฐ ์ ํ์ ์ผ๋ก ์ฌ์ฉํ  ์ ์์ต๋๋ค.

### 3.2 rollup.config.js ์ค๋ช
```js
// [config] rollup.config.js
...
export default {
  input: 'src/index.js',
  output: [
  {
    name: 'WiseCatSaying',
    file: 'dist/main.umd.js',
    format: 'umd',    
  },
  {
    file: 'dist/main.esm.js',
    format: 'esm',    
  }
  ]
  ...
} 
```

1. ๋ฒ๋ค๋ง ์ต์์ ์ ์ํฉ๋๋ค.
2. input๊ณผ output์ด ์ ์ ๋์ด ์์ต๋๋ค.
3. input์ ๋ฒ๋ค๋ง์ ํ  ๋์ ํ์ผ
4. output์ ๋ฒ๋ค๋ง์ ๊ฒฐ๊ณผ ํ์ผ (๋๊ฐ์ง ๋ฒ์ ์ผ๋ก ๋ฒ๋ค๋ง๋ฉ๋๋ค.)
5. UMD (Universal Module Definition) -> old school ๋ฒ์ ์์ ์ฌ์ฉ๊ฐ๋ฅ()
    > ์ ํํ๋ AMD์ CommonJS, window์ ์ถ๊ฐํ๋ ๋ฐฉ์๊น์ง ๋ชจ๋ ๊ฐ๋ฅํ ๋ชจ๋์ ์์ฑํ๋ ๋ฐฉ์์๋๋ค.
6. ESM (ECMAScript Module) -> ์๋ฐ์คํฌ๋ฆฝํธ ์์ฒด ๋ชจ๋ ์์คํ(๋ชจ๋ ์คํ์ผ)์์ ์ฌ์ฉ๊ฐ๋ฅ

### 3.3 rollup.config.js ์ค๋ช
```js
// [config] rollup.config.js
...
export default {
  ...
  plugins: [
    css(), // support for css import
    nodeResolve(), // Locate and bundle third-party dependencies in node_modules
    commonjs(), // A Rollup plugin to convert CommonJS modules to ES6
    terser() // Rollup plugin to minify generated es bundle
  ]
} 
...
```

-  ๋ฒ๋ค๋ง ์์์ ์ฌ์ฉ๋๋ ํ๋ฌ๊ทธ์ธ๋ค์ ์ ์ํฉ๋๋ค.


## 4. rollup Bundling

### 4.1 script ๋ฑ๋กํ๊ธฐ
```js
// [package] package.json
...
  "scripts": {
    ...
    "build": "rollup -c",
    ...
  },
...
```

-  package.json ์ rollup ๊ด๋ จ ์คํฌ๋ฆฝํธ๋ฅผ ์ถ๊ฐํฉ๋๋ค.


### 4.2 script ์คํ
```bash
# ์คํฌ๋ฆฝํธ ์คํ
npm run build

# ์ดํ ๋ก๊ทธ
> app-step3@1.0.0 build
> rollup -c

src/index.js โ dist/main.umd.js, dist/main.esm.js...
created dist/main.umd.js, dist/main.esm.js in 195ms
```

1. ์๋ก ๋ฑ๋กํ `build` ์คํฌ๋ฆฝํธ๋ฅผ ์คํํฉ๋๋ค.
2. dist ํด๋๊ฐ ๋ง๋ค์ด์ง๊ณ  `main.umd.js`, `main.esm.js` ํ์ผ์ด ์์ฑ๋จ์ ํ์ธํฉ๋๋ค.
3. ์ฑ๊ณต์๋๋ค.


## 5. Bundling module ์ฌ์ฉํ๊ธฐ

### 5.1 `main.umd.js` ๋ฒ์  ์ฌ์ฉํ๊ธฐ (`old-school` ๋ฒ์ )
```html
<!-- 
  [html] public/index-oldschool.html
--> 
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>People homepage</title>
  <script src="../dist/main.umd.js"></script>

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
  <div id="my-cat-card"></div> 

  <script>
    window.onload = function(){
      console.log('window.onload')      
      const theCat = new WiseCatSaying('my-cat-card')
      const theWord = theCat.actionSay()
      console.log('theWord : ', theWord)      
      theCat.render()
    }
  </script>
</body>
</html>
```

1. SPA, react, vue ... ์ ๊ฐ์ด ๋ชจ๋ ์๋ฐ์คํฌ๋ฆฝํธ๋ฅผ ์ด์ฉํ์ง ์๋ ์ฌ์ฉ์๋ฅผ ์ํ ๋ฐฉ๋ฒ์๋๋ค.(old-school)
2. html ์์ `<script src="../dist/main.umd.js"></script>` ์ฌ์ฉํ์ฌ ๋ชจ๋์ ๋ถ๋ฌ์ค๊ณ 
3. html ์์ ์ ๋นํ ์์น์ `<div id="my-cat-card"></div>` ๊ตฌ๋ฌธ์ ์ถ๊ฐํฉ๋๋ค.
3. `<script> ... </script>` ๋ด์์ ์๋์ ๊ตฌ๋ฌธ์ ์ถ๊ฐํ์ฌ ์ฌ์ฉํฉ๋๋ค.
  ```js  
  const theCat = new WiseCatSaying('my-cat-card')  // ๋ชจ๋ ์ค๋ธ์ ํธ ์์ฑ
  const theWord = theCat.actionSay()  // ์ถ๊ฐ ๋ฉ์๋
  theCat.render() // ๋ ๋๋ง
  ```  

 [์ํค๋ฐฑ๊ณผ](https://ko.wikipedia.org/wiki/%EC%98%AC%EB%93%9C_%EC%8A%A4%EC%BF%A8) ๋ฐ์ท
>  `์ฌ๋ ์ค์ฟจ(old school)`์ ์ด์  ์๋์ ์ ํต์ ์ธ ํ์์ ์๋ฏธํ๋ ์์ด ๋จ์ด์ด๋ค. ์ฌ๋ ์ค์ฟจ ํํฉ(Old skool hip hop)์ ์ด๊ธฐ ํํฉ ์์์ ๊ฐ๋ฆฌํค๋ ์ฅ๋ฅด๋ช์ด๋ค.



### 5.2 `main.esm.js` ๋ฒ์  ์ฌ์ฉํ๊ธฐ (`modern` ๋ฒ์ )

#### 5.2.1 markup ์ฌ์ฉ ์์
```html
<!-- 
  [html] public/index-esm.html
--> 
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Wise Cat Saying</title>
  <script type="module" src="index-esm.js"></script>
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
  <div id="my-cat-card"></div>
</body>
</html>
```

1. html ์์ ์ ๋นํ ์์น์ `<div id="my-cat-card"></div>` ๊ตฌ๋ฌธ์ ์ถ๊ฐํฉ๋๋ค.
2. `index-esm.js` ๋ ์๋๋ฐฉ์ด ๋ง๋ค์๋ค๊ณ  ๊ฐ์ ํฉ๋๋ค.

#### 5.2.2 script ์ฌ์ฉ ์์
```js
// [js] public/index-esm.html
import WiseCatSaying from "../dist/main.esm.js";

window.onload = function(){
  console.log('window.onload')
  const theCat = new WiseCatSaying('my-cat-card')
  const theWord = theCat.actionSay()
  console.log('theWord : ', theWord)
  theCat.render()
}
```

1. `main.esm.js` ๋ชจ๋์ **import** ๋ฐฉ์์ผ๋ก ๋ถ๋ฌ์ต๋๋ค.
3. ์คํฌ๋ฆฝํธ ๋ด์์ ์๋์ ๊ตฌ๋ฌธ์ ์ถ๊ฐํ์ฌ ์ฌ์ฉํฉ๋๋ค.  

```js  
  const theCat = new WiseCatSaying('my-cat-card')  // ๋ชจ๋ ์ค๋ธ์ ํธ ์์ฑ
  const theWord = theCat.actionSay()  // ์ถ๊ฐ ๋ฉ์๋
  theCat.render() // ๋ ๋๋ง
```  


## 6. NPM module ๋ฑ๋ก(๋ฐฐํฌ)

### 6.1 ๋ค์ด๊ฐ๊ธฐ
1. ์ง๊ธ๊น์ง ์งํํ rollup ๋ฒ๋ค๋ง ๊ฒฐ๊ณผ๋ฌผ(`main.umd.js`, `main.esm.js`) ํ์ผ์ ์น๊ตฌ์๊ฒ ๊ฑด๋ด๊ณ  ์ฌ์ฉ๋ฒ์ ์๋ดํด ์ฃผ๋ฉด ๋ง๋ค์ด ๋์ ๋๋ง์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ๋ฐฐํฌํ ์ ์์ต๋๋ค.
2. ๋ค๋ง ์ฌ์ ํ ์ง์  ํ์ผ์ ์ ๋ฌํด ์ฃผ์ด์ผ ํ๋ ๋ถํธํจ์ด ์์ต๋๋ค.
3. [npmjs](https://www.npmjs.com/) ์ฌ์ดํธ์ ๋ด๊ฐ ๋ง๋  ๋ชจ๋์ ๋ฑ๋กํ๊ณ  ์ฃผ์๋ง ์๋ ค์ฃผ๋ฉด ์ฌ์ฉํ ์ ์๋๋ก ํด๋ณด๊ฒ ์ต๋๋ค.
4. ๊ฐ๋จํ ์ค๋ชํด ๋ณด๊ฒ ์ต๋๋ค.

### 6.2 ์ค๋นํ๊ธฐ - ํ๋ก์ ํธ
1. github ์์ '๊ณ ์์ด ๋ช์ธ ๋ผ์ด๋ธ๋ฌ'๋ฅผ ์ํ Repository ๋ฅผ ์์ฑํฉ๋๋ค.
2. ์ง๊ธ๊น์ง ์งํํ ํ๋ก์ ํธ์ ๋ด์ฉ์ ์ ์ ๋ฆฌํ์ฌ ์ปค๋ฐํฉ๋๋ค.
3. `readme.md` ํ์ผ์ ๋ฉ์ง๊ฒ ์์ฑํฉ๋๋ค.
4. `LICENSE` ๋ MIT <- ๊ณ ์์ด ๊ทธ๋ฆผ๊ณผ, ๋ช์ธ์ ์ธ๋ถ๋ก๋ถํฐ ๊ฐ์ ธ์จ ๊ฒ์๋๋ค.
5. `package.json` ํ์ผ์ `npmjs` ์ ๋ฐฐํฌ๋  ํ์์ ๋ง์ถ์ด ์์ฑํฉ๋๋ค.
    > [๋ด NPM ํจํค์ง(๋ชจ๋) ๋ฐฐํฌํ๊ธฐ](https://heropy.blog/2019/01/31/node-js-npm-module-publish/) ๋ฑ์ ์ฌ์ดํธ๋ฅผ ์ฐธ๊ณ  ํฉ๋๋ค.

- **github ์ Repository ๋ฑ๋ก์ ์๋ตํ  ์ ์์ผ๋ ์งํํ๋ ๊ฒ์ ๊ถ์ฅํฉ๋๋ค.**

### 6.3 ๋ชจ๋ ๋ฑ๋ก ์งํํ๊ธฐ - npmjs
1. [npmjs](https://www.npmjs.com/) ๊ฐ์
2. [npmjs](https://www.npmjs.com/) ๋ก๊ทธ์ธ ํ ๊ฐ์ธ/ํ์ฌ ์ ๋ณด ๊ธฐ์
3. ์ฝ์์์ npmjs login
```bash
npm login
```
4. ๋ชจ๋ ๋ฑ๋ก (์๊ฐ์ด ์์๋จ)
```bash
npm publish
```
5. ๋ชจ๋ ๋ฑ๋ก ํ์ธ
 - https://www.npmjs.com/package/myModuleName 
6. ๋์ ๋ชจ๋ ์ฌ์ฉํ๊ธฐ
```bash
npm install myModuleName 
```

## 7. ๋ง์น๋ฉฐ
- ๊ธด๊ธ ์ฝ์ด ์ฃผ์์ ๊ฐ์ฌํฉ๋๋ค.
- ๋ด๊ฐ ๋ง๋  ๋ชจ๋์ด ์๋ฐ์คํฌ๋ฆฝํธ ์ํ๊ณ์ ์ค๋ฉฐ๋ค์ด ๋ค๋ฅธ์ด๋ค๋ ๊ฐ์ด ์ฌ์ฉํ ์ ์๊ฒ ๋์ด ๊ธฐ์ฉ๋๋ค. ^^
- ์ด๊ธ์์ ๋ถ์กฑํ๋ ์ค๋ช ๋ถ๋ถ์ ๋ค๋ฅธ ๊ธ๋ค๋ ํจ๊ป ์ฐพ์๋ณด๊ณ  ์งํํ์ฌ ์ฑ๊ณตํ์๊ธธ ๋ฐ๋๋๋ค.
- ์ด๊ธ์ 2022-07-17 ์ ์์ฑ๋์์ต๋๋ค. ์๊ฐ์ด ํ๋ฅด๋ฉด ์ ๋ณด๊ฐ ๋ณ๊ฒฝ๋  ์ ์์ต๋๋ค.

***

## 8. ๊ฒฐ๊ณผ๋ฌผ

### 8.1 GITHUB
- https://github.com/seniya/malrang-toy-wise-cat-saying
<img src="./img/github-image.png">

### 8.1 NPMJS
- https://www.npmjs.com/package/@malrang-toy/wise-cat-saying
<img src="./img/npmjs-image.png">


```toc

```
