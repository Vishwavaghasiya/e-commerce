const Joi = require('joi');

/** create blogpost */
const createBlogpost = {
    body : Joi.object().keys({
        status : Joi.string().required().trim(),
        paymentMethod : Joi.string().required().trim(),
        paymentStatus : Joi.string().required().trim(),
        totalAmount : Joi.number().integer().allow()
    }),
};

module.exports = {
    createBlogpost
}