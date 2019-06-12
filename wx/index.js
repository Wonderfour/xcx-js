const express = require('express');
const router = express.Router();
const connection = require('../sql/mysql');
let request = require('request');
let config = require('./config');
router.get('/index',(req,res) =>{
  res.send(req);
})
module.exports = router;