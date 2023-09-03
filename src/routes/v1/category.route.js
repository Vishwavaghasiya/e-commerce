const express = require('express');
const validate = require("../../middlewares/validate");
const { categoryController } = require('../../controllers');
const { categoryValidation } = require('../../validations');

const router = express.Router();

/** create category */
router.post(
    "/create-category",
    validate(categoryValidation.createCategoryValidation),
    categoryController.createCategory
);

router.get(
    "/category-list",
    validate(categoryValidation.getCategoryList),
    categoryController.getCategoryList
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