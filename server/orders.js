'use strict'

const db = require('APP/db')
const { LineItem, Order } = require('../db/models')
const api = module.exports = require('express').Router()



api.get('/:id', (req, res, next) => {
  LineItem.scope('default').findAll({where: {order_id: req.params.id}})
        .then(items => res.send(items))
        .catch(console.error)
})



api.post('/', (req, res, next) => {
  let createdOrder;
  const itemsPromise = req.body.items.map(item => LineItem.findById(item.id));
  const { firstName, lastName, shippingOption, street1, street2, city, state, zip } = req.body.order;
  let { total } = req.body.order
  const shipping = shippingOption.split(" - ");
  const shippingCost = +shipping[1].slice(1);

  const orderDetails = {
    name: firstName + " " + lastName,
    shippingMethod: shipping[0],
    shippingCost: shippingCost,
    totalPrice: +total + shippingCost,
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
