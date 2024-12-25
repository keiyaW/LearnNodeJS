const express = require('express');

const router = express.Router();

router.get('/tes', (req,res,next) => {
    res.send('Halo Tes GET');
})

router.post('/tes', (req,res,next) => {
    res.send('Halo Tes POST');
})


module.exports = router;