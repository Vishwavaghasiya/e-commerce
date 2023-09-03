const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        order: {
            type: mongoose.Types.ObjectId,
            ref: 'order'
        },
        wishlist: {
            type: mongoose.Types.ObjectId,
            ref: 'wishlist'
        },
        review: {
            type: mongoose.Types.ObjectId,
            ref: 'review'
        },
        userName: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
            trim: true,
        },
        firstName: {
            type: String,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
        },
        dateOfBirth: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const User = mongoose.model("users", userSchema);
module.exports = User;