let express = require('express');
// let bodyParser = require('body-parser');
// let session = require('express-session');
let app = express()

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', "true");
    if (req.method == 'OPTIONS') {
        res.end();
    } else {
        next();
    }
})

app.listen(3000)

let sliders = require('./mock/sliders')

app.get('/sliders',function(req,res){
res.json(sliders)
})











