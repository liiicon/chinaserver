const Sequelize = require('sequelize');
const db=require('../connect')
module.exports= db.sequelize.define('user',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    }, 
    first_name: {
        type: Sequelize.STRING,       
        allowNull: false,
    },    
    last_name:{
        type: Sequelize.STRING,       
        allowNull: false,
    },         
    email: {
        type: Sequelize.STRING,       
        allowNull: false,
    },                  
 
},{
    timestamps: false               // 不要默认时间戳
});



