const { Wishlist } = require("../models");

/**Create record */
const createWishlist = async (reqBody) => {
  return Wishlist.create(reqBody);
}

/**Get list */
const getWishlistList = async (req, res) => {
  return Wishlist.find({ $or: [{ is_active: true }] });
}

/**Delete record */
const deleteRecord = async (wishlistId) => {
  return Wishlist.findByIdAndDelete(wishlistId);
}

/**Find by id */
const wishlistById = async (wishlistId) => {
  return Wishlist.findById(wishlistId);
}

/**Update Wishlist */
const updateWishlist = async (wishlistId, updateRecord) => {
  return Wishlist.findByIdAndUpdate(wishlistId, { $set: updateRecord });
}

module.exports = {
  createWishlist,
  getWishlistList,
  deleteRecord,
  wishlistById,
  updateWishlist
}