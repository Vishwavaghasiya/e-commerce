const { User } = require("../models");

const createRecord = async (reqBody) => {
  return User.create(reqBody);
}

const getList = async (req, res) =>{
  return User.find();
}

const deleteRecord = async (userId) => {
  return User.findByIdAndDelete(userId);
}

const userById = async (userId) => {
  return User.findById(userId);
}

module.exports = {
  createRecord,
  getList,
  deleteRecord,
  userById
}