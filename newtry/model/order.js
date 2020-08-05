const Sequelize = require('sequelize');
const db=require('../connect')
module.exports= db.sequelize.define('order',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    }, 
    order_date: {
        type: Sequelize.DATE,       
        allowNull: false,
    },    
    purchaser:{
        type: Sequelize.STRING,       
        allowNull: false,
    },         
    quantity: {
        type: Sequelize.INTEGER,       
        allowNull: false,
    },                  
    product_id:{
        type: Sequelize.INTEGER,       
        allowNull: false,
    }
 
},{
    timestamps: false               // 不要默认时间戳
});



