const express = require("express");
const { userController } = require('../../controllers');
const { userValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Create record */
router.post(
    "/user-data",
    validate(userValidation.createUser),
    userController.createUser
);

/**Get list */
router.get(
    "/user-list",
    userController.getUserList
);

/**get record by id */
router.get(
    "/user-details/:userId",
    userController.getUserDetails
);

/**Update record */
router.put(
    "/user-update/:userId",
    userController.updateUser
);

/**Delete record */
router.delete(
    "/delete-user/:userId",
    userController.deleteRecord
);

module.exports = router