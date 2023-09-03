const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Types.ObjectId,
            ref: "product",
        },
        name: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        price: {
            type: String,
            trim: true,
        },
        quantity: {
            type: String,
            trim: true,
        },
        manufacturer: {
            type: String,
            trim: true,
        },
        rating: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Category = mongoose.model("category", categorySchema);
module.exports = Category;