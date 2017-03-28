'use strict'

const db = require('APP/db')
const { Cart, LineItem, Order } = require('../db/models')
const api = module.exports = require('express').Router()

// const {mustBeLoggedIn, forbidden,} = require('./auth.filters')


api.post('/', (req, res, next) => {
  let orderId;
  const itemsPromise = req.body.items.map(item => LineItem.findById(item.id));
  const { firstName, lastName, shippingOptions, street1, street2, city, state, zip } = req.body.order;

  const orderDetails = {
    name: firstName + " " + lastName,
    shippingOptions: shippingOptions,
    shippingAddress: street1 + "\n" + street2 + "\n" + city + ", " + state + " " + zip,
    user_id: req.body.userId
  }

  Order.create(orderDetails)
      .then(order => {
        orderId = order.id;
        return Promise.all(itemsPromise)
      })
      .then(items => {
          const updateItems = items.map(item => item.update({order_id: orderId}));
          return Promise.all(updateItems)
        }
      )
      .then(updatedItems => console.log(updatedItems[0]))

})
