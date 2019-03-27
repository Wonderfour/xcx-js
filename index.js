const express = require('express');
const app = express();
const mysql = require('mysql');

const pool = mysql.createPool({
    host     : '127.0.0.1',  // 主机名
    port     : 3306, // 数据库连接的端口号 默认是3306
    database : 'it-zhihu', // 需要查询的数据库
    user     : 'root', // 用户名
    password : 'root1126' // 密码，我的密码是空。所以是空字符串
});
// const sqlData = require('./sql/mysql');
var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)
app.get('/',(req,res) =>{
  pool.getConnection(function (err,connection) { // 使用连接池
    if(err){
        console.log('与MySQL数据库建立连接失败！');
        console.log('错误信息为：' + err);
    }else{
      connection.query();
      console.log('链接成功');
    }});
  res.send('首页数据');
})
app.get('/test',(req,res) =>{
  res.send('hello World');
})
app.get('/about',(req,res) =>{
  res.send('hello World2222');
})

app.listen('3000', () =>{
  console.log('端口号：3000')
})
