const express = require('express');

const router = express.Router();

let articleControler = require('../controlers/articles.conroler');

const { validation } = require('../middlewares/validationSchema');

router.get('/', articleControler.getAllArticles);

router.get('/:articleId', articleControler.getOneArticle);

router.post('/createArticle', validation(), articleControler.createArticle);

router.patch('/:articleId', articleControler.updateArticle);

router.delete('/:articleId', articleControler.deleteArticle);

module.exports = router;
