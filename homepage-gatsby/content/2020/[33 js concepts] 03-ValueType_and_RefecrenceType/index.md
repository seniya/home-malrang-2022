---
emoji: 🧢
title: (33 js concepts) 03.값 타입(Value Type)과 참조 타입(Refecrence Type)
subtitle: 03. Pass by Value vs Pass by Reference
date: '2020-02-16 00:00:00'
author: malrang
tags: 33-js-concepts
categories: 블로그
comments: true
---

### 값 타입(Value Type / Pass by Value / Call by Value) 이란

> 값에 의한 전달 이라 설명된다. 원시타입(Primitive Data Type) 형태들이 위와 같은 식으로 값이 복사 되어 전달 되며 스택(Stack)메모리 영역에 고정되어 변경되지 않는다. - immutable

```javascript
let a = 10;
let b = a; // 10이라는 숫자값이 변수 b의 값으로 복사 되어 들어갔다.
console.log(a, b);
// > 10, 10
console.log(a === b);
// > true

b = 5; // 변수 b의 값은 값 자체를 지칭하므로 변수 a의 영향을 미치지 않는다.
console.log(a, b);
// > 10, 5
console.log(a === b);
// > false
```

<br />
<br />

### 참조 타입(Object Type / Pass by Object / Call by Object) 이란

> 참조값(주소)에 의한 전달 이라 설명된다. 참조타입(Object Data Type) 형태들은 원시타입과 달리 값이 전달될 때 참조값을 공유하게 되므로 할당된 객체의 수정이 이루어 질 경우 해당 객체를 바라보는 변수들이 모두 함께 수정된 값을 바라보게 된다. 여기서 참조값이란 힙(Heap) 메모리 영역의 주소값을 의미한다. - mutable

```javascript
let a = { val: 10 };
let b = a; // 변수 a의 참조값(주소)가 복사되어 들어간다.
console.log(a, b);
// > Object {val: 10}
// > Object {val: 10}
console.log(a === b); // 같은 참조값(주소)를 바라보고 있으므로 결과는 참.
// > true

b.val = 5;
// 변수 b의 값은 값 변수 a의 참조값을 가르키고 있다. 그러므로 해당 명령은 참조값의 val 프로퍼티를 변경하는 것이고 따라서 해당 명령이 수행되고 난 후에는 같은 곳을 바라보았던 변수 b의 결과도 달라지게 된다.
console.log(a, b);
// > Object {val: 5}
// > Object {val: 5}
console.log(a === b);
// > true
```

<br />

```javascript
let a = { val: 10 };
let b = { val: 10 };
console.log(a, b);
// > Object {val: 10}
// > Object {val: 10}
console.log(a === b); // 같은 다른 참조값(주소)를 바라보고 있으므로 결과는 거짓.
// > false
```

<br />  
<br />

```toc

```
