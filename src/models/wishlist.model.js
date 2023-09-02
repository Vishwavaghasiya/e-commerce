const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            trim : true
        },
        description : {
            type : String,
            trim : true
        },
        visibility : {
            type : String,
            trim : true
        },
        itemCount : {
            type: Number
        },
        // (e.g., "birthday," "holiday," "favorite products")
        tags : {
            type : String,
            trim : true
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const Wishlist = mongoose.model('wishlist' , wishlistSchema);
module.exports = Wishlist