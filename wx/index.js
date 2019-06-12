const express = require('express');
const router = express.Router();
const connection = require('../sql/mysql');
let request = require('request');
let config = require('./config');
router.get('/index',(req,res) =>{
  console.log(req.query);
  let signature = req.query.signature;
  let timestamp = req.query.timestamp;
  let nonce = req.query.nonce;
  res.send(req.query);
})
function checkSignature (signature,timestamp,nonce){
  let tempArr = [timestamp];
  tempArr.push(nonce);
  this
}
module.exports = router;