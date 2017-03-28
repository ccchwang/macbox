'use strict'

const db = require('APP/db')
const { Cart, LineItem } = require('../db/models')
const api = module.exports = require('express').Router()

// const {mustBeLoggedIn, forbidden,} = require('./auth.filters')


api.post('/', (req, res, next) => {
  const order = req.body.order
  const items = req.body.items;

  Cart.findById(items[0].cart_id)
      .then(cart => console.log(cart))
    // let cartInfo = req.params.userId === "unauthUser" ? {where: {session_id: req.sessionID}}
    //                                                   : {where: {user_id: req.params.userId}}
    // let product = req.body.product;

    // Cart.findOrCreate(cartInfo)
    //     .then(([cart, _]) => LineItem.findOrCreate({where: {
    //         product_id: product.id,
    //         cart_id: cart.id
    //     }}))
    //     .then(([line, isCreated]) => line.update(
    //         {quantity: !isCreated ? line.quantity + +req.body.quantity
    //                               : req.body.quantity
    //         }
    //     ))
    //     .then(line => LineItem.scope('default').findById(line.id))
    //     .then(line => res.send(line))
    //     .catch(next)
})
