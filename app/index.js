const express = require('express');
const router = express.Router();
const connection = require('../sql/mysql');
let request = require('request');
let config = require('./config');
router.get('/',(req,res,next) =>{
  res.send('首页数据678899333');
  next();
})
router.get('/login',(req,res) =>{
  res.send(req.query);
  // let userId = '';
  // let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${config.APPID}&secret=${config.APPSECRET}&js_code=${req.params.code}&grant_type=authorization_code`
  // request({
  //   url:url
  // },(error,response,body)=>{
  //   console.log(error);
  //   console.log(body);
  //   let reqRes = JSON.parse(body);
  //   console.log(reqRes.openid)
  //   if(!error && reqRes.openid){
  //     console.log(1);
  //     let insertSql = 'INSERT INTO it_user(openid) SELECT '+reqRes.openid+' FROM DUAL WHERE NOT EXISTS(SELECT openid FROM it_user WHERE openid = '+reqRes.openid+');'
  //     connection.query(insertSql, function (err,result) {
  //       userId = result.insertId;
  //       if(userId){
  //         res.cookie("userId",userId);
  //         res.json({code:'0',msg: '操作成功','userId': userId, openid: body.openid});
  //         return;
  //       }else{
  //         let selectSql = 'SELECT id FROM it_user WHERE openid = '+body.openid
  //         connection.query(selectSql, function (err,result) {
  //           userId = result[0].id;
  //           res.cookie("userId",userId);
  //           res.json({code:'0',msg: '操作成功','userId': userId, openid: body.openid});
  //           return;
  //         });
  //       }
  //     })
  //   }else{
  //     console.log(2);
  //     res.json({code:'1',msg: '操作失败'});
  //   }
  // });
})
module.exports = router;