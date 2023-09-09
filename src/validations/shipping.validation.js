const Joi = require('joi');

/** create shipping */
const createShipping = {
    body : Joi.object().keys({
        address : Joi.string().required().trim(),
        method : Joi.string().required().trim(),
        trackingNumber : Joi.string().required().trim(),
        status : Joi.string().required().trim(),
        notes : Joi.string().required().allow(),
        user : Joi.string().required().allow()
    }),
};

module.exports = {
    createShipping
}