const model = require('../models');
const Provider = model.Provider;
const Customer = model.Customer;
const Booking = model.Booking

class BookingController {
  static index(req, res) {
    res.render('booking/booking');
  }

  

  static findGuide(req, res, next) {
    let guideNeeded = +req.body.guide;
    console.log(guideNeeded)
    Provider
    .findAll({
      where: {
        jobTitle: 'guide',
        availability: true
      },
      limit: guideNeeded})
    .then(data => {
      let employee = 
      data.forEach(guide => {
        guide.update({
          availability: false
        })
        // console.log(guide.dataValues.jobTitle, guide.dataValues.name, );
      });
      next();
    })
    .catch(err => {
      res.send(err);
    })
  }

  static findPorter(req, res) {
    let porterNeeded = +req.body.porter;
    Provider
    .findAll({
      where: {
        jobTitle: 'porter',
        availability: true
      },
      limit: porterNeeded})
    .then(data => {
      data.forEach(porter => {
        porter.update({
          availability: false
        })
        // console.log(porter.dataValues.jobTitle, porter.dataValues.name);
      });
    })
    .catch(err => {
      // res.send(err);
    })
  }



  static invoice(req, res) {
    res.send(req.body)
    
  }



  
}

module.exports = BookingController;