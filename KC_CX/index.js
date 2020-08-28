const express =require('express')
const app =express()
const courseGrade= require('./routers/courseGrade')
const qtest=require('./routers/qtest')
const scheQuery=require('./routers/scheQuery')
const yktQuery=require('./routers/yktQuery')
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

app.use('/courseGrade',courseGrade) //课程成绩
app.use('/qtest',qtest)            
app.use('/scheQuery',scheQuery) //课程查询
app.use('./yktQuery',yktQuery) //一卡通信息查询
app.listen(8088, () => {
    console.log('服务启动','localhost:8088')
})