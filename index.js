/**
 * @author: moon497@edkim.co
 * @description: 서버 실행 영역
 */

// import
const express = require('express')
const fs = require('fs')
const app = express()
const router = require('./router')
const errorHandler = require('./config/error') 

// run
router(app, fs)

errorHandler(app)

app.listen(80, function() {
  console.log('App listening on port 80!');
})