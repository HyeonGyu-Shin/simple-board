const { model } = require('mongoose');
const postSchema = require('./schemas/post');

const post = model('Post', postSchema);

exports.Post = post;
