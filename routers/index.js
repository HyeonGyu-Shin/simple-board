const { Router } = require('express');
const postsRouter = require('./posts');

const router = Router();

router.use('/posts', postsRouter);

router.get('/', (req, res) => {
    res.redirect('/posts');
});

module.exports = router;
