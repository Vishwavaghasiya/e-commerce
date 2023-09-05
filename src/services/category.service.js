const { Category } = require("../models");

const createCategory = async (reqBody) => {
    return Category.create(reqBody);
}

const getCategoryList = async (req, res) => {
    return Category.find({$or:[{is_active:true}]});
}

const deleteRecord = async (categoryId) => {
    return Category.findByIdAndDelete(categoryId);
}

const categoryById = async (categoryId) => {
    return Category.findById(categoryId);
}

const updateCategory = async (categoryId, updateRecord) => {
    return Category.findByIdAndUpdate(categoryId, { $set: updateRecord });
}

module.exports = {
    createCategory,
    getCategoryList,
    deleteRecord,
    categoryById,
    updateCategory
}