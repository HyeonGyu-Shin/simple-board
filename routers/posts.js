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

module.exports = router;
