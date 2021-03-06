---
emoji: ๐งข
title: React. Firebase, Dropzone ์ฐ๋ ์์ 
subtitle: React.js ํ๊ฒฝ ๋ด์์ firebase์ redux-dropzone๋ฅผ ์ด์ฉํ ์๋ก๋ ์๋น์ค ๊ตฌ์ฑ
date: '2019-02-20 00:00:00'
author: malrang
tags: React
categories: ๋ธ๋ก๊ทธ
comments: true
---

๊ธฐ์กด์ ๊ตฌ์ฑํ **[REACT - REDUX/SAGA, FIREBASE ์ฐ๋ ์์ ](https://github.com/seniya/firebase-example-1)** ๋ฐํ์ผ๋ก ์๋ก๋ ์๋น์ค๋ฅผ ์ถ๊ฐ ๊ตฌํํ๋ค.

## Sample mage

![๋ฐ๋ชจ ํ๋ฉด](https://raw.githubusercontent.com/seniya/file-upload-example-1/master/src/assets/file-upload-example-1.PNG)

## Dropzone.js

DropzoneJS is an open source library that provides dragโnโdrop file uploads with image previews.

## react-dropzone

Simple HTML5-compliant drag'n'drop zone for files built with **React.js**.

## Firebase

1. ํด๋ผ์ฐ๋ ๋ฐ์ดํฐ๋ฒ ์ด์ค ์๋น์ค ๋ฐ ๊ธฐ๋ฅ ์ ๊ณต
2. Stroge Service ์ ๊ณต

- **firebase** javascript ๋ชจ๋ ์ด์ฉ. (์๋น์ค ์ธ์ฆ ๋ฐ ํต์ , ๊ธฐ๋ฅ ์ญํ )

## ๊ณ ๋ฏผํด๋ณผ ๋ฌธ์ 

- **firebase** ์ธ์ฆ ๋ฐ ์ ์ญ ์ฌ์ฉ(singletone??)
- ์ค์  ์๋ฒ๋ก์ ์๋ก๋ ์์ ์ drag'n'drop ์ ์์ํ  ๊ฒ์ธ์ง, [Add Post] ๋ฒํผ ์ด๋ฒคํธ ์ ์์ํ  ๊ฒ์ธ์ง.
- ์๋ก๋(๊ฐ๋ณ ๋๋ ์ ์ฒด) ์ผ์์ ์ง,์ฌ์์,์ทจ์ ์ด๋ฒคํธ ์ฒ๋ฆฌ ํ์.
- ๋ฉ์๋(์ด๋ฒคํธ) ์ค์ฌ์ด ์๋ ์ํ์ค์ฌ์ ์ฝ๋์ ๋ต ํ์.
- ์ฝ๋ ๋ฆฌํํ ๋ง..

## CODE

```javascript
// Dropzone Conponent์์ 'drop' ์ด๋ฒคํธ๊ฐ ๋ฐ์๋์์ ๊ฒฝ์ฐ
onDrop = async (files) => {
  const { onChangeFile, onChangeCreatable } = this.props;

  onChangeCreatable(false); // ์ํ ๋ณ๊ฒฝ
  files.map((file) =>
    Object.assign(file, {
      // file ๊ฐ์ฒด ์ถ๊ฐ์ ๋ณด ์ง์ 
      id: nanoid(),
      preview: URL.createObjectURL(file),
      progress: 0,
      onProgress: this.handleProgress,
      downloadUrl: '',
      onDownloadUrl: this.handleDownloadUrl,
    }),
  );

  await this.setState((state) => ({
    // ์๋์น ์์ ๋์์ ๋ฐฉ์งํ๊ธฐ ์ํ์ฌ ๋๊ธฐ๊ธฐ๋ฒ ์ฌ์ฉ.
    uploading: true,
    items: [...state.items, ...files],
  }));

  const storageRef = firebase.storage().ref(); // firebase ์ค๋น

  // drop ๋ ํ์ผ ๊ฐ์ฒด๋ค์ ์ํํ๋ฉฐ ์๋ก๋. promise ๊ฐ์ฒด ๋ฐํ.
  // firebase ์๋ก๋ ๊ฐ์ฒด์ ํ์ผ ์ ๋งํผ listener - on ์ ์ ์ํ๋๊ฒ์ด ์ด์ํด ๋ณด์
  const uploaders = files.map((file) => {
    const metadata = { contentType: 'image/jpeg' };
    const uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        file.onProgress(progress, file);
      },
      (error) => {
        console.log('error.code : ', error.code);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          file.onDownloadUrl(downloadURL, file);
        });
      },
    );
    return uploadTask;
  });

  // ์๋ก๋ ์๋ฃํ(๋ชจ๋) ์ํ ๋ณ๊ฒฝ ๋ฐ ๋ถ๋ชจ์ปจํฌ๋ํธ์์ ๋ณด ์ ๋ฌ
  Promise.all(uploaders).then((items) => {
    this.setState((state) => ({
      uploading: false,
    }));
    onChangeFile(this.state.items);
    onChangeCreatable(true);
  });
};
```

## ํด๋ ๊ตฌ์กฐ

```
project
โ README.md
โโโโpublic
โโโโsrc
|   โ index.js
|   โ App.js
โ   โโโโcomponents
โ   โโโโpages
โ   โโโโservice
|      โโโโactions
|      โโโโreducers
|      โโโโsagas
```

## Available Scripts

1. npm install
2. yarn start

## Learn More

- Firebase ๊ณต์ ์ฌ์ดํธ : [Google Firebase](https://console.firebase.google.com/)
- Firebase ๊ณต์ ๋ฌธ์ : [์น์์ ํ์ผ ์๋ก๋](https://firebase.google.com/docs/storage/web/upload-files?hl=ko)
- ์ฐธ๊ณ  : [Firebase Storage With AngularFire - DropZone File Uploader](https://angularfirebase.com/lessons/firebase-storage-with-angularfire-dropzone-file-uploader/)
- ์ฐธ๊ณ  : [Upload Files to Firebase Storage with JavaScript](https://time2hack.com/2017/10/upload-files-to-firebase-storage-with-javascript/)

```toc

```
