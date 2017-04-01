'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  status: Sequelize.STRING,
  name: Sequelize.STRING,
  shippingAddress: Sequelize.TEXT,
  shippingOption: Sequelize.STRING,
  totalPrice: {
    type: Sequelize.DECIMAL,
    defaultValue: 0
  }
})


module.exports = Order
