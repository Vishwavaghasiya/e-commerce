const { Coupon } = require("../models");

/**Create record */
const createCoupon = async (reqBody) => {
  return Coupon.create(reqBody);
}

/**Get list */
const getCouponList = async (req, res) => {
  return Coupon.find({ $or: [{ is_active: true }] });
}

/**Delete record */
const deleteRecord = async (couponId) => {
  return Coupon.findByIdAndDelete(couponId);
}

/**Find by id */
const couponById = async (couponId) => {
  return Coupon.findById(couponId);
}

/**Update Coupon */
const updateCoupon = async (couponId, updateRecord) => {
  return Coupon.findByIdAndUpdate(couponId, { $set: updateRecord });
}

module.exports = {
  createCoupon,
  getCouponList,
  deleteRecord,
  couponById,
  updateCoupon
}