const { Payment } = require("../models");

/**Create record */
const createPayment = async (reqBody) => {
  return Payment.create(reqBody);
}

/**Get list */
const getPaymentList = async (req, res) => {
  return Payment.find({ $or: [{ is_active: true }] });
}

/**Delete record */
const deleteRecord = async (paymentId) => {
  return Payment.findByIdAndDelete(paymentId);
}

/**Find by id */
const paymentById = async (paymentId) => {
  return Payment.findById(paymentId);
}

/**Update Payment */
const updatePayment = async (paymentId, updateRecord) => {
  return Payment.findByIdAndUpdate(paymentId, { $set: updateRecord });
}

module.exports = {
  createPayment,
  getPaymentList,
  deleteRecord,
  paymentById,
  updatePayment
}