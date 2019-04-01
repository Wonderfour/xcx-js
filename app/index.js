const express = require('express');
const router = express.Router();
const sqlData = require('../sql/mysql');
router.get('/',(req,res) =>{
  sqlData.getConnection(function (err,connection) { // 使用连接池
    if(err){
        console.log('与MySQL数据库建立连接失败！');
        console.log('错误信息为：' + err);
    }else{
      connection.query();
      console.log('链接成功');
    }});
  res.send('首页数据678899');
})
module.exports = router;