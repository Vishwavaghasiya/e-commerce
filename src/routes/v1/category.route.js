const express = require('express');
const {categoryController} = require('../../controllers');

const router = express.Router();

/** create category */
router.post(
    "/create-category",
    categoryController.createRecord
);

router.get(
    "/category-list",
    categoryController.getList
);

router.delete(
    "/delete-category/:categoryId",
    categoryController.deleteRecord
);

module.exports = router