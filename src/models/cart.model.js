const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
        // 'pending', 'processing', 'shipped', 'delivered', 'cancelled'
        status : {
            type : String,
            trim : true
        },
        paymentMethod : {
            type : String,
            trim : true
        },
        paymentStatus : {
            type : String,
            trim : true
        },
        totalAmount : {
            type : Number
        }
    }
);

const Cart = mongoose.model('cart' , cartSchema);
module.exports = Cart