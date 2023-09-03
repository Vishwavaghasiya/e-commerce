const express = require("express");
const { paymentController } = require('../../controllers');
const { paymentValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Create record */
router.post(
    "/payment-data",
    validate(paymentValidation.createPayment),
    paymentController.createPayment
);

/**Get list */
router.get(
    "/payment-list",
    paymentController.getPaymentList
);

/**get record by id */
router.get(
    "/payment-details/:paymentId",
    paymentController.getPaymentDetails
);

/**Update record */
router.put(
    "/payment-update/:paymentId",
    paymentController.updatePayment
);

/**Delete record */
router.delete(
    "/delete-payment/:paymentId",
    paymentController.deleteRecord
);

module.exports = router