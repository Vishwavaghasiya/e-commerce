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
    productController.getProductList
);

router.get(
    "/product-details/:productId",
    productController.getProductDetails
);

router.delete(
    "/delete-product/:productId",
    productController.deleteRecord
);

router.put(
    "/product-update/:productId",
    productController.updateProduct
);

module.exports = router