const { Shipping } = require("../models");

/**Create record */
const createShipping = async (reqBody) => {
  return Shipping.create(reqBody);
}

/**Get list */
const getShippingList = async (req, res) => {
  return Shipping.find({ $or: [{ is_active: true }] });
}

/**Delete record */
const deleteRecord = async (shippingId) => {
  return Shipping.findByIdAndDelete(shippingId);
}

/**Find by id */
const shippingById = async (shippingId) => {
  return Shipping.findById(shippingId);
}

/**Update Shipping */
const updateShipping = async (shippingId, updateRecord) => {
  return Shipping.findByIdAndUpdate(shippingId, { $set: updateRecord });
}

module.exports = {
  createShipping,
  getShippingList,
  deleteRecord,
  shippingById,
  updateShipping
}