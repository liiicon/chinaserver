const express =require('express')
const app =express()
const users = require('./router/users')
const orders = require('./router/orders')
const commodits = require('./router/commodits')
var bodyParser = require('body-parser'); 
//引用bodyParser 这个不要忘了写
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
 });



app.get('/',(req,res)=>{
    res.send('hello express')
})

//post
app.use(express.json())
app.use('/users', users)
app.use('/orders', orders)
app.use('/commodits', commodits)
app.listen(8088, () => {
    console.log('服务启动','localhost:8088')
})