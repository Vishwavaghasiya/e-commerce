const { notificationService } = require("../services");

/** create notification record */
const createNotification = async (req, res) => {
    try {
        const reqBody = req.body;

        const notification = await notificationService.createNotification(reqBody);
        if (!notification) {
            throw new Error("Something wents wrong , please try again or later !!");
        }

        res.status(200).json({
            success: true,
            message: "Your data create successfully !!"
        });
    } catch (error) {
        res.status(400).json({ success: fasle, message: error.message });
    }
}

/** get list */
const getNotificationList = async (req, res) => {
    try {
        const getList = await notificationService.getNotificationList(req, res);

        res.status(200).json({
            success: true,
            message: "Your notification list create successfullYyy !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
}

/**get notification by id */
const getNotificationDetails = async (req, res) => {
    try {
        const getDetails = await notificationService.notificationById(req.params.notificationId);
        if (!getDetails) {
            throw new Error("notification not Found !");
        }

        res.status(200).json({
            success: true,
            message: "Your record is successfully get by id !",
            data: { getDetails }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**Update notification */
const updateNotification = async (req, res) => {
    try {
        const notificationId = req.params.notificationId;

        const notificationEx = await notificationService.notificationById(notificationId);
        if (!notificationEx) {
            throw new Error("notification not found !");
        }

        await notificationService.updateNotification(notificationId, req.body);

        res.status(200).json({
            success: true,
            message: "Your notification record is update successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const notificationId = req.params.notificationId;

        const notificationExist = await notificationService.getNotificationList(notificationId);
        if (!notificationExist) {
            throw new Error("Notification not found");
        }

        await notificationService.deleteRecord(notificationId);

        res.status(200).json({
            success: true,
            message: "Your record delete successfully !!"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    createNotification,
    getNotificationList,
    getNotificationDetails,
    updateNotification,
    deleteRecord
}