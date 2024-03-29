const express = require('express');
const validate = require("../../middlewares/validate");
const { categoryController } = require('../../controllers');
const { categoryValidation } = require('../../validations');

const router = express.Router();

router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);

router.get(
    "/category-list",
    categoryController.getCategoryList
);

router.get(
    "/category-details/:categoryId",
    categoryController.getCategoryDetails
);

router.delete(
    "/delete-category/:categoryId",
    categoryController.deleteRecord
);

router.put(
    "/category-update/:categoryId",
    categoryController.updateCategory
);

module.exports = router