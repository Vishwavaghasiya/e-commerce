const { Review } = require("../models");

/**Create record */
const createReview = async (reqBody) => {
  return Review.create(reqBody);
}

/**Get list */
const getReviewList = async (req, res) => {
  return Review.find({ $or: [{ is_active: true }] });
}

/**Delete record */
const deleteRecord = async (reviewId) => {
  return Review.findByIdAndDelete(reviewId);
}

/**Find by id */
const reviewById = async (reviewId) => {
  return Review.findById(reviewId);
}

/**Update Review */
const updateReview = async (reviewId, updateRecord) => {
  return Review.findByIdAndUpdate(reviewId, { $set: updateRecord });
}

module.exports = {
  createReview,
  getReviewList,
  deleteRecord,
  reviewById,
  updateReview
}