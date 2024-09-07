const axios = require('axios')
const { GNEWS_API_URI, GNEWS_API_KEY } = require('../config') 

const getArticlesByKeywords = async (keywordsArray, quantity = 100) => {
    const { data : { articles = [] }} = await axios.get(`${GNEWS_API_URI}/search?q=${keywordsArray.join(' AND ')}&max=${quantity}&apikey=${GNEWS_API_KEY}`)
    return articles
}

const getArticlesByTopic = async (topic, quantity = 100) => {
    const { data : { articles = [] }} = await axios.get(`${GNEWS_API_URI}/search?q=${topic}&max=${quantity}&apikey=${GNEWS_API_KEY}`)
    return articles
}

const getArticleByPropertie = async (propValue, prop = 'title', quantity = 1) => {
    const { data : { articles = [] }} = await axios.get(`${GNEWS_API_URI}/search?q="${propValue}"&in=${prop}&max=${quantity}&apikey=${GNEWS_API_KEY}`)
    const [ article = null ] = articles
    return article
}

module.exports = {
    getArticlesByKeywords,
    getArticlesByTopic,
    getArticleByPropertie
}