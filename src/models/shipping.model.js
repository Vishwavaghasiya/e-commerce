const mongoose = require('mongoose');

const shippingSchema = new mongoose.Schema(
    {
        address: {
            type: String,
            trim: true
        },
        // (e.g., FedEx, UPS)
        method: {
            type: String,
            trim: true
        },
        trackingNumber: {
            type: String,
            trim: true
        },
        // 'shipped', 'out for delivery', 'delivered', 'cancelled'
        status: {
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

const Shipping = mongoose.model('shipping', shippingSchema);
module.exports = Shipping