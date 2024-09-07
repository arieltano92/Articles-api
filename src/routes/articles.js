const express = require('express');
const expressCache = require("cache-express");
const { validateReqData } = require('../middlewares/validations')
const { getNewsByTopicQuerySchema, getNewByTitleSchema, getNewsByTopicParamsSchema, getNewsByKeywordsQuerySchema } = require('../schemas/articles')
const articlesRouter = express.Router();
const articlesController = require('../controllers/articles')
const { QUERY, PARAMS } = require('../utils/constants');

const getCache = expressCache({
	timeOut: 40000,
	onTimeout: () => {
		console.log(`Cache removed`);
	},
});


/**
 * @swagger
 * /articles/news:
 *   get:
 *     summary: Get N news articles by keywords.
 *     description: Get N news articles with all the keywords included.
 *     parameters:
 *       - in: query
 *         name: keywords
 *         schema:
 *           type: string
 *         required: true
 *         description: keywords separated by ","
 *       - in: query
 *         name: quantity
 *         schema:
 *           type: number
 *         required: false
 *         description: quantity of articles to retrieve
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Params bad request
 *       '500':
 *         description: Internal server error
 */
articlesRouter.get('/news', getCache, validateReqData(getNewsByKeywordsQuerySchema, QUERY), articlesController.getArticlesByKeywords)




/**
 * @swagger
 * /articles/news/topic/{topic}:
 *   get:
 *     summary: Get N news articles by topic.
 *     description: Get N news articles by topic.
 *     parameters:
 *       - in: path
 *         name: topic
 *         schema:
 *           type: string
 *         required: true
 *         description: topic description
 *       - in: query
 *         name: quantity
 *         schema:
 *           type: number
 *         required: false
 *         description: quantity of articles to retrieve
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Params bad request
 *       '500':
 *         description: Internal server error
 */
articlesRouter.get('/news/topic/:topic', getCache, validateReqData(getNewsByTopicQuerySchema, QUERY),  validateReqData(getNewsByTopicParamsSchema, PARAMS), articlesController.getArticlesByTopic)

/**
 * @swagger
 * /articles/news/title/{title}:
 *   get:
 *     summary: Get an article by title.
 *     description: Get an article by title.
 *     parameters:
 *       - in: path
 *         name: title
 *         schema:
 *           type: string
 *         required: true
 *         description: Article title
 *     responses:
 *       '200':
 *         description: A successful response
 *       '400':
 *         description: Params bad request
 *       '404':
 *         description: Params bad request
 *       '500':
 *         description: Internal server error
 */
articlesRouter.get('/news/title/:title', getCache, validateReqData(getNewByTitleSchema, PARAMS), articlesController.getNewsByTitle)


module.exports = { articlesRouter }