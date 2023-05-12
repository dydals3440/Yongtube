# Yongtube (Youtube 클론코딩) 프로젝트

---

## Yongtube 앱 실행 방법

### 실행 방법

`yarn start`를 통해 프로젝트를 시작할 수 있습니다.

### Yongtube 사용해보기

아래의 링크에서 실제 작동되는 App을 확인할 수 있습니다.

[🍿 Yongtube 사용해보기](https://effulgent-youtiao-b6a85c.netlify.app/)

---

# 프로젝트 파일 구조

```js
📦src
 ┣ 📂api
 ┃ ┣ 📜fakeYoutubeClient.js
 ┃ ┣ 📜youtube.js
 ┃ ┗ 📜youtubeClient.js
 ┣ 📂components
 ┃ ┣ 📜ChannelInfo.jsx
 ┃ ┣ 📜RelatedVideos.jsx
 ┃ ┣ 📜SearchHeader.jsx
 ┃ ┗ 📜VideoCard.jsx
 ┣ 📂context
 ┃ ┗ 📜YoutubeApiContext.jsx
 ┣ 📂pages
 ┃ ┣ 📜ErrorPage.jsx
 ┃ ┣ 📜VideoDetail.jsx
 ┃ ┗ 📜Videos.jsx
 ┣ 📂utils
 ┃ ┗ 📜timeago.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```

---

### Commit Message Convention

`feat`: 기능 추가, 삭제, 변경

`fix`: 버그 수정

`docs`: 문서 추가, 삭제, 변경 - 코드 수정없음

`style`: 코드 형식, 정렬, 주석 등의 변경
(세미콜론 추가 같은 코드 수정이 있으나, 기능에 변동 X)

`refactor`: 코드 리펙토링 (변수명, JS -> TS)

`test`: 테스트 코드 추가, 삭제, 변경 등

`chore`: 위에 해당하지 않는 모든 변경, eg. 빌드 스크립트 수정, 패키지 배포 설정 변경

---

### 🍿 Yongtube 앱 핵심 기능

- [x] `Search` 기능 구현
- [x] `Search` 검색값 바탕으로, 페이지 이동 구현 (Routing)
- [x] `YoutubeAPI` 활용 실제 실시간 동영상 / 정보 받아오기
- [x] `VideoCard` Component 제작 (영상 이미지, 제목, 게시자, 게시 일자)
- [x] 모바일 환경 반응형 디자인
- [x] `Video` 클릭 시 `Video Detail` 이동
- [x] `useAxios` hook 제작
- [x] `axios` `param` 접근
- [x] `netlify` 활용 배포! (버그 수정 후)
- [x] `PostMan` 이용 API 관리!
- [x] `Timeago.js` 이용하여 `n분전` 구현
- [x] `TailWindCSS`활용 스타일링
- [x] `TailWindCSS` 컴포넌트 type 분리 스타일링
- [x] `reactQuery` staleTime 설정
- [x] `realtedVideos` 연관 비디오 구현
- [x] `Client` 두 종류 제작 실제 YoutubeData, MockData `di 의존성 주입` 통해 제작

---

### 🍿 Yongtube기능 실행 영상!

![앱 사용영상](./public/imgs/playYongtube.gif)

---

### Trouble Shooting 🛠️

`🍿 Yongtube` 프로젝트를 진행하면서 발생한 `버그 수정`, `문제 해결`, 기능 구현시 `어려웠던 점 정리`, `성능 개선`, `작업 효율 향상` 들에 관해 정리한 기록입니다.

[프로젝트를 진행시 배운점들 정리](https://www.notion.so/Yongtube-3d505b2b6255438cb3563429e2f7dc9e?pvs=4)

---

### 버그 발생시 ☎️

연락 부탁드립니다. <dydals3440@gmail.com>
