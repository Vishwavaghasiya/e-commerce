const Joi = require('joi');

/** create category */
const createCategory = {
    body : Joi.object().keys({
        name : Joi.string().required().trim(),
        description : Joi.string().required().trim(),
        price : Joi.number().integer().allow(),
        quantity : Joi.string().required().trim(),
        manufacturer : Joi.string().required().trim(),
        rating : Joi.string().required().trim(),
    }),
};

module.exports = {
    createCategory
}