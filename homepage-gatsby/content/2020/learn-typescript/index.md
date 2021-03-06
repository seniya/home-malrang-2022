---
emoji: π§’
title: TypeScript. - 01.μμνκΈ°
subtitle: typescript μμνκΈ°
date: '2020-06-09 00:00:00'
author: malrang
tags: TypeScript
categories: λΈλ‘κ·Έ
comments: true
---

## μμ μ  μ€λΉλ¬Ό

- node νκ²½ λ° μΈν°λ· νκ²½
- μλν° ex) <span class="">VSCode</span> - Visual Studio Code
- Javasciprt μ νμ§μ
- node λ° npm μ νμ§μ

<br />

## 1. νκ²½ μ€λΉ

λ¨Όμ  μ¬μ©νκ³  νλ λλ ν λ¦¬λ‘ μ΄λνμ¬ λ€μκ³Ό κ°μ΄ λΈλν¨ν€μ§λ©μ§μ λ₯Ό μ΄κΈ°ν ν©λλ€.

<br />

```sh
# [shell]

> mkdir 01_typescript  # μ¬μ©νκ³ μ νλ λλ ν λ¦¬
> cd 01_typescript # μ΄λ

# ν΄λΉ κ³΅κ°μ λΈλν¨ν€μ§λ§€λμ  μ΄κΈ°ν (package.json μμ±)
# νΉλ³ν μ€μ  μμ΄ μν° μΉλ©΄μ μ§ν μλ£ν λͺ¨μ΅
> npm init

# νμμ€ν¬λ¦½νΈ ν¨ν€μ§ μ μ­ μ€μΉ
> npm install -g typescript

# ν΄λΉ κ³΅κ°μ νμμ€ν¬ννΈ μ΄κΈ°ν (tsconfig.json μμ±)
> tsc -init

# λ²μ  νμΈ (νμ tsc version 3.9.5 && node v12.17.0)
> tsc -v

// main.ts νμΌ μμ± (λλ vscode μμ ν΄λΉ λλ ν λ¦¬ λ°μ λ§λ¦)
> touch main.ts
```

<br />

```js
// [source] main.ts

let message1: boolean;
message1 = true;
console.log('console1 :>> ', message1, typeof message1);
```

<br />

```sh
# [shell]

# shell μμ tsc μ€ν ν main.js νμΌ μμ± νμΈ
> tsc main.ts

# main.js μ€ν
> node main.js
console1 :>>  true boolean
```

**μ²« νμμ€ν¬λ¦½νΈ μμ±μ μΆνν©λλ€ β**

<br />

## 2. Typescript λ

- μ΄λ―Έ λ§μ μ€λͺκ³Ό κΈλ€μ΄ μ‘΄μ¬νκΈ°μ λͺλͺ λ§ν¬λ‘ λμ ν©λλ€.

[κ³΅μμ¬μ΄νΈ](https://www.typescriptlang.org/index.html) λ°μ·

> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.

[TypeScript #1 νμμ€ν¬λ¦½νΈλ λ¬΄μμΈκ°?](https://medium.com/@wonjong_oh/typescript-1-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-f4b02f54009c)  
[TypeScriptμ μκ°μ κ°λ° νκ²½ κ΅¬μΆ](https://poiemaweb.com/typescript-introduction)  
[TypeScript-Handbook νκΈ λ¬Έμ](https://typescript-kr.github.io/)  
[TypeScript - λλ¬΄μν€](https://namu.wiki/w/TypeScript)

<br />

## 3. Typescript Basic

- μμ£Ό μ¬μ©λλ [μλ°μ€ν¬λ¦½νΈμ μλ£ν](https://seniya.github.io/blog/2019/02/26/33-js-concepts-02-primitive-data-type)μ ν΅νμ¬ κΈ°λ³Έ μ¬μ©λ²μ μλ΄ν©λλ€.

### 3-1 κΈ°λ³Έν boolean

```js
// [source] main.ts

let message1: boolean;
message1 = true;
console.log('console1 :>> ', message1, typeof message1);
```

```sh
# [shell]

> tsc main.ts
> node main.js
console1 :>>  true boolean
```

- λ¨Όμ  μμ± νλ €κ³  νλ `νμΌμ΄λ¦.ts` μ νμΌμ μμ±ν©λλ€.
- μ¬μ©νλ €λ λ°μ΄ν°(λ³μ λλ ν¨μ) μμ `:(μ½λ‘ )` κ³Ό ν¨κ» μ¬μ©νλ €λ λ°μ΄ν°μ νμμ μ μΈν©λλ€. μ΄ν μ΄μ΄μ μμ±ν©λλ€.
  > ex) λ°μ΄ν° : νμ
- μμ±μ΄ μλ£λ `νμΌμ΄λ¦.ts` νμΌμ `tsc` λͺλ Ήμ΄λ₯Ό μ΄μ©νμ¬ `νμΌμ΄λ¦.js` λ‘ λ³ν(μ»΄νμΌ) ν©λλ€.
- λ³νλ `νμΌμ΄λ¦.js` λ₯Ό μ΄μ©νμ¬ νλ‘κ·Έλ¨ μμ±μ κ³μ μ§νν©λλ€.

* μ μΈνλ λ°μ΄ν°λ₯Ό λ€λ₯Έ νμμΌλ‘ μ¬μ©νλ €κ³  νλ©΄ μ»΄νμΌ κ³Όμ μμ μλ¬κ° λ°μνκ³  js νμΌμ΄ μμ±λμ§ μμ΅λλ€.

```toc

```
