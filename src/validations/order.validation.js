const Joi = require('joi');

/** create order */
const createOrder = {
    body : Joi.object().keys({
        shippingAddress : Joi.string().required().trim(),
        status : Joi.string().required().trim(),
        payments : Joi.string().required().trim(),
        notes : Joi.string().required().trim(),
        totalAmount : Joi.number().integer().allow()
    }),
};

module.exports = {
    createOrder
}