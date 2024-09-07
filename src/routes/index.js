const express = require('express');
const router = express.Router();
const { articlesRouter } = require('./articles')

router.get('/health', (req, res) => {
  res.status(200).send('OK');
});

router.use('/articles', articlesRouter)

module.exports = router;