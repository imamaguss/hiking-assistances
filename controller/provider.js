const model = require('../models');
const Provider = model.Provider;
const Customer = model.Customer;
const Booking = model.Booking;

class ProviderController {
  static index(req, res) {
    Provider.findAll({})
    .then(data => {
      res.render('provider/data', {data:data});
    })
    .catch(err => {
      res.send(err);
    });
  }

  static add(req, res) {
    Provider.findAll().then(data => {
      res.render()
    })
  }
}

module.exports = ProviderController;