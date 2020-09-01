const Sequelize = require('sequelize');
const sequelize=require('../connect')
const commodit = sequelize.define('commodit',{
    'id': {
        type: Sequelize.CHAR(11),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    }, 
    name: {
        type: Sequelize.STRING,       
        allowNull: false,
    },    
    description:{
        type: Sequelize.STRING,       
        allowNull: false,
    },         
    weight: {
        type: Sequelize.BOOLEAN,       
        allowNull: false,
    },                         
       
 
},{
    timestamps: false               // 不要默认时间戳
});


module.exports = commodit;

