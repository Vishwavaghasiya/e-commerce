const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
    {
        recipient : {
            type: mongoose.Schema.Types.ObjectId,
            ref : "user"
        },
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