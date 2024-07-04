const express=require('express')

const router=express.Router()

router.get('/articles', articleControler.getAllArticles);

router.get('/articles/:articleId', articleControler.getOneArticle)

router.post('/createArticle',
    [
        body('title')
            .notEmpty()
            .withMessage("title can't be empty"),
        body('description')
            .notEmpty(),
        body('date')
            .notEmpty()
    ], articleControler.createArticle)


router.patch('/articles/:articleId', articleControler.updateArticle)

router.delete("/articles/:articleId", articleControler.deleteArticle)