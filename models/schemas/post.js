const { Schema } = require('mongoose');
const shortId = require('./types/shortId');

const postSchema = new Schema(
    {
        shortId,
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            default: 'Anonymous',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = postSchema;
