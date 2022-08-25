const {sequelize, DataTypes} = require('../../config/database')
const Products = require('./product')

const product = Products(sequelize, DataTypes);

module.exports = { product }