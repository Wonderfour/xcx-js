var mysql = require('mysql'); // mysql模块 同样可以使用 npm install -g mysql 来全局下载
var pool = mysql.createPool({
    host     : 'localhost',  // 主机名
    port     : 3306, // 数据库连接的端口号 默认是3306
    database : 'it-zhihu', // 需要查询的数据库
    user     : 'root', // 用户名
    password : '' // 密码，我的密码是空。所以是空字符串
});
module.exports = pool