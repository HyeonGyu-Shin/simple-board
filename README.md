<br>

# 💬 &nbsp; 서비스 소개

<br>

👉 &nbsp; 간단한 게시판입니다.

&nbsp; Elice 3기 SW Enginneer Track 7주차 Node 수업에서 나온 게시판 예제를 요구사항을 정의하고 다시 한 번 구현해보려는 목적으로 만들었습니다.

<br>

# 💬 &nbsp; 멤버

<br>

| backend |
| :-----: |
|  현규   |

<br>

# ⚙️ &nbsp; 기술 스택

<br>

## 백엔드

<br>

<img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/> &nbsp;
<img src="https://img.shields.io/badge/-Express-000?style=flat&logo=Express&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/-Pug-000?style=flat&logo=Pug&logoColor=white"/> &nbsp;
<img src="https://img.shields.io/badge/-MongoDB-71,162,72?style=flat&logo=MongoDB&logoColor=black"/> &nbsp;

<br>

&nbsp; Language | Javascript

&nbsp; Library | Express

&nbsp; Data | Mongoose

&nbsp; DB | MongoDB

&nbsp; ViewEngine | Pug

<br>

# 🎬 &nbsp; 시나리오

<br>

## &nbsp; 1. 게시글 작성 흐름

<br>

👉 &nbsp; 게시글 작성을 위한 흐름은 다음과 같다.

1. `/posts?write=true`로 작성페이지 접근

2. `<form action='/posts' method='post'>` 이용해 post 요청 전송

3. `router.post` 이용하여 post 요청 처리

4. `res.redirect` 이용하여 post 완료 처리

<br>

## &nbsp; 2.게시글 목록 및 상세 흐름

<br>

👉 &nbsp; 게시글 목록 및 상세 흐름은 다음과 같다.

1. `/posts`로 목록 페이지 접근

2. `<a href='/posts/:shortId'>` 이용하여 상세 URL Link

3. `router.get('/:shortId') path parameter` 이용하여 요청 처리

<br>

<br>

## &nbsp;

<br>
