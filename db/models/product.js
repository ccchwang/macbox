'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: Sequelize.TEXT,
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.STRING,
    defaultValue: 1,
  },
  imgUrl: Sequelize.STRING,
  averageRating: Sequelize.INTEGER,
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
}, {
  getterMethods: {
    formattedPrice: function(){
      return (this.price / 100).toFixed(2)
    }
  }
})



module.exports = Product
