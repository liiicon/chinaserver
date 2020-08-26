
const express = require('express');
const router = express.Router();


// router.get('/test', (req, res) => {

//  res.json({code:1})
// })
var db = require('./connect');
router.get('/test', (req, res) => {
    var fs=req.query
    console.log(fs)
    let usergrade = {
        id: parseInt(req.query.id),
        XQ: req.query.XQ,
        // KCSX: req.query.KCSX,
        KCMC: req.query.KCMC
    }
    // console.log('111')
    
    if (!usergrade.id || !usergrade.XQ) {
        res.send('请选择学年')
    }
    else if (!usergrade.KCMC) {
        console.log(usergrade.id)
        const sql = `SELECT x.* FROM C##SCOTT120.XYC_V_TJX_CJXX x WHERE id='${usergrade.id}' and XQ='${usergrade.XQ}'`
        console.log(sql)

    try {
        db.query(sql, function (result) {

            console.log(result);
            res.json(result)
        })
    } catch (error) {

    }
      
    }
    else {
        const sql = `SELECT x.* FROM C##SCOTT120.XYC_V_TJX_CJXX x WHERE id='${usergrade.id}' and XQ='${usergrade.XQ}' and KCMC='${usergrade.KCMC}'`
        console.log(sql)

    try {
        db.query(sql, function (result) {

            console.log(result);
            res.json(result)
        })
    } catch (error) {

    }
        
    }
})
// function say(sql){
//     console.log(sql)
//     try {
//         db.query(sql, function (result) {

//             console.log(result);
//             res.json(result)
//         })
//     } catch (error) {

//     }

// }

module.exports = router