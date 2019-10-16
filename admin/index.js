const express = require('express');
const router = express.Router();
const pool = require('../sql/mysql');
const adminSql = require('./sql');

router.post('/addArticle',(req,res) =>{
  const params = {
    title:req.body.title,
    content:req.body.content,
    bigPic:req.body.bigPic,
    littlePic:req.body.littlePic,
    isBanner:req.body.isBanner,
    createTime:new Date().Format("yyyy-MM-dd hh:mm:ss"),
    type:req.body.type
  }
  pool.query(adminSql.addArticle(params), function (err,result) {
    if(err){
      return res.json({code:1,msg: '插入失败'});
    }
    return res.json({code:0,msg: '插入成功'});
  });
})
router.get('/getArticleList',(req,res) =>{
  pool.query(adminSql.getArticleList(), function (err,result) {
    console.log(result);
    if(err) throw err;
    return res.json({code:0,msg: '查询成功',data:result});
  });
})
module.exports = router;