
const {validationResult}=require('express-validator')
let { articles } = require("../data/articles")

const getAllArticles = (req, res) => {
    res.json(articles);
}

const getOneArticle = (req, res) => {
    id = +req.params.articleId
    const article = articles.find((article) => article.id === id)
    if (article === undefined) {
        res.status(404).json("there is no course with this id")
    }
    else {
        res.json(articles[id - 1])
    }
}

const createArticle = (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }
    const article = { id: articles.length + 1, ...req.body }
    articles.push(article)
    res.status(201).json(article)
}

const updateArticle = (req, res) => {

    id = +req.params.articleId
    let article = articles.find((article) => article.id === id)
    if (!article) {
        res.status(404).json("there is no course with this id")
    }
    article = { ...article, ...req.body }
    res.status(200).json(article)
}

const deleteArticle = (req, res) => {
    let id = +req.params.articleId
    let article = articles.find((article) => article.id = id)
    if (!article) {
        return res.status(404).json("no course has this id")
    }
    articles = articles.filter((article) => article.id !== id)
    res.status(200).json(articles)
}

module.exports={
    getAllArticles,
    getOneArticle,
    createArticle,
    updateArticle,
    deleteArticle,
}