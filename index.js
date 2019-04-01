const express = require('express');
const app = express();
const adminRouter = require('./admin/index')
const xcxRouter = require('./app/index')
var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)
app.use('/admin',adminRouter);
app.use('/xcx',xcxRouter);
app.listen('80', () =>{
})
