const mysql = require('mysql');
const dbConfig = {
    host     : '59.110.236.42',  // 主机名
    port     : 3306, // 数据库连接的端口号 默认是3306
    database : 'ydd', // 需要查询的数据库
    user     : 'dms', // 用户名
    password : 'Limeng1126!@#$' // 密码，我的密码是空。所以是空字符串
}
const localConfig = {
    host     : 'localhost',  // 主机名
    port     : 3306, // 数据库连接的端口号 默认是3306
    database : 'ydd', // 需要查询的数据库
    user     : 'root', // 用户名
    password : 'root1126' // 密码，我的密码是空。所以是空字符串
}

const pool = mysql.createPool(dbConfig);
function query(sql, callback) {
    pool.getConnection(function (err, connection) {
        if(err) throw err;
        // Use the connection
        connection.query(sql,function (err, results, fields) {
            if(err) throw err;
            //每次查询都会 回调
            callback(err, results);
            //只是释放链接，在缓冲池了，没有被销毁
            connection.release();
        });
    });
}
module.exports.query = query