const express = require('express');
const router = express.Router();
let request = require('request');
let config = require('./config');
const pool = require('../sql/mysql');
const userSql = require('../sql/userSql');

router.get('/',(req,res,next) =>{
  res.send('小程序后台');
})

router.get('/login',(req,res) =>{
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${config.APPID}&secret=${config.APPSECRET}&js_code=${req.query.code}&grant_type=authorization_code`
  request({
    url:url
  },(error,response,body)=>{
    let reqRes = JSON.parse(body);
    if(!error && reqRes.openid){
      reqRes.create_time = new Date().Format("yyyy-MM-dd hh:mm:ss");
      reqRes.unionid = reqRes.unionid ? reqRes.unionid : '';
      pool.query(userSql.insertUser(reqRes), function (err,result) {
        if(err) throw err;
        if(result.insertId){
          res.cookie("userId",result.insertId);
          res.cookie("openid",reqRes.openid);
          return res.json({code:0,msg: '操作成功','userId': result.insertId, 'openid':reqRes.openid});
        }else{
          pool.query(userSql.getUserById(reqRes), function (err,result) {
            res.cookie("userId",result[0].id);
            res.cookie("openid",reqRes.openid);
            return res.json({code:0,msg: '操作成功','userId': result[0].id, 'openid': reqRes.openid});
          });
        }
      })
    }else{
      return res.json({code:1,msg: '操作失败'});
    }
  });
})
module.exports = router;