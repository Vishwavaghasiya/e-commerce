const Joi = require('joi');

/** create notification */
const createNotification = {
    body : Joi.object().keys({
        title : Joi.string().required().trim(),
        content : Joi.number().integer().allow()
    }),
};

module.exports = {
    createNotification
}