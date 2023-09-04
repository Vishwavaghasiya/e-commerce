const express = require("express");
const { couponController } = require('../../controllers');
const { couponValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Create record */
router.post(
    "/coupon-data",
    validate(couponValidation.createCoupon),
    couponController.createCoupon
);

/**Get list */
router.get(
    "/coupon-list",
    couponController.getCouponList
);

/**get record by id */
router.get(
    "/coupon-details/:couponId",
    couponController.getCouponDetails
);

/**Update record */
router.put(
    "/coupon-update/:couponId",
    couponController.updateCoupon
);

/**Delete record */
router.delete(
    "/delete-coupon/:couponId",
    couponController.deleteRecord
);

module.exports = router