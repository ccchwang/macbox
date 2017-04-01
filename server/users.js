'use strict'

const db = require('APP/db')
const { User, Order } = require('../db/models')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
	.get('/', forbidden('only admins can list users'), (req, res, next) =>
			User.findAll()
				.then(users => res.json(users))
				.catch(next))
	.post('/', (req, res, next) =>
			User.create(req.body)
				.then(user => res.status(201).json(user))
				.catch(next))
	.get('/:id/orders', (req, res, next) =>
			Order.findAll({where: {user_id: req.params.id}})
					.then(orders => res.send(orders))
					.catch(console.error))
	.get('/:id', mustBeLoggedIn, (req, res, next) =>
			User.findById(req.params.id)
				.then(user => res.json(user))
				.catch(next))

