const express = require('express');
const router = express.Router();
const sqlData = require('../sql/mysql');
let request = require('request');
let config = require('./config');
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
router.get('/login',(req,res,next) =>{
  console.log(req);
  request({
    url:`https://api.weixin.qq.com/sns/jscode2session?appid=${config.APPID}&secret=${config.APPSECRET}&js_code=${req.code}&grant_type=authorization_code`
  })
  res.send('1234'
  );
})
module.exports = router;