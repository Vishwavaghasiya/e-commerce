const express = require("express");
const { userController } = require('../../controllers');

const router = express.Router();

router.post(
    "/user-data",
    userController.createRecord
);

router.get(
    "/user-list",
    userController.getList
);

router.delete(
    "/delete-user/:userId",
    userController.deleteRecord
);

module.exports = router