const express = require('express');
const router = express.Router();
var db = require('../connect');
const querySQL=require('../db/querySQL')

//一卡通基本信息
router.get('/jiben', async (req, res) => {

    var json = req.query
    sql=queryMdl.queryMdl(querySQL.yktJiben,json);

    try {
        await db.query(sql, function (result) {
            console.log(result);
            res.json(result)
        })
    } catch (error) {
        console.log(error)
    }
    
})
//一卡通统计信息
router.get('/tongji', async (req, res) => {

    var json = req.query
    sql=queryMdl.queryMdl(querySQL.yktTongji,json);

    try {
        await db.query(sql, function (result) {
            console.log(result);
            res.json(result)
        })
    } catch (error) {
        console.log(error)
    }
    
})
//一卡通消费信息
router.get('/xiaofei', async (req, res) => {

    var json = req.query
    sql=queryMdl.queryMdl(querySQL.yktXiaofei,json);

    try {
        await db.query(sql, function (result) {
            console.log(result);
            res.json(result)
        })
    } catch (error) {
        console.log(error)
    }
    
})


module.exports = router