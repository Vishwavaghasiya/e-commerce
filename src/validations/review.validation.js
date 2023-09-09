const Joi = require('joi');

/** create review */
const createReview = {
    body : Joi.object().keys({
        title : Joi.string().required().trim(),
        product : Joi.string().required().trim(),
        user : Joi.string().required().trim(),
        description : Joi.string().required().trim(),
        comments : Joi.string().required().trim(),
        rating : Joi.string().required().trim()
    }),
};

module.exports = {
    createReview
}