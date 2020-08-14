const express =require('express')
const app =express()
const query= require('./query')

app.use('/query', query)
app.listen(8088, () => {
    console.log('服务启动','localhost:8088')
})