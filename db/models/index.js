'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Order = require('./order')
const Cart = require('./cart')
const Review = require('./review')
const LineItem = require('./lineItem')
const Product = require('./product')

OAuth.belongsTo(User)
User.hasOne(OAuth)

Order.belongsTo(User)
User.hasMany(Order)

User.hasMany(Review)
Review.belongsTo(User)
Product.hasMany(Review)

Order.hasMany(LineItem)
LineItem.belongsTo(Order)

Cart.belongsTo(User)
Cart.hasMany(LineItem)
LineItem.belongsTo(Cart)

LineItem.belongsTo(Product)


module.exports = {User, Cart, LineItem, Order, Review, Product}
