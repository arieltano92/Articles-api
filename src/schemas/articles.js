const Joi = require('joi');

const getNewsByTopicQuerySchema = Joi.object({
  quantity: Joi.number().optional().min(1).max(100),
});

const getNewsByTopicParamsSchema = Joi.object({
  topic: Joi.string().required(),
});

const getNewByTitleSchema = Joi.object({
  title: Joi.string().required(),
});

const getNewsByKeywordsQuerySchema = Joi.object({
  keywords: Joi.string().required(),
  quantity: Joi.number().optional().min(1).max(100),
});


module.exports = { getNewsByKeywordsQuerySchema, getNewsByTopicParamsSchema, getNewByTitleSchema, getNewsByTopicQuerySchema };
