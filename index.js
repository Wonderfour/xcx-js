const express = require('express');
const app = express();
const cookieParser=require("cookie-parser");
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const adminRouter = require('./admin/index')
const xcxRouter = require('./app/index')
const https = require('https');
const http = require('http');
const fs = require('fs');
require('./utils/Date');

// var myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }
// app.use(myLogger)

const httpsOptions = {
  key: fs.readFileSync('./https/2834889_www.wonderfour.cn.key'),
  cert: fs.readFileSync('./https/2834889_www.wonderfour.cn.pem')
}

httpsServer = https.createServer(httpsOptions,app);
httpServer = http.createServer(app);

app.use(cookieParser());
app.use(multipart());
app.use(bodyParser.json()); //数据JSON类型
app.use(bodyParser.urlencoded({extended:false}));   //解析post请求数据

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});
app.use('/admin',adminRouter);
app.use('/xcx',xcxRouter);

httpsServer.listen(443);
httpServer.listen(80);
