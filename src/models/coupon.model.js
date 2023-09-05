const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
        code: {
            type: String,
            trim: true
        },
        discountAmount: {
            type: Number
        },
        //fixed , percentage
        discountType: {
            type: String,
            trim: true
        },
        maxUses: {
            type: Number
        },
        usedCount: {
            type: Number
        },
        minPurchaseAmount: {
            type: Number
        },
        conditions: {
            type: String
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const Coupon = mongoose.model('coupon', couponSchema);
module.exports = Coupon