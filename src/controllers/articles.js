const articlesServices = require('../services/articles')
const { notFoundError } = require('../errors')

exports.getArticlesByKeywords = async (req, res, next) => {
  try {
      const { keywords, quantity = 100 } = req.query
      console.log(`Searching news with keywords "${keywords}"`)
      const articles = await articlesServices.getArticlesByKeywords(keywords.split(','), quantity)
      res.status(200).send({ articles });
  } catch (err) {
    console.log(`Error getting news`, err);
    next(err);
  }
};

exports.getArticlesByTopic = async (req, res, next) => {
    try {
        const { quantity } = req.query
        const { topic } = req.params
        console.log(`Searching news for topic "${topic}"`)
        const articles = await articlesServices.getArticlesByTopic(topic, quantity)
        res.status(200).send({ articles });
    } catch (err) {
      console.log(`Error getting news`, err);
      next(err);
    }
};

exports.getNewsByTitle = async (req, res, next) => {
  try {
      const { title } = req.params
      console.log(`Searching new with title "${title}"`)
      const article = await articlesServices.getArticleByPropertie(title)
      if( !article ) return next(notFoundError("Article not found"))
      res.status(200).send({ article });
  } catch (err) {
    console.log(`Error getting news`, err);
    next(err);
  }
};