let sql="SELECT x.* FROM C##SCOTT120.XYC_V_TJX_CJXX x WHERE ROWNUM <=3005"
execute(sql).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})