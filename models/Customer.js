const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Customer = sequelize.define('Customer', {
  nome: { type: DataTypes.STRING, allowNull: false },
  telefone: { type: DataTypes.STRING },
  origem: { type: DataTypes.STRING },
  dataDoContacto: { type: DataTypes.DATE },
  observacao: { type: DataTypes.TEXT }
});

module.exports = Customer;
