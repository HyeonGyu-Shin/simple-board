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

router.get('/:shortId', async (req, res) => {
    try {
        const shortId = req.params.shortId;
        if (shortId === '') {
            throw new Error('shortId를 입력해주세요!');
        }

        const post = await Post.findOne({ shortId });

        res.render('./post/edit', { post });
    } catch (err) {
        next(err);
    }
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

module.exports = router;
