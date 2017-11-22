let express = require('express');
let bodyParser = require('body-parser')

 let session = require('express-session');

let app = express()

app.use(bodyParser.json());
app.use(session({

    resave:true,
    saveUninitialized:true,
    secret:'1'
}))

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

let users = [];

// 注册
app.post('/signup', function (req, res) {
  console.log(req.method)
    let user = req.body;
    console.log(req.body)
    let oldUser = users.find(item => item.username == user.username);

    if (oldUser) {
        res.json({ code: 1, error: '用户名已经被占用!' });
    } else {
        users.push(user);
        console.log(user)
        res.json({ code: 0, success: '用户注册成功!' });
        
    }
});
//登录
app.post('/login', function (req, res) {
    let user = req.body;
   
    let oldUser = users.find(item => item.username == user.username && item.password == user.password);
    if (oldUser) {
        req.session.user = user;
        res.json({ code: 0, success: '登录成功!', user });
    } else {
        res.json({ code: 1, error: '用户名或密码错误!' });
    }
});

app.post('/reset', function (req, res) {
    let user = req.body;

    let oldUser = users.find(item => item.username == user.username && item.password == user.password);
    if (oldUser) {
        req.session.user = user;
        res.json({ code: 0, success: '登录成功!', user });
    } else {
        res.json({ code: 1, error: '用户名或密码错误!' });
    }
});









