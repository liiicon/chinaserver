const express = require('express');

const router = express.Router();
const commodits = require('../model/commodit');

router.get('/test', (req, res) => {

 res.json({code:1})
})

//插入数据
router.get('/insert', (req, res) => {
    const now =new Date()
    // console.log(req.query)
    const commoditData={
        id:parseInt(req.query.id),
        name:req.query.name,
        discription:req.query.discription,
        weight:parseInt(req.query.weight),
    }
    //先查
    // console.log(commoditData.id)
    commodits.findAll({where:{id:commoditData.id}}).then((commodit)=>{
        
        if(!commodit.length){
            commodits.create(commoditData).then(commodit=>{
                res.json({code:200,msg:"success"})
            }).catch(err=>res.send("error:+err"))
        }else{
            //数据库存在
            res.json({status:'commodit already exists'})
        }
    }).catch(err =>res.send('error:'+err))
   })

   //查找信息
   router.get('/queryId', (req, res) => {
       
    const commoditData={
        id:parseInt(req.query.id),
    }
    commodits.findAll({where:{id:commoditData.id}}).then((commodit)=>{
        if (!commodit.length) {
           res.json({status:'commodit不存在'})
            //return;
        }
        else {
            res.send(commodit);
        }
    })
   })
   
module.exports = router;

//删除信息
router.get('/destroy', (req, res) => {
    const commoditData={
        id:parseInt(req.query.id),
    }
    commodits.findAll({where:{id:commoditData.id}}).then((commodit)=>{
        
        if(commodit.length){
            commodits.destroy({where:{id:commoditData.id}}).then(commodit=>{
                res.json({code:200,msg:"success"})
            }).catch(err=>res.send("error:+err"))
        }else{
            //数据库存在
            res.json({status:'commodit no exists'})
        }
    }).catch(err =>res.send('error:'+err))
})

//修改用户信息
router.get('/update', (req, res) => {
    const commoditData={
        id:parseInt(req.query.id),
        name: req.query.name,
        discription: req.query.discription,
        weight: parseInt(req.query.weight),
    }
    commodits.findAll({where:{id:commoditData.id}}).then((commodit)=>{
        
        if(commodit.length){
            commodits.update({name:commoditData.name,discription:commoditData.discription,weight:commoditData.weight},{where:{id:commoditData.id}}).then(commodit=>{
                res.json({code:200,msg:"success"})
            }).catch(err=>res.send("error:+err"))
        }else{
            //数据库存在
            res.json({status:'commodit no exists'})
        }
    }).catch(err =>res.send('error:'+err))
})
