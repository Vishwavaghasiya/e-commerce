const express = require("express");
const { wishlistController } = require('../../controllers');
const { wishlistValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Create record */
router.post(
    "/wishlist-data",
    validate(wishlistValidation.createWishlist),
    wishlistController.createWishlist
);

/**Get list */
router.get(
    "/wishlist-list",
    wishlistController.getWishlist
);

/**get record by id */
router.get(
    "/wishlist-details/:wishlistId",
    wishlistController.getWishlistDetails
);

/**Update record */
router.put(
    "/wishlist-update/:wishlistId",
    wishlistController.updateWishlist
);

/**Delete record */
router.delete(
    "/delete-wishlist/:wishlistId",
    wishlistController.deleteRecord
);

module.exports = router