const express = require('express');
const Category = require('../models/category');
const router = express.Router();

//SAVE A CATEGORY IN THE DB
router.post('/', async (req, res) => {
    const category = new Category({
        name: req.body.name
    });

    try {
        const SavedCategory = await category.save();
        res.json(SavedCategory);
    } catch (err) {
        res.json({message: err});
    }
});

//DELETE A CATEGORY FROM THE DB
router.delete('/:CategoryID', async (req, res) => {
    try {
        const Category4Delete = await Category.remove({_id: req.params.CategoryID });
        res.json(Category4Delete);
    } catch (err) {
        res.json({message: err});
    }
});

//GET BACK ALL THE CATEGORIES
router.get('/', async (req, res) => {
    try {
        const Categories = await Category.find();
        res.json(Categories);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;