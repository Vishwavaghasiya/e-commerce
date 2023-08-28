const express = require('express');
const validate = require("../../middlewares/validate");
const { productController } = require('../../controllers');
const { productValidation } = require('../../validations');

const router = express.Router();

/** create product */
router.post(
    "/create-product",
    validate(productValidation.createProduct),
    productController.createProduct
);

router.get(
    "/product-list",
    validate(productValidation.getProductList),
    productController.getProductList
);

router.delete(
    "/delete-product/:productId",
    productController.deleteProduct
);

module.exports = router