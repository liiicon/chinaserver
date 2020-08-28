const express = require('express');
const router = express.Router();
var db = require('../connect');
const querySQL=require('../db/querySQL')
const queryMdl=require('./queryMdl')
router.get('/qtest',async (req, res) => {

    var json = req.query
    sql=queryMdl.queryMdl(querySQL.gradeQuery,json);

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