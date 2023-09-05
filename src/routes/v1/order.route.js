const express = require("express");
const { orderController } = require('../../controllers');
const { orderValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Create record */
router.post(
    "/order-create",
    validate(orderValidation.createOrder),
    orderController.createOrder
);

/**Get list */
router.get(
    "/order-list",
    orderController.getOrderList
);

/**get record by id */
router.get(
    "/order-details/:orderId",
    orderController.getOrderDetails
);

/**Update record */
router.put(
    "/order-update/:orderId",
    orderController.updateOrder
);

/**Delete record */
router.delete(
    "/delete-order/:orderId",
    orderController.deleteRecord
);

module.exports = router