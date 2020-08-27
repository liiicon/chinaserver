const express = require('express');
const router = express.Router();
var db = require('./connect');

router.get('/qtest', async (req, res) => {
    var json = req.query
    var arr = new Array();
    var brr = new Array();
    var i = 0;
    for (var key in json) {

        //获取key值放入数组arr
        arr[i] = key;
        console.log(arr[i]);
        //获取对应的value值放入数组brr
        brr[i] = json[key];
        console.log(brr[i]);
        ++i;
    }
    console.log(i);
    var sql = `SELECT x.* FROM C##SCOTT120.XYC_V_TJX_CJXX x WHERE`;
    var a = 0;
    var b = 0;
//字符串拼接
    for (m = 0; m < i; m++) {
        a = arr[m];
        var x = String(a)
        b = brr[m];
        var y = String(b)
        sql = sql+`\xa0` + x + `=` + `\'` + y + `\'` + `\xa0` + `and`
    }
    //去除字符串末尾字符'and'
    sql = sql.substring(0, sql.length - 4);
    
    console.log(sql)
    console.log(typeof sql)
    
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