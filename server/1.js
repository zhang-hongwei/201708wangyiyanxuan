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
//重置密码
app.post('/reset', function (req, res) {
    let user = req.body;
    let oldUser = users.forEach(function (itme) {
        if (item.username == user.username) {
            item.password = user.password;

            res.json({
                code: 0,
                success: '密码修改成功!'
            });
        } else {
            res.json({
                code: 1,
                error: '用户名不存在'
            })

        }
    });
});



// 搜索 请求为 /search？str=“要输入的值”
app.get("/search",function (req,res) {
    res.set('Content-Type','application/json');
    let string=req.query.str;
    fs.readFile("./search/search.json","utf8",function (err,data) {
       data=JSON.parse(data);
        let searchProduct=data.filter(item=>{
        return  item.name.indexOf(string) !== -1
        });
        if(searchProduct.length ===0){
            let i=0;
            while (i<4){
                 let random= Math.round(Math.random()*(18-1)+1);
                searchProduct[i]=data[random];
                i++;
            }
            res.json({dataList:searchProduct,message:"很抱歉,没有找到"+string+"商品,为您推荐今日热卖商品",number:1})
        }else{
            res.json({dataList:searchProduct,number:0})
        }
    })
});







app.get('/lesson',function(){

})