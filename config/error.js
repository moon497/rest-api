
const winston = require(__dirname + '/winston')
const logger = winston()

module.exports = function (app) {
  app.use(function (err, req, res, next) {
    logger.error(err.stack);
    // file error handling
    if (err.code === 'ENOENT') {
      res.status(500).send('fs> no such file or directory')
    // no data
    } else {
      res.status(500).send('500 error');
    }
  });
}