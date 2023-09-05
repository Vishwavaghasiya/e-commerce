const express = require("express");
const { cartController } = require('../../controllers');
const { cartValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Create record */
router.post(
    "/cart-data",
    validate(cartValidation.createCart),
    cartController.createCart
);

/**Get list */
router.get(
    "/cart-list",
    cartController.getCartList
);

/**get record by id */
router.get(
    "/cart-details/:cartId",
    cartController.getCartDetails
);

/**Update record */
router.put(
    "/cart-update/:cartId",
    cartController.updateCart
);

/**Delete record */
router.delete(
    "/delete-cart/:cartId",
    cartController.deleteRecord
);

module.exports = router