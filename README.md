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

# &nbsp; 시나리오

<br>

## &nbsp; 1. 게시글 작성 흐름

<br>

👉 &nbsp; 게시글 작성을 위한 흐름은 다음과 같다.

1. `/posts?write=true`로 작성페이지 접근

2. `<form action='/posts' method='post'>` 이용해 post 요청 전송

3. `router.post` 이용하여 post 요청 처리

4. `res.redirect` 이용하여 post 완료 처리

<br>

👉 &nbsp; 자 이제 코드로 옮겨보자.

<br>

### &nbsp; 1. `/posts?write=true`로 작성페이지 접근

<br>

👉 &nbsp; 1. 클라이언트에서 '/posts?write=true' url로 GET 요청을 보낸다.

&nbsp; 요청을 받으면 게시글을 입력받을 form을 클라이언트에게 제공해줘야 한다.

<br>

```pug
// ./views/post/edit.pug

extends ../layout

block content
    form(action="/posts", method="post")
        table
            tbody
                tr
                    th 제목
                    td: input(type="text", name="title")
                tr
                    th 내용
                    td: textarea(type="text", name="content")
                tr
                    th 저자
                    td: input(type="text", name="author")
                tr
                   button(type="submit") 게시글 올리기

```

<br>

👉 &nbsp; 2. 클라이언트는 게시글을 입력 후 제출한다. 그러면 서버로 '/posts'로 POST 요청이 온다.

<br>

👉 &nbsp; 3. 라우터에서 '/posts'로 오는 POST 요청을 처리해줘야 한다.

models에서 정의한 Post 모델 인스턴스를 가져온 뒤, Post.create 메서드를 이용하여 DB에 게시글을 저장한다.

<br>

```js
// ./routers/posts.js

const { Router } = require('express');
const { Post } = require('../models');

const router = Router();

router.get('/', (req, res, next) => {
    if (req.query.write) {
        res.render('./post/edit');
        return;
    }
    res.send('posts complete');
});

router.post('/', async (req, res, next) => {
    try {
        const { title, content } = req.body;
        let { author } = req.body;

        if (!title || !content) {
            throw new Error('title과 content를 입력해주세요!');
        }

        if (author === '') author = 'Anonymous';

        await Post.create({
            title,
            content,
            author,
        });

        res.redirect('/');
    } catch (err) {
        next(err);
    }
});
```

<br>

👉 &nbsp; 4. DB에 게시글이 성공적으로 저장이 되면 res.redirect를 통해 성공했다는 메시지를 클라이언트에 보내준다.

<br>

## &nbsp; 2.게시글 수정 흐름

<br>

<br>

## &nbsp; 3.

<br>
