const express = require("express");
const { eComListController } = require("../../controllers");

const router = express.Router();

/* Get all list */
router.get(
    "/e-comList",
    eComListController.getAllList
);

module.exports = router;