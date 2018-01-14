/**
 * 
 * @param {*} app express 객체
 * @param {*} fs filesystem 객체
 */
const winston = require(__dirname + '/../config/winston')
const logger = winston()

module.exports = (app, fs) => { // 모듈화
  app.get('/',(req, res, next) => { // /. 접근
    fs.readFile(__dirname + '/../views/index.html', 'utf8', function (err, data) { // 파일 읽기
      if (err) next(err)
      else {
        logger.info('/')
        res.send(data);
      }
    });      
  })

  app.get('/about',function (req, res, next) { // /about 접근
    fs.readFile(__dirname + '/../views/about.html', 'utf8', function(err, data) { // 파일 읽기
      if (err) next(err)
      else {  // data 경우
        logger.info('/about')
        res.send(data);
      }
    });
  })
  
  app.get('/api',function (req, res, next) { // /about 접근
    sequelize.sync()
    .then(() => User.create({
      username: 'janedoe',
      birthday: new Date(1980, 6, 20)
    }))
    .then(jane => {
      res.send(jane)
      });
    });
  })
}