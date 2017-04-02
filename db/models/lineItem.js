'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const LineItem = db.define('lineItems', {
  orderedPrice: {
    type: Sequelize.INTEGER,
    get: function(price){
      return this.getDataValue(price) / 100
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
}, {
  scopes: {
    default: {
      include: [{all: true}]
    }
  }
})


module.exports = LineItem
