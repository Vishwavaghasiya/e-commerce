const express = require("express");
const { shippingController } = require('../../controllers');
const { shippingValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Create record */
router.post(
    "/shipping-data",
    validate(shippingValidation.createShipping),
    shippingController.createShipping
);

/**Get list */
router.get(
    "/shipping-list",
    shippingController.getShippingList
);

/**get record by id */
router.get(
    "/shipping-details/:shippingId",
    shippingController.getShippingDetails
);

/**Update record */
router.put(
    "/shipping-update/:shippingId",
    shippingController.updateShipping
);

/**Delete record */
router.delete(
    "/delete-shipping/:shippingId",
    shippingController.deleteRecord
);

module.exports = router