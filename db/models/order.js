'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  status: Sequelize.STRING,
  name: Sequelize.STRING,
  shippingAddress: Sequelize.TEXT,
  shippingMethod: Sequelize.STRING,
  shippingCost: Sequelize.INTEGER,
  totalPrice: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  }
})


module.exports = Order
