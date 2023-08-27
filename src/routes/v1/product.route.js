const express = require('express');
const {productController} = require('../../controllers');

const router = express.Router();

/** create product */
router.post(
    "/create-product",
    productController.createRecord
);

router.get(
    "/product-list",
    productController.getList
);

router.delete(
    "/delete-product/:productId",
    productController.deleteRecord
);

module.exports = router