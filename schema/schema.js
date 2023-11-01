const Joi = require("joi");

const authSchema = {
  "/auth/signup": Joi.object().keys({
    name: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: {
          allow: true,
        },
      })
      .required(),
    password: Joi.string().required(),
  }),

  "/auth/login": Joi.object().keys({
    emailOrUserName: Joi.string().required(),
    password: Joi.string().required(),
  }),
};


const bookSchema = {
  "/books/add": Joi.object().keys({
    title: Joi.string().required(),
    author: Joi.string().required(),
    summary: Joi.string().required(),
  }),

  "/books/:id/update": Joi.object().keys({
    title: Joi.string(),
    author: Joi.string(),
    summary: Joi.string(),
  }),

  "/books/:id": Joi.object().keys({
    id: Joi.string().hex().length(24).required(),
  }),
};


module.exports = {
  authSchema,
  bookSchema,
};
