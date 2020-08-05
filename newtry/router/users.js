const express = require('express');

const router = express.Router();
const Users = require('../model/user');

router.get('/test', (req, res) => {

 res.json({code:1})
})

//插入数据
router.get('/insert', (req, res) => {
    const now =new Date()
    // console.log(req.query)
    const userData={
        id:parseInt(req.query.id),
        first_name:req.query.first_name,
        last_name:req.query.last_name,
        email:req.query.email
    }
    //先查
    // console.log(userData.id)
    Users.findAll({where:{id:userData.id}}).then((user)=>{
        
        if(!user.length){
            Users.create(userData).then(user=>{
                res.json({code:200,msg:"success"})
            }).catch(err=>res.send("error:+err"))
        }else{
            //数据库存在
            res.json({status:'user already exists'})
        }
    }).catch(err =>res.send('error:'+err))
   })

   //查找用户信息
   router.get('/queryId', (req, res) => {
       
    const userData={
        id:parseInt(req.query.id),
    }
    Users.findAll({where:{id:userData.id}}).then((user)=>{
        if (!user.length) {
           res.json({status:'用户不存在'})
            //return;
        }
        else {
            res.send(user);
        }
    })
   })
   
module.exports = router;

//删除用户信息
router.get('/destroy', (req, res) => {
    const userData={
        id:parseInt(req.query.id),
    }
    Users.findAll({where:{id:userData.id}}).then((user)=>{
        
        if(user.length){
            Users.destroy({where:{id:userData.id}}).then(user=>{
                res.json({code:200,msg:"success"})
            }).catch(err=>res.send("error:+err"))
        }else{
            //数据库存在
            res.json({status:'user no exists'})
        }
    }).catch(err =>res.send('error:'+err))
})

//修改用户信息
router.get('/update', (req, res) => {
    const userData={
        id:parseInt(req.query.id),
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        email: req.query.email
    }
    Users.findAll({where:{id:userData.id}}).then((user)=>{
        
        if(user.length){
            Users.update({first_name:userData.first_name,last_name:userData.last_name,email:userData.email},{where:{id:userData.id}}).then(user=>{
                res.json({code:200,msg:"success"})
            }).catch(err=>res.send("error:+err"))
        }else{
            //数据库存在
            res.json({status:'user no exists'})
        }
    }).catch(err =>res.send('error:'+err))
})
