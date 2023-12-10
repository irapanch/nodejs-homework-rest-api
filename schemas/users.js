const Joi = require("joi");
const { emailRegexp, allowedSubscriptions } = require("../constants/constants");

const registerSchema = Joi.object({
  email: Joi.string().pattern(new RegExp(emailRegexp)).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(new RegExp(emailRegexp)).required(),
  password: Joi.string().min(6).required(),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...allowedSubscriptions)
    .required(),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().pattern(new RegExp(emailRegexp)).required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  subscriptionSchema,
  verifyEmailSchema,
};
