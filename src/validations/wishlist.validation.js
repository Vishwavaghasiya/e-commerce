const Joi = require('joi');

/** create wishlist */
const createWishlist = {
    body : Joi.object().keys({
        name : Joi.string().required().trim(),
        description : Joi.string().required().trim(),
        visibility : Joi.string().required().trim(),
        tags : Joi.string().required().trim(),
        user : Joi.string().required().trim(),
        product : Joi.string().required().trim(),
        itemCount : Joi.number().integer().allow()
    }),
};

module.exports = {
    createWishlist
}