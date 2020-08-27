const express = require('express');
const router = express.Router();
var db = require('../connect');

router.get('/test', (req, res) => {
    json= {ID: '83196',XQ: '2009-2010-1'}
    for (var key in Json)
    {
        ACondition.push(key+'='+Json[key]);
    }
    const sCondition=ACondition.join(' and ');
    
})
   
module.exports = router