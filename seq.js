const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'community', 
  'root', 
  '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

const User = sequelize.define('users', {
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

sequelize.sync()
  .then(() => User.create({
    email: 'moon497',
    password: 'secret'
  }))
  .then(data => {
    console.log(data.toJSON());
  });
