'use strict'
const express = require('express');
const router = express.Router()
const models = require('../models')
const Customer= models.Customer
const ControllerCustomer= require ('../controller/customer')

router.get('/customer', ControllerCustomer.index)

router.get('/customer/add', ControllerCustomer.addGet )

router.post('/customer/add', ControllerCustomer.postGet)	

router.get('/customer/edit/:id', ControllerCustomer.editGet)

router.post('/customer/edit/:id',ControllerCustomer.editPost)

router.get('/customer/delete/:id',ControllerCustomer.delete)


module.exports = router