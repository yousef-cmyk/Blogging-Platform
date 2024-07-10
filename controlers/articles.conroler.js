const { validationResult } = require('express-validator');

let mango = require('../models/article.models');

const getAllArticles = async (req, res) => {
        try {
                const articles = await mango.find({})
                res.status(200).json(articles);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
};

const getOneArticle = async (req, res) => {
    const id = req.params.articleId;
    try {
        const article = await mango.findById(id);
        if (!article) {
            res.status(404).json({ error: "No article found with this ID" });
        } else {
            res.json(article);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createArticle = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const article = { ...req.body ,"date":new Date()};
    const saved=new mango(article)
    try {
        await saved.save();
        res.status(201).json(article);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteArticle = async (req, res) => {
    const id = req.params.articleId;
    try {
        await mango.deleteOne({_id:req.params.articleId});
        res.status(200).json({ message: "Article deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateArticle = async (req, res) => {
    const id = req.params.articleId;
    const updated = { ...req.body ,"date":new Date()};
    try {
        const article = await mango.findByIdAndUpdate(id,{$set:updated});
        if (!article) {
            res.status(404).json({ error: "No article found with this ID" });
        } else {
            res.status(200).json(article);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllArticles,
    getOneArticle,
    createArticle,
    deleteArticle,
    updateArticle,
};
