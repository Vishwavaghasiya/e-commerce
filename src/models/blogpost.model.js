const mongoose = require('mongoose');

const blogpostSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
        notification: {
            type: mongoose.Types.ObjectId,
            ref: "notification",
        },
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
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Blogpost = mongoose.model('blogpost', blogpostSchema);
module.exports = Blogpost