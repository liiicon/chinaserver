// 

const express =require('express')
const app =express()
const users = require('./router/users')
const orders = require('./router/orders')
const commodits = require('./router/commodits')
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