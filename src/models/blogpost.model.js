const mongoose = require('mongoose');

const blogpostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true
        },
        content: {
            type: String,
            trim: true
        },
        author: {
            type: String,
            trim: true
        },
        comments: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            trim: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Blogpost = mongoose.model('blogpost', blogpostSchema);
module.exports = Blogpost