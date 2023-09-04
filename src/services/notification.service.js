const { Notification } = require("../models");

/**Create record */
const createNotification = async (reqBody) => {
  return Notification.create(reqBody);
}

/**Get list */
const getNotificationList = async (req, res) => {
  return Notification.find({ $or: [{ is_active: true }] });
}

/**Delete record */
const deleteRecord = async (notificationId) => {
  return Notification.findByIdAndDelete(notificationId);
}

/**Find by id */
const notificationById = async (notificationId) => {
  return Notification.findById(notificationId);
}

/**Update Notification */
const updateNotification = async (notificationId, updateRecord) => {
  return Notification.findByIdAndUpdate(notificationId, { $set: updateRecord });
}

module.exports = {
  createNotification,
  getNotificationList,
  deleteRecord,
  notificationById,
  updateNotification
}