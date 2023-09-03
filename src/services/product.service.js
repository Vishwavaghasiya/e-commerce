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

const updateProduct = async (productId, updateRecord) => {
    return Product.findByIdAndUpdate(productId, { $set: updateRecord });
}

module.exports = {
    createProduct,
    getProductList,
    deleteRecord,
    productById,
    updateProduct
}