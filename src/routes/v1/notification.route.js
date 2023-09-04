const express = require("express");
const { notificationController } = require('../../controllers');
const { notificationValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Create record */
router.post(
    "/notification-data",
    validate(notificationValidation.createNotification),
    notificationController.createNotification
);

/**Get list */
router.get(
    "/notification-list",
    notificationController.getNotificationList
);

/**get record by id */
router.get(
    "/notification-details/:notificationId",
    notificationController.getNotificationDetails
);

/**Update record */
router.put(
    "/notification-update/:notificationId",
    notificationController.updateNotification
);

/**Delete record */
router.delete(
    "/delete-notification/:notificationId",
    notificationController.deleteRecord
);

module.exports = router