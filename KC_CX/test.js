

function stuQuery(sql,json){
    if (!json) {
        res.send('参数为空')
    }
    else {
        console.log(sql)
        console.log(json)
    }

}
const sql='SELECT x.* FROM C##SCOTT120.XYC_V_TJX_CJXX x WHERE '
json={ID: '83196',XQ: '2009-2010-1'}
    stuQuery(sql,json)