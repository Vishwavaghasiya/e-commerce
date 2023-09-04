const { Blogpost } = require("../models");

/**Create record */
const createBlogpost = async (reqBody) => {
  return Blogpost.create(reqBody);
}

/**Get list */
const getBlogpostList = async (req, res) => {
  return Blogpost.find({ $or: [{ is_active: true }] });
};

/**Delete record */
const deleteRecord = async (blogpostId) => {
  return Blogpost.findByIdAndDelete(blogpostId);
}

/**Find by id */
const blogpostById = async (blogpostId) => {
  return Blogpost.findById(blogpostId);
}

/**Update Blogpost */
const updateBlogpost = async (blogpostId, updateRecord) => {
  return Blogpost.findByIdAndUpdate(blogpostId, { $set: updateRecord });
}

module.exports = {
  createBlogpost,
  getBlogpostList,
  deleteRecord,
  blogpostById,
  updateBlogpost
}