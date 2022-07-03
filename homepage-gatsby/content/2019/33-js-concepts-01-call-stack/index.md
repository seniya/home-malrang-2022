---
layout: post
title: 33-js-concepts. - 01.호출스택 (Call Stack)
subtitle: 01. 호출 스택 (Call Stack)
tags: [33-js-concepts]
image: /img/posts/2019-02-21-모든 자바스크립트 개발자가 알아야 하는 33가지 개념.jpg
comments: true
---

### 호출 스택이란 (이하 call stack)
by [MDN Web Docs](https://developer.mozilla.org/ko/docs/Glossary/Call_stack)

>호출 스택은 여러 함수들(functions)을 호출하는 스크립트에서 해당 위치를 추적하는 인터프리터 (웹 브라우저의 자바스크립트 인터프리터같은)를 위한 메커니즘입니다. 현재 어떤 함수가 동작하고있는 지, 그 함수 내에서 어떤 함수가 동작하는 지, 다음에 어떤 함수가 호출되어야하는 지 등을 제어합니다.

- 자바스크립트는 싱글스레드 => 호출스택 1개.
- 호출스택은 LIFO(Last In, First Out) 방식으로 작동.

<br />
### 일반 예제
{% highlight javascript linenos %}
let fn1 = function() {
  console.log('fn1 실행');
  fn2();
}

let fn2 = function() {
  console.log('fn2 실행');
}

fn1();
{% endhighlight %}


<h1 align="center">
  <img src="https://seniya.github.io/img/posts/2019-02-21-33-js-concepts-01-call-stack.jpg" alt="call stack example">
</h1>


1. line 10 번째 **fn1();** 구문을 만나기 전까지 Call Stack Empty.
1. line 10 번째 **fn1()** 를 Call Stack List 에 추가. (**main 지칭**)
1. **main** 함수에 의해 불러진 line 1 번째 **fn1()**의 코드를 순차적으로 조사. line 2 번째 **console.log('fn1 실행');** 를 Call Stack List 에 추가. (**fn1-cs 지칭**)
1. **fn1-cs** 실행 후 Call Stack 에서 해당 단위를 삭제하고 계속해서 line 1 번째 **fn1()**의 코드를 순차적으로 조사. line 3 번째 **fn2();** 를 Call Stack List 에 추가. (**fn1-fn2 지칭**)
1. **fn1-fn2** 함수에 의해 불러진 line 6번째 **fn2()**의 코드를 순차적으로 조사. line 7번째 **console.log('fn2 실행');** 를 Call Stack List 에 추가. (**fn2-cs 지칭**)
1. **fn2-cs** 실행 후 Call Stack 에서 해당 단위를 삭제.
1. **fn1-fn2** 함수도 완료가 되었으므로 Call Stack 에서 해당 단위를 삭제.
1. **main** 함수도 완료가 되었으므로 Call Stack 에서 해당 단위를 삭제.  


<br />
### 재귀 호출 예제

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

1. line 5번째 **fn1();** 구문이 호출되어 Call Stack List 에 추가. (**main 지칭**)
1. **main** 함수에 의해 불러진 line 1번째 **fn1()**이 Call Stack List 에 추가.
1. **fn1()** 함수에 의해 다시 자기 자신이 호출되어 **fn1()**이 Call Stack List 에 추가.
1. 계속 반복...
1. 정해진 Call Stack의 크기보다 많은 수가 스택에 쌓일 경우 에러 발생.




