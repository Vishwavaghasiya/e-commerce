 const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
    {
        method: {
            type: String,
            trim: true
        },
        amount: {
            type: Number
        },
        transactionId: {
            type: String,
            trim: true
        },
        currency: {
            type: String,
            trim: true
        },
        billingAddress: {
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

const Payment = mongoose.model('payment', paymentSchema);
module.exports = Payment