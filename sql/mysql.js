const mysql = require('mysql');
const pool = mysql.createPool({
    host     : '118.25.74.164',  // 主机名
    port     : 3306, // 数据库连接的端口号 默认是3306
    database : 'it-zhihu', // 需要查询的数据库
    user     : 'root', // 用户名
    password : 'It-zhihu1126' // 密码，我的密码是空。所以是空字符串
});
module.exports = pool