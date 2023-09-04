const { Cart } = require("../models");

/**Create record */
const createCart = async (reqBody) => {
  return Cart.create(reqBody);
}

/**Get list */
const getCartList = async (req, res) => {
  return Cart.find({ $or: [{ is_active: true }] });
}

/**Delete record */
const deleteRecord = async (cartId) => {
  return Cart.findByIdAndDelete(cartId);
}

/**Find by id */
const cartById = async (cartId) => {
  return Cart.findById(cartId);
}

/**Update Cart */
const updateCart = async (cartId, updateRecord) => {
  return Cart.findByIdAndUpdate(cartId, { $set: updateRecord });
}

module.exports = {
  createCart,
  getCartList,
  deleteRecord,
  cartById,
  updateCart
}