const { Router } = require('express');
const { Post } = require('../models');

const router = Router();

router.get('/', async (req, res, next) => {
    if (req.query.write) {
        res.render('./post/edit');
        return;
    }

    const posts = await Post.find({});

    res.render('./post/list', { posts });
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

router.get('/:shortId', async (req, res, next) => {
    try {
        const { shortId } = req.params;

        const post = await Post.findOne({ shortId });

        if (post === null) {
            throw new Error('게시글을 찾을 수 없습니다.');
        }

        if (req.query.edit) {
            res.render('./post/edit', { post });
            return;
        }

        res.render('./post/view', { post });
    } catch (err) {
        next(err);
    }
});

router.post('/:shortId', async (req, res) => {
    try {
        const { shortId } = req.params;
        const { title, content } = req.body;

        if (!title || !content) {
            throw new Error('title과 content를 입력해주세요!');
        }

        await Post.findOneAndUpdate({ shortId }, { title, content });

        res.redirect(`/posts/${shortId}`);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
