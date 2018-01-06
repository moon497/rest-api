
const winston = require(__dirname + '/winston')
const logger = winston()

module.exports = function (app) {
  // error handling
  app.use(function (err, req, res, next) {
    logger.error(err.stack);
    if (err.code === 'ENOENT') {
      next()
    } else {
      res.send('500 error');      
    }
  });

  app.use(function(err, req, res, next) {
    res.send('fs> no such file or directory')    
  });
}