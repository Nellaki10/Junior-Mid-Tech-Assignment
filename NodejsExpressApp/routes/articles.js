const express = require('express');
const Article = require('../models/article');
const router = express.Router();

//SAVE AN ARTICLE IN THE DB
router.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        content: req.body.content,
        description: req.body.description,
        category: req.body.category
    });

    try {
        const SavedArticle = await article.save();
        res.json(SavedArticle);
    } catch (err) {
        res.json({message: err});
    }

});

//UPDATE AN ARTICLE FROM THE DB
router.patch('/:ArticleID', async (req, res) => {
    try {
        const Article4Update = await Article.updateOne(
            {_id: req.params.ArticleID }, 
            { $set : { content: req.body.content} });
        res.json(Article4Update);
    } catch (err) {
        res.json({message: err});
    }
});


//DELETE AN ARTICLE FROM THE DB
router.delete('/:ArticleID', async (req, res) => {
    try {
        const Article4Delete = await Article.remove({_id: req.params.ArticleID });
        res.json(Article4Delete);
    } catch (err) {
        res.json({message: err});
    }
});

//GET BACK ALL THE ARTICLES
router.get('/', async (req, res) => {
    try {
        const Articles = await Article.find();
        res.json(Articles);
    } catch (err) {
        res.json({message: err});
    }
});

//GET BACK A SPECIFIC ARTICLE
router.get('/:ArticleID', async (req, res) => {
    try {
        const Article4Search = await Article.findById(req.params.ArticleID);
        res.json(Article4Search);
    } catch (err) {
        res.json({message: err});
    }
});

//GET BACK ARTICLES BY CATEGORY
router.get('/category/:CategoryName', async (req, res) => {
    try {
        const Articles = (await Article.find());
        const ArticlesByCategory = Articles.filter(Article.category == CategoryName)
        res.json(ArticlesByCategory);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;