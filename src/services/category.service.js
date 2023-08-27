const { Category } = require("../models");

const createRecord = async (reqBody) => {
    return Category.create(reqBody);
}

const getList = async (req, res) => {
    return Category.find({ $or: [{ is_active: true }] });
}

const deleteRecord = async (categoryId) => {
    return Category.findByIdAndDelete(categoryId);
}

const categoryById = async (categoryId) => {
    return Category.findById(categoryId);
}

module.exports = {
    createRecord,
    getList,
    deleteRecord,
    categoryById
}