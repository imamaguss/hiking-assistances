const router = require('express').Router();
const model = require('../models')
const BookingController = require('../controller/booking');

const Booking = model.Booking;

router.get('/', BookingController.index);
router.post('/', BookingController.findGuide, BookingController.findPorter);
// router.post('/', BookingController.findPorter);
router.post('/invoice', BookingController.invoice);


module.exports = router;