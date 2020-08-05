const express = require('express');

const router = express.Router();
const orders = require('../model/order');

router.get('/test', (req, res) => {

 res.json({code:1})
})

//插入数据
router.get('/insert', (req, res) => {
    const now =new Date()
    // console.log(req.query)
    const orderData={
        id:parseInt(req.query.id),
        order_date:req.query.order_date,
        purchaser:req.query.purchaser,
        quantity:parseInt(req.query.quantity),
        product_id:parseInt(req.query.product_id)
    }
    //先查
    // console.log(orderData.id)
    orders.findAll({where:{id:orderData.id}}).then((order)=>{
        
        if(!order.length){
            orders.create(orderData).then(order=>{
                res.json({code:200,msg:"success"})
            }).catch(err=>res.send("error:+err"))
        }else{
            //数据库存在
            res.json({status:'order already exists'})
        }
    }).catch(err =>res.send('error:'+err))
   })

   //查找信息
   router.get('/queryId', (req, res) => {
       
    const orderData={
        id:parseInt(req.query.id),
    }
    orders.findAll({where:{id:orderData.id}}).then((order)=>{
        if (!order.length) {
           res.json({status:'order不存在'})
            //return;
        }
        else {
            res.send(order);
        }
    })
   })
   
module.exports = router;

//删除信息
router.get('/destroy', (req, res) => {
    const orderData={
        id:parseInt(req.query.id),
    }
    orders.findAll({where:{id:orderData.id}}).then((order)=>{
        
        if(order.length){
            orders.destroy({where:{id:orderData.id}}).then(order=>{
                res.json({code:200,msg:"success"})
            }).catch(err=>res.send("error:+err"))
        }else{
            //数据库存在
            res.json({status:'order no exists'})
        }
    }).catch(err =>res.send('error:'+err))
})

//修改用户信息
router.get('/update', (req, res) => {
    const orderData={
        id:parseInt(req.query.id),
        order_date: req.query.order_date,
        purchaser: req.query.purchaser,
        quantity: parseInt(req.query.quantity),
        product_id:parseInt(req.query.product_id)
    }
    orders.findAll({where:{id:orderData.id}}).then((order)=>{
        
        if(order.length){
            orders.update({order_date:orderData.order_date,purchaser:orderData.purchaser,quantity:orderData.quantity,product_id:orderData.product_id},{where:{id:orderData.id}}).then(order=>{
                res.json({code:200,msg:"success"})
            }).catch(err=>res.send("error:+err"))
        }else{
            //数据库存在
            res.json({status:'order no exists'})
        }
    }).catch(err =>res.send('error:'+err))
})
