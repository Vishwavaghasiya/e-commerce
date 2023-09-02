const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true
        },
        content: {
            type: String,
            trim: true
        },
        isRead: {
            type: Boolean,
            default: false
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Notification = mongoose.model('notification', notificationSchema);
module.exports = Notification