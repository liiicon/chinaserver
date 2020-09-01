const user = require('./model/user.js');
const commodit = require('./model/commodit.js');
const order = require('./model/order.js');
// 同步表结构
user.sync({
    force: true  // 强制同步，先删除表，然后新建
});

order.sync({
    force: true  // 强制同步，先删除表，然后新建
});

commodit.sync({
    force: true  // 强制同步，先删除表，然后新建
});