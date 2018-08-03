'use strict'
const express = require('express');
const router = express.Router()
const models = require('../models')
const Customer= models.Customer
const ControllerCustomer= require ('../controller/customer')

router.get('/', ControllerCustomer.index)
router.get('/signup', ControllerCustomer.signUp)
router.post('/signUpPost', ControllerCustomer.signUpPost)	

router.get('/login', ControllerCustomer.login);
router.post('/login', ControllerCustomer.postLogin);

router.get('/logout', ControllerCustomer.logout);
router.get('/edit/:id', ControllerCustomer.editGet)
router.post('/edit/:id', ControllerCustomer.editPost)
router.get('/delete/:id', ControllerCustomer.delete)

module.exports = router;