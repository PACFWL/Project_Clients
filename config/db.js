const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('customer_db', 'root', 'PabloWhoLock00', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
