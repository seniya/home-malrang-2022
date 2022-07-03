---
emoji: 🧢
title: React. Firebase, Dropzone 연동 예제
subtitle: React.js 환경 내에서 firebase와 redux-dropzone를 이용한 업로드 서비스 구성
date: '2019-02-20 00:00:00'
author: malrang
tags: React
categories: 블로그
comments: true
---

기존에 구성한 **[REACT - REDUX/SAGA, FIREBASE 연동 예제](https://github.com/seniya/firebase-example-1)** 바탕으로 업로드 서비스를 추가 구현한다.

## Sample mage

![데모 화면](https://raw.githubusercontent.com/seniya/file-upload-example-1/master/src/assets/file-upload-example-1.PNG)

## Dropzone.js

DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews.

## react-dropzone

Simple HTML5-compliant drag'n'drop zone for files built with **React.js**.

## Firebase

1. 클라우드 데이터베이스 서비스 및 기능 제공
2. Stroge Service 제공

- **firebase** javascript 모듈 이용. (서비스 인증 및 통신, 기능 역할)

## 고민해볼 문제

- **firebase** 인증 및 전역 사용(singletone??)
- 실제 서버로의 업로드 시점을 drag'n'drop 시 시작할 것인지, [Add Post] 버튼 이벤트 시 시작할 것인지.
- 업로드(개별 또는 전체) 일시정지,재시작,취소 이벤트 처리 필요.
- 메소드(이벤트) 중심이 아닌 상태중심의 코드전략 필요.
- 코드 리펙토링..

## CODE

```javascript
// Dropzone Conponent에서 'drop' 이벤트가 발생되었을 경우
onDrop = async (files) => {
  const { onChangeFile, onChangeCreatable } = this.props;

  onChangeCreatable(false); // 상태 변경
  files.map((file) =>
    Object.assign(file, {
      // file 객체 추가정보 지정
      id: nanoid(),
      preview: URL.createObjectURL(file),
      progress: 0,
      onProgress: this.handleProgress,
      downloadUrl: '',
      onDownloadUrl: this.handleDownloadUrl,
    }),
  );

  await this.setState((state) => ({
    // 의도치 않은 동작을 방지하기 위하여 동기기법 사용.
    uploading: true,
    items: [...state.items, ...files],
  }));

  const storageRef = firebase.storage().ref(); // firebase 준비

  // drop 된 파일 객체들을 순회하며 업로드. promise 객체 반환.
  // firebase 업로드 객체에 파일 수 만큼 listener - on 을 정의하는것이 어색해 보임
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

  // 업로드 완료후(모두) 상태 변경 및 부모컨포넌트에정보 전달
  Promise.all(uploaders).then((items) => {
    this.setState((state) => ({
      uploading: false,
    }));
    onChangeFile(this.state.items);
    onChangeCreatable(true);
  });
};
```

## 폴더 구조

```
project
│ README.md
└───public
└───src
|   │ index.js
|   │ App.js
│   └───components
│   └───pages
│   └───service
|      └───actions
|      └───reducers
|      └───sagas
```

## Available Scripts

1. npm install
2. yarn start

## Learn More

- Firebase 공식 사이트 : [Google Firebase](https://console.firebase.google.com/)
- Firebase 공식 문서 : [웹에서 파일 업로드](https://firebase.google.com/docs/storage/web/upload-files?hl=ko)
- 참고 : [Firebase Storage With AngularFire - DropZone File Uploader](https://angularfirebase.com/lessons/firebase-storage-with-angularfire-dropzone-file-uploader/)
- 참고 : [Upload Files to Firebase Storage with JavaScript](https://time2hack.com/2017/10/upload-files-to-firebase-storage-with-javascript/)

```toc

```
