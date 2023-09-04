const Joi = require('joi');

/** create payment */
const createPayment = {
    body : Joi.object().keys({
        method : Joi.string().required().trim(),
        currency : Joi.string().required().trim(),
        transactionId : Joi.string().required().trim(),
        notes : Joi.string().required().trim(),
        billingAddress : Joi.string().required().trim(),
        amount : Joi.number().integer().allow()
    }),
};

module.exports = {
    createPayment
}