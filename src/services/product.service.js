const { Product } = require("../models");

const createRecord = async (reqBody) => {
    return Product.create(reqBody);
}

const getList = async (req, res) => {
    return Product.find({ $or: [{ is_active: true }] });
}

const deleteRecord = async (productId) => {
    return Product.findByIdAndDelete(productId);
}

const productById = async (productId) => {
    return Product.findById(productId);
}

module.exports = {
    createRecord,
    getList,
    deleteRecord,
    productById
}