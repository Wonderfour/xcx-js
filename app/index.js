const express = require('express');
const router = express.Router();
let request = require('request');
let config = require('./config');
const pool = require('../sql/mysql');
const userSql = require('../sql/userSql');
const artSql = require('../sql/artSql');

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
          pool.query(userSql.getUserInfoByOpenId(reqRes), function (err,result) {
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

router.get('/getUserInfo',(req,res) => {
  if(req.query.openid){
    pool.query(userSql.getUserInfoByOpenId({openid:req.query.openid}), function (err,result) {
      console.log(result[0].id);
      if(err) throw err;
      const resultData = result[0];
      return res.json({code:0,msg: '获取成功',data:resultData});
    })
  }else{
    return res.json({code:1,msg: 'openid未获取到'});
  }
})

router.get('/inSertUserInfoByOpenId',(req,res) => {
  if(req.query.openid){
    const params = {
      openid:req.query.openid,
      userInfo:req.query.userInfo,
      updateTime:new Date().Format("yyyy-MM-dd hh:mm:ss")
    }
    pool.query(userSql.inSertUserInfoByOpenId(params), function (err,result) {
      console.log(result);
      if(err) throw err;
      return res.json({code:0,msg: '插入用户信息成功'});
    })
  }else{
    return res.json({code:1,msg: '插入用户信息失败'});
  }
})
router.get('/getArticleList',(req,res) => {
  pool.query(artSql.getArticleList(), function (err,list) {
    pool.query(artSql.getArticleListBanner(), function (err,banner) {
      if(list || banner){
        return res.json({code:0,msg: '获取信息成功',data:{list:list,banner:banner}});
      }else{
        throw err
      }
    })

  })
})

router.get('/getArticleDetail',(req,res) => {
  console.log(req.query);
  pool.query(artSql.getArticleListById({id:req.query.id}), function (err,result) {
    console.log(result);
    if(err) throw err;
    return res.json({code:0,msg: '查询成功',data:result[0]});
  })
})
module.exports = router;