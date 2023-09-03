const { User } = require("../models");

/**Create record */
const createUser = async (reqBody) => {
  return User.create(reqBody);
}

/**Get list */
const getUserList = async (req, res) => {
  return User.find({ $or: [{ is_active: true }] });
}

/**Delete record */
const deleteRecord = async (userId) => {
  return User.findByIdAndDelete(userId);
}

/**Find by id */
const userById = async (userId) => {
  return User.findById(userId);
}

/**Update user */
const updateUser = async (userId, updateRecord) => {
  return User.findByIdAndUpdate(userId, { $set: updateRecord });
}

module.exports = {
  createUser,
  getUserList,
  deleteRecord,
  userById,
  updateUser
}