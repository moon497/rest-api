/**
 * @author: moon497@edkim.co
 * @description: 서버 실행 영역
 */

// import
const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()
const router = require('./router')
const errorHandler = require('./config/error') 

// setting view Engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// run
router(app, fs)

errorHandler(app)

app.listen(8000, function() {
  console.log('App listening on port 8000!');
})