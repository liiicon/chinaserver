const Sequelize = require('sequelize')
const sqlConfig = {
    host: "localhost",
    user: "root",
    password: "123",
    database: "smalltext",
    'port': 3306
};

const sequelize = new Sequelize(sqlConfig.database, sqlConfig.user, sqlConfig.password, {
    host: sqlConfig.host,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});
// 测试数据库是否连接成功
sequelize
    .authenticate()
    .then(res => {
        console.log('Connection Success!')
    })
    .catch(err => {
        console.log('Connection Error')
    })
    module.exports = sequelize;