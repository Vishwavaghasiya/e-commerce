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

/** get category */
const getCategoryList = {
    query : Joi.object().keys({
        search : Joi.string().required().trim(),
        sortBy : Joi.string().required().trim(),
        limit : Joi.string().required().trim(),
        page : Joi.string().required().trim()
    }),
};

module.exports = {
    createCategory,
    getCategoryList
}