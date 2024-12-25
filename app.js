const http = require('http');

// const routes = require('./routes');

// function listener(req, res) {
//     if(req.url = "/"){
//         res.setHeader('Content-Type','application/json');
//         res.end(JSON.stringify({name:'test'}));
//     }
// };

// const server = http.createServer(routes.listener);

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const tesRoutes = require('./routes/tes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(tesRoutes);

app.use('/', (req,res,next) => {
    res.send('Halo');
    // next();
})

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);