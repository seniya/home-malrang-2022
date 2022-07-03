---
emoji: 🧢
title: (33 js concepts) 02.원시 자료형(Primitive Data type)
subtitle: 02. 원시 자료형(Primitive Data type)
date: '2019-02-26 00:00:00'
author: malrang
tags: 33-js-concepts
categories: 블로그
comments: true
---

### 원시 타입 (Primitive values) 이란

by [MDN Web Docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)

> 오브젝트를 제외한 모든 값은 변경 불가능한 값 (immutable value) 이다. 예를 들자면, 특히 C 언어와는 다르게도, 문자열은 불변값 (immutable) 이다. 이런 값을 "primitive values" 라고 일컫는다.

- **Primitive Data Type** 은 값이 저장된 스택(Stack )메모리 영역에 직접적으로 접근한다. (Pass by Value)
- **Object Data type** 은 변수의 값이 저장된 힙(Heap) 메모리 영역의 주소값을 저장한다. (Pass by Reference)

<br />

### JavaScript 전체 자료형 #1

<img src="https://seniya.github.io/assets/images/post/20190226/2019-02-26-33-js-concepts-02-primitive-data-type.PNG">

<br />

### JavaScript 전체 자료형 #2

CMAScript 2015 (6th Edition) 기준 7개의 자료형 정의

- 원시 타입 (Primitive values)
  - `String`
  - `Number`
  - `Boolean`
  - `Null`
  - `Undefined`
  - `Symbol`
- 객체 타입 (Object values)

  - `Native object` (Object, Array, Function, String, Number, Date, Math ...)
  - `Host object` (BOM-window, DOM-document)
  - `User-defined object`

  <br />

### 원시 타입 (Primitive values) 상세

- `String`  
  : 텍스트 데이터를 나타내는데 사용. 16비트 부호없는 정수 값 요소들의 집합.  
  : 배열처럼 인덱스를 통해 접근 가능한 유사 배열 특징.(read only)

```javascript
let str = 'Primitive'; // 큰 따옴표
let str = 'values'; // 작은 따옴표
let str = `Javascript`; // 백틱(ES6 템플릿 리터럴)
```

- `Number`  
  : ECMAScript 표준에 정의된 배정밀도 64비트 형식 IEEE 754 값 (-(253 -1) 와 253 -1 사이의 숫자값) 을 표현한다.  
  : Infinity(양의 무한대), -Infinity(음의 무한대), NaN(숫자가 아님) 표현가능.  
  : 모든 수를 실수로 처리한다.

```javascript
let num = 10;   // 정수
let num = 10.0; // 실수 (10 === 10.0)
let num = -10;  // 음수

> 42 / +0
Infinity
> 42 / -0
-Infinity
> 42 * 'str'
-NaN
```

- `Boolean`  
  : 논리적인 요소를 나타내고, **true** 와 **false** 의 두 가지 값을 가질 수 있다.

```javascript
let boolA = true; // true
let boolB = false; // false
let boolC = boolA === boolB; // false
```

- `Null`  
  : 어떤 값이 의도적으로 비어있음을 표현. 타입의 값은 **null**이 유일  
  : 어떤 값에 null을 할당한다면 메모리 할당 정보를 제거 한다는 의미로 가비지 컬렉션이 수행될 것이 기대.

```javascript
// 정의되지 않고 초기화된 적도 없는 foo
> foo;
"ReferenceError: foo is not defined"

// 존재하지만 값이나 자료형이 존재하지 않는 foo
let foo = null;
foo;  // null
```

- `Undefined`  
  : 값이 할당 되지 안는 변수들이 가지는 자료형으로 **undefined** 값을 가진다.

```javascript
let foo;
foo; // undefined
```

- `Symbol`  
  : ECMAScript 6 에서 추가된 타입. Symbol은 유일하고 변경 불가능한 (immutable) 기본값 (primitive value) 이다. 또한, 객체 속성의 key 값으로도 사용될 수 있다 (아래를 볼 것). 몇몇 프로그래밍 언어에서는 Symbol을 atom 이라고 부른다. 또, C 언어의 이름있는 열거형 (enum) 과도 비슷하다.

<br /> 
<br />

### 객체(참조) 타입 (Object values) 상세

> 원시 타입을 제외한 나머지 값들을 의미한다. 자바스크립트 객체는 key/value 쌍으로 표현된 property 들의 집합이다. (ex. Function, Array, Date, Mate, Window ...)

- Built-in Object(자바스크립트 내장객체)  
  : Object, String, Number, Array, Function, Math, Date 등 Javascript 에서 제공하는 객체  
  : ECMAScript(표준 문서)에 정의되어 있습니다.

- Native Object(브라우져 내장 객체)  
  : BOM(Browser Object Model), DOM(Document Object Model) 브라우저에서 제공하는 객체

- Host Object(사용자 정의 객체)  
  : 사용자가 정의하여 사용

```toc

```
