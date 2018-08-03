const model = require('../models');
const Provider = model.Provider;
const Customer = model.Customer;
const Booking = model.Booking

class BookingController {
  static index(req, res) {
    res.render('booking/booking');
  }

  
}

module.exports = BookingController;