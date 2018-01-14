/**
 * @author: moon497@edkim.co
 * @description: 로그 시스템
 */

// 모듈
const moment = require('moment')
const winston = require('winston')
moment.locale('ko')

module.exports = function () {  // 모듈화
  const myConsoleFormat = winston.format.printf(function (info) { // 전용 양식    
    return `[${moment().format('HH:mm:ss')}] ${info.level}: '${info.message}'`;
  });
  
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({ 
        format: winston.format.combine( winston.format.colorize(), myConsoleFormat) // 컬러화&양식
      })
    ]
  });

  return logger
}