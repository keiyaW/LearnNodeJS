const app = require('express');

const router = app.Router;

router.get('/tes', (req,res,next) => {
    res.send('Halo Tes GET');
})

router.post('/tes', (req,res,next) => {
    res.send('Halo Tes POST');
})


module.exports = router;