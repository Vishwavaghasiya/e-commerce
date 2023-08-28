const { Product } = require("../models");

const createProduct = async (reqBody) => {
    return Product.create(reqBody);
}

const getProductList = async (req, res) => {
    return Product.find();
}

const deleteRecord = async (productId) => {
    return Product.findByIdAndDelete(productId);
}

const productById = async (productId) => {
    return Product.findById(productId);
}

module.exports = {
    createProduct,
    getProductList,
    deleteRecord,
    productById
}