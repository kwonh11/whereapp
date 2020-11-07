# Where (위치기반 여행가이드 앱)

### SITE : https://whereapp.ga

---

## 순서
- #### 릴리즈
- #### 소개
- #### 개발자 및 개발기간
- #### 기술 스택
- #### 외부 API
- #### 테스트 환경

---

## ■ 릴리즈 
#### v1.1.1 (20.11.07 예정)
 - 위치기반 주변정보리스트 (placelist)가 동작하지 않던 점 수정 
#### v1.1.0 (20.11.06)
- 필터기능, 주변반경 거리설정기능 추가
- http로 접속시 https로 리다이렉트
- 위치이용동의하지 않을 시 무한로딩문제 해결 -> 2초 timeout 시 기본 주소값 사용 하도록 개선
- 새로고침 시 빈화면 노출되던 문제 수정 -> 루트 라우트 "/" 로 리다이렉트

---

## ■ 소개

사용자의 위치 기반으로 다양한 여행가이드를 제공합니다. Kakao 또는 Google 소셜 로그인을 통하여 게시물의 좋아요 및 댓글을 작성 할 수 있으며, 실시간 채팅 기능을 지원합니다.

---

## ■ 개발자 및 개발기간

- #### 개발 기간

  - 2020/9/1 ~ 2020/10/30

- #### 개발자

  - 권준혁 / [kwonh11](https://github.com/kwonh11)
  - 박금규 / [pgg-dev](https://github.com/pgg-dev)

---

## ■ 기술 스택 및 

- #### 공통

  - axios
  - Socket.IO

- #### Frontend

  - React
  - React-router-dom
  - Redux
  - React-redux
  - Redux-Saga
  - Styled components
  - Material UI
  - Webpack
  - Babel

- #### Backend

  - NodeJs
  - Express
  - Passport
  - Multer

- #### Database

  - MongoDB
  - Mongoose

- #### Web Server
  - AWS lightsail
  - letsencrypt

---

## ■ 외부 API

- Tour API (한국관광공사)
- Kakao OAuth 2.0
- Google OAuth 2.0
- Google Maps API
- Google Places API
- Google Geocoding API
- Google Directions API
- Google Geocoding API

---

## ■ 테스트 환경

- jest
- redux-saga-testing-utils
