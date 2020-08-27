const express = require('express');
const router = express.Router();
var db = require('../connect');
const querySQL=require('../db/querySQL')

router.get('/qtest', async (req, res) => {

    var json = req.query
    if (!json) {
        res.send('参数为空')
    }
    else {
        var arr_key = new Array();
        var brr_value = new Array();
        var i = 0;
        var sql = querySQL.gradeQuery;
        //字符串拼接
        for (var key in json) {
            arr_key[i] = key; 
            brr_value[i] = json[key];           
            sql = sql + arr_key[i] + `='` + brr_value[i] + `' and `
            ++i;
        }

        //去除字符串末尾字符'and'
        sql = sql.substring(0, sql.length - 4);

        try {
            await db.query(sql, function (result) {

                console.log(result);
                res.json(result)
            })
        } catch (error) {
            console.log(error)
        }
    }


})


module.exports = router