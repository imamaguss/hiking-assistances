const router = require('express').Router();
const model = require('../models')
const BookingController = require('../controller/booking');

const Booking = model.Booking;

router.get('/', BookingController.index);

module.exports = router;