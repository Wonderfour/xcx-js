const express = require('express');
const app = express();
const cookieParser=require("cookie-parser");
const adminRouter = require('./admin/index')
const xcxRouter = require('./app/index')
const wxRouter = require('./wx/index')
const https = require('https');
const http = require('http');
const fs = require('fs');
require('./utils/Date')

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
app.use('/admin',adminRouter);
app.use('/xcx',xcxRouter);
app.use('/wx',wxRouter);

httpsServer.listen(443);
httpServer.listen(80);
