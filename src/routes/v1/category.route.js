const express = require('express');
const validate = require("../../middlewares/validate");
const { categoryController, eComController } = require('../../controllers');
const { categoryValidation } = require('../../validations');

const router = express.Router();

/** create category */
router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);

router.get(
    "/category-list",
    validate(categoryValidation.getCategoryList),
    eComController.getAllList
);

router.delete(
    "/delete-category/:categoryId",
    categoryController.deleteCategory
);

module.exports = router