const express = require('express');

const router = express.Router();

router.get('/add-product', (req,res,next) => {
    res.send('<h3>This to add product</h3>');
});

router.post('/product', (req, res, next) => {
    res.redirect('/');
});

module.exports = router;