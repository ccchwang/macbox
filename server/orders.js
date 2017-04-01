'use strict'

const db = require('APP/db')
const { Cart, LineItem, Order } = require('../db/models')
const api = module.exports = require('express').Router()

// const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

api.get('/:userId', (req, res, next) => {
  Order.findAll({where: {user_id: req.params.userId}})
        .then(orders => res.send(orders))
        .catch(console.error)
})



api.post('/', (req, res, next) => {
  let createdOrder;
  const itemsPromise = req.body.items.map(item => LineItem.findById(item.id));
  const { firstName, lastName, shippingOption, street1, street2, city, state, zip } = req.body.order;

  const orderDetails = {
    name: firstName + " " + lastName,
    shippingOption: shippingOption,
    shippingAddress: street1 + "\n" + street2 + "\n" + city + ", " + state + " " + zip,
    user_id: req.body.userId
  }

  Order.create(orderDetails)
      .then(order => {
        createdOrder = order;
        return Promise.all(itemsPromise)
      })
      .then(items => {
          const updateItems = items.map(item => item.update({order_id: createdOrder.id, cart_id: null}));
          return Promise.all(updateItems)
        }
      )
      .then(() => res.send(createdOrder))

})
