const express = require("express");
const { reviewController } = require('../../controllers');
const { reviewValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Create record */
router.post(
    "/review-data",
    validate(reviewValidation.createReview),
    reviewController.createreview
);

/**Get list */
router.get(
    "/review-list",
    reviewController.getReviewList
);

/**get record by id */
router.get(
    "/review-details/:reviewId",
    reviewController.getReviewDetails
);

/**Update record */
router.put(
    "/review-update/:reviewId",
    reviewController.updateReview
);

/**Delete record */
router.delete(
    "/delete-review/:reviewId",
    reviewController.deleteRecord
);

module.exports = router