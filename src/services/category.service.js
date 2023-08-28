const { Category } = require("../models");

const createCategory = async (reqBody) => {
    return Category.create(reqBody);
}

const getCategoryList = async (req, res) => {
    return Category.find();
}

const deleteRecord = async (categoryId) => {
    return Category.findByIdAndDelete(categoryId);
}

const categoryById = async (categoryId) => {
    return Category.findById(categoryId);
}

module.exports = {
    createCategory,
    getCategoryList,
    deleteRecord,
    categoryById
}