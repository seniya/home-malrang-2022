---
emoji: 🧢
title: 나만의 자바스크립트 라이브러리 만들기 - 03.배포하기(번들러) 
subtitle: 번들러를 이용하여 배포판으로 만들기
date: '2020-07-16 00:00:00'
author: malrang
tags: javascript rollup
categories: 블로그
comments: true
---

## 연관 게시글

| 단계 | 제목 |
|---|:---|
| `01.시작하기` | [나만의 자바스크립트 라이브러리 만들기](/2022/my-npm-module-01/) |
| `02.배포하기(기본)` | [나만의 자바스크립트 라이브러리 만들기](/2022/my-npm-module-02/) |
| `03.배포하기(번들러)` | [나만의 자바스크립트 라이브러리 만들기](/2022/my-npm-module-03/) `*` |

<br />

---

<br />

## 시작 전 준비물

- node 환경 및 인터넷 환경
- Visual Studio Code
- Javasciprt 선행지식
- node 및 npm 선행지식
- 번들러 사용 선행지식

<br />

## 1. 시작하기

이전에 만들어 본 **고양이-명언-라이브러리**( [나만의 자바스크립트 라이브러리 만들기](/2022/my-npm-module-01/) ) 를 다른 친구들이 이용하게 하려면 어떻게 해야 할까요

### 1.1 간단한 방법

작성한 코드덩어리를 `zip` 파일로 압축하고 친구들에게   

1. 파일을 전달
2. 필요한 부분을 적당히 카피/복사 하여 사용할 수 있도록 사용법을 전달  

### 1.2 세련된 방법 `**`

`node_module` 폴더 안에 라이브러리 형태로 들어갈 수 있도록 만들어서 조금 더 편리하게 사용하도록 안내합니다.  
이번 문서에서 진행해 보도록 하겠습니다.


<br />

## 2. 배포용 프로젝트 만들기

- [rollupjs](https://rollupjs.org/guide/en/) 로 내가 만든 라이브러리를 번들링하여 배포하는 방법을 진행합니다.


### 2.1 프로젝트 생성

```bash
# [shell]

mkdir app_step3  # old school 버전 앱 디렉토리
cd app_step3 # 이동

# 해당 공간에 노드패키지매니저 초기화 (package.json 생성)
# 특별한 설정 없이 엔터 치면서 진행 완료한 모습
npm init

# public 디렉토리 생성
mkdir public

# src 디렉토리 생성
mkdir src

# 번들러 모듈 설치 (rollup)
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

### 2.2 프로젝트 파일 생성

- public 폴더를 생성합니다.
  - `index.html` 파일을 생성합니다.
  - `index.html` 은 **상대방**이 작성하는 페이지라고 가정합니다.

- src 폴더를 생성합니다.
  - index.js, style.css, util.js, word.js 파일을 생성합니다.
  - `src` 폴더 이하의 파일들은 내가 **상대방**에게 전달해주는 **라이브러리**로 번들링 되는 타겟으로 가정합니다. 
  - 마지막 번들링을 통하여 코드가 배포되므로 이전에 만들어 놓은 코드는 모던 스타일로 다시 리펙토링 합니다.

- rollup.config.js 파일을 생성합니다.
<br />

### 2.3 파일 작성 - style.css

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

### 2.4 파일 작성 - util.js

```js
// [source] src/util.js
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

### 2.5 파일 작성 - word.js

```js
// [source] src/word.js
export const wiseWords = [
  {
    key: 1,
    contents: '운은 마음의 준비가 있는 사람에게만 미소를 짓는다.',
    name: '파스퇴르'    
  },
  {
    key: 2,
    contents: '사랑은 신뢰의 행위다, 믿으니까 믿는 것이다, 사랑하니까 사랑하는 것이다',
    name: '로망롤랑'    
  },
  {
    key: 3,
    contents: '위대함에는 신비성이 필요하다, 너무 알면 사람들은 존경하지 않는다',
    name: '드골',
  },
  {
    key: 4,
    contents: '요구받기 전에 먼저 충고하지 말라',
    name: '에라스무스',
  },
  {
    key: 5,
    contents: '우주를 한 사람으로 축소시키고 그 사람을 신으로 확대시키는 것이 바로 사랑이다',
    name: '빅토르 위고',
  },
  ...
]
```

### 2.6 파일 작성 - index.js

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

## 3. 코드 설명

### 3.1 javascript 코드

```js
// [source] src/index.js
import { getRandomInt } from "./util.js"
import { wiseWords } from "./words.js"
import style_ from "./style.css";
...

```
- 코드의 성격에 따라 파일을 분리합니다.
- 사용법을 편리하게 하고자 js 파일의 갯수를 줄이기 위하여 기존 **명언사전(word.js)** 를 import 합니다.  
- 최종 사용자가 파일을 하나만 import 하여 사옹하도록 css를 import 합니다. (`rollup-plugin-import-css` 의 지원 기능입니다.)  


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
- 편리한 코드 진행을 위하여 이전 코드를 class 스타일로 리펙토링 합니다.
- 객체 생성시 랜더링될 타겟의 마크업 아이디를 강제 하지 않게 하기 위하여 생성자구문에서 인자로 받습니다.

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
- 클래스 샘플 메소드 입니다. 사용자가 선택적으로 사용할 수 있습니다.

### 3.2 rollup.config.js 설명
```js
// [config] rollup.config.js
...
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import css from "rollup-plugin-import-css";

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
  ],
  plugins: [
    css(), 
    nodeResolve(), 
    commonjs(), 
    terser()
  ]
} 
...
```


```toc

```
