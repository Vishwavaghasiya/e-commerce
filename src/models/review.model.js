const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Types.ObjectId,
            ref: "product",
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
        title : {
            type : String,
            trim : true
        },
        description : {
            type : String,
            trim : true
        },
        comments : {
            type: String,
            trim : true
        },
        rating : {
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

const Review = mongoose.model('review' , reviewSchema);
module.exports = Review