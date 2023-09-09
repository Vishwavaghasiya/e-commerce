const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
        product: {
            type: mongoose.Types.ObjectId,
            ref: "product",
        },
        totalAmount: {
            type: Number
        },
        shippingAddress: {
            type: String,
            trim: true
        },
        // Order status (e.g., "pending," "shipped," "delivered")
        status: {
            type: String,
            trim: true
        },
        payments: {
            type: String,
            trim: true
        },
        notes: {
            type: String,
            trim: true
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

const Order = mongoose.model("order", orderSchema);
module.exports = Order