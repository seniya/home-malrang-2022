---
emoji: ๐งข
title: (33 js concepts) 01.ํธ์ถ์คํ (Call Stack)
subtitle: 01. ํธ์ถ ์คํ (Call Stack)
date: '2019-02-21 00:00:00'
author: malrang
tags: 33-js-concepts
categories: ๋ธ๋ก๊ทธ
comments: true
---

### ํธ์ถ ์คํ์ด๋ (์ดํ call stack)

by [MDN Web Docs](https://developer.mozilla.org/ko/docs/Glossary/Call_stack)

> ํธ์ถ ์คํ์ ์ฌ๋ฌ ํจ์๋ค(functions)์ ํธ์ถํ๋ ์คํฌ๋ฆฝํธ์์ ํด๋น ์์น๋ฅผ ์ถ์ ํ๋ ์ธํฐํ๋ฆฌํฐ (์น ๋ธ๋ผ์ฐ์ ์ ์๋ฐ์คํฌ๋ฆฝํธ ์ธํฐํ๋ฆฌํฐ๊ฐ์)๋ฅผ ์ํ ๋ฉ์ปค๋์ฆ์๋๋ค. ํ์ฌ ์ด๋ค ํจ์๊ฐ ๋์ํ๊ณ ์๋ ์ง, ๊ทธ ํจ์ ๋ด์์ ์ด๋ค ํจ์๊ฐ ๋์ํ๋ ์ง, ๋ค์์ ์ด๋ค ํจ์๊ฐ ํธ์ถ๋์ด์ผํ๋ ์ง ๋ฑ์ ์ ์ดํฉ๋๋ค.

- ์๋ฐ์คํฌ๋ฆฝํธ๋ ์ฑ๊ธ์ค๋ ๋ => ํธ์ถ์คํ 1๊ฐ.
- ํธ์ถ์คํ์ LIFO(Last In, First Out) ๋ฐฉ์์ผ๋ก ์๋.

<br />
### ์ผ๋ฐ ์์ 
{% highlight javascript linenos %}
let fn1 = function() {
  console.log('fn1 ์คํ');
  fn2();
}

let fn2 = function() {
console.log('fn2 ์คํ');
}

fn1();
{% endhighlight %}

<h1 align="center">
  <img src="https://seniya.github.io/img/posts/2019-02-21-33-js-concepts-01-call-stack.jpg" alt="call stack example">
</h1>

1. line 10 ๋ฒ์งธ **fn1();** ๊ตฌ๋ฌธ์ ๋ง๋๊ธฐ ์ ๊น์ง Call Stack Empty.
1. line 10 ๋ฒ์งธ **fn1()** ๋ฅผ Call Stack List ์ ์ถ๊ฐ. (**main ์ง์นญ**)
1. **main** ํจ์์ ์ํด ๋ถ๋ฌ์ง line 1 ๋ฒ์งธ **fn1()**์ ์ฝ๋๋ฅผ ์์ฐจ์ ์ผ๋ก ์กฐ์ฌ. line 2 ๋ฒ์งธ **console.log('fn1 ์คํ');** ๋ฅผ Call Stack List ์ ์ถ๊ฐ. (**fn1-cs ์ง์นญ**)
1. **fn1-cs** ์คํ ํ Call Stack ์์ ํด๋น ๋จ์๋ฅผ ์ญ์ ํ๊ณ  ๊ณ์ํด์ line 1 ๋ฒ์งธ **fn1()**์ ์ฝ๋๋ฅผ ์์ฐจ์ ์ผ๋ก ์กฐ์ฌ. line 3 ๋ฒ์งธ **fn2();** ๋ฅผ Call Stack List ์ ์ถ๊ฐ. (**fn1-fn2 ์ง์นญ**)
1. **fn1-fn2** ํจ์์ ์ํด ๋ถ๋ฌ์ง line 6๋ฒ์งธ **fn2()**์ ์ฝ๋๋ฅผ ์์ฐจ์ ์ผ๋ก ์กฐ์ฌ. line 7๋ฒ์งธ **console.log('fn2 ์คํ');** ๋ฅผ Call Stack List ์ ์ถ๊ฐ. (**fn2-cs ์ง์นญ**)
1. **fn2-cs** ์คํ ํ Call Stack ์์ ํด๋น ๋จ์๋ฅผ ์ญ์ .
1. **fn1-fn2** ํจ์๋ ์๋ฃ๊ฐ ๋์์ผ๋ฏ๋ก Call Stack ์์ ํด๋น ๋จ์๋ฅผ ์ญ์ .
1. **main** ํจ์๋ ์๋ฃ๊ฐ ๋์์ผ๋ฏ๋ก Call Stack ์์ ํด๋น ๋จ์๋ฅผ ์ญ์ .

<br />
### ์ฌ๊ท ํธ์ถ ์์ 

{% highlight javascript linenos %}
let fn1 = function() {
fn1();
}

fn1();
{% endhighlight %}

<h1 align="center">
  <img src="https://seniya.github.io/img/posts/2019-02-21-33-js-concepts-01-call-stack2.jpg" alt="call stack example2">
  <img src="https://seniya.github.io/img/posts/2019-02-21-33-js-concepts-01-call-stack3.PNG" alt="call stack example3">
</h1>

1. line 5๋ฒ์งธ **fn1();** ๊ตฌ๋ฌธ์ด ํธ์ถ๋์ด Call Stack List ์ ์ถ๊ฐ. (**main ์ง์นญ**)
1. **main** ํจ์์ ์ํด ๋ถ๋ฌ์ง line 1๋ฒ์งธ **fn1()**์ด Call Stack List ์ ์ถ๊ฐ.
1. **fn1()** ํจ์์ ์ํด ๋ค์ ์๊ธฐ ์์ ์ด ํธ์ถ๋์ด **fn1()**์ด Call Stack List ์ ์ถ๊ฐ.
1. ๊ณ์ ๋ฐ๋ณต...
1. ์ ํด์ง Call Stack์ ํฌ๊ธฐ๋ณด๋ค ๋ง์ ์๊ฐ ์คํ์ ์์ผ ๊ฒฝ์ฐ ์๋ฌ ๋ฐ์.

```toc

```
