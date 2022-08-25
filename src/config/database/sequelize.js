const configDB = require('./config');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(configDB)

module.exports = {sequelize, DataTypes};