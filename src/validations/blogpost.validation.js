const Joi = require('joi');

/** create blogpost */
const createBlogpost = {
    body : Joi.object().keys({
        title : Joi.string().required().trim(),
        content : Joi.string().required().trim(),
        author : Joi.string().required().trim(),
        comments : Joi.string().required().trim(),
        user : Joi.string().required().trim(),
        notification : Joi.string().required().trim()
    }),
};

module.exports = {
    createBlogpost
}