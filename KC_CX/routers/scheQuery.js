const express = require('express');
const router = express.Router();
var db = require('../connect');
const querySQL=require('../db/querySQL')
router.get('/schedule', async (req, res) => {
    var json = req.query
    sql=queryMdl.queryMdl(querySQL.yktJiben,json);

    try {
        db.query(sql, function (result) {
            console.log(result);
            res.json(result)
        })
    } catch (error) {
        console.log(error)
    }
    
})
   
module.exports = router