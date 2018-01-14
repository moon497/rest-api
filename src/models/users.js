sequelize.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  auth: {
    type: Sequelize.INTEGER,
    default:1,
    allowNull: true
  }
}, {
  paranoid: true
});
