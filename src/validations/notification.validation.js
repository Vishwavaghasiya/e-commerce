const Joi = require('joi');

/** create notification */
const createNotification = {
    body : Joi.object().keys({
        content : Joi.string().required().trim(),
        title : Joi.string().required().trim(),
        user : Joi.string().required().trim()
    }),
};

module.exports = {
    createNotification
}