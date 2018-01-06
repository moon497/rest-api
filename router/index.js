/**
 * 
 * @param {*} app express 객체
 * @param {*} fs filesystem 객체
 */
const winston = require(__dirname + '/../config/winston')
const logger = winston()

module.exports = (app, fs) => { // 모듈화
  app.get('/',(req, res, next) => { // /. 접근
    fs.readFile(__dirname + '/.../views/index.html', 'utf8', function (err, data) { // 파일 읽기
      if (err) next(err)
      else {
        logger.info('success')
        res.send(data);
      }
    });      
  })

  app.get('/about',function (req, res, next) { // /about 접근
    fs.readFile(__dirname + '/../views/about.html', 'utf8', function(err, data) { // 파일 읽기
      if (err) next(err)
      else {  // data 경우
        logger.info('success')
        res.send(data);        
      }
    });
  })
}