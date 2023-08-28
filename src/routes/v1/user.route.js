const express = require("express");
const validate = require("../../middlewares/validate");
const { userController, eComController } = require('../../controllers');
const { userValidation } = require('../../validations');

const router = express.Router();

router.post(
    "/user-data",
    validate(userValidation.createUser),
    userController.createUser
);

router.get(
    "/user-list",
    validate(userValidation.getUserList),
    eComController.getAllList
);

router.delete(
    "/delete-user/:userId",
    userController.deleteUser
);

module.exports = router