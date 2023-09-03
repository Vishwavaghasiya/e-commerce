const express = require("express");
const { blogpostController } = require('../../controllers');
const { blogpostValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Create record */
router.post(
    "/blogpost-data",
    validate(blogpostValidation.createBlogpost),
    blogpostController.createBlogpost
);

/**Get list */
router.get(
    "/blogpost-list",
    blogpostController.getBlogpostList
);

/**get record by id */
router.get(
    "/blogpost-details/:blogpostId",
    blogpostController.getBlogpostDetails
);

/**Update record */
router.put(
    "/blogpost-update/:blogpostId",
    blogpostController.updateBlogpost
);

/**Delete record */
router.delete(
    "/delete-blogpost/:blogpostId",
    blogpostController.deleteRecord
);

module.exports = router