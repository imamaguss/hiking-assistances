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
    Provider.findAll({
      where: {
        jobTitle: 'guide',
        availability: true
      },
      limit: guideNeeded})
    .then(data => {
      req.locals.guides = []
      data.forEach(guide => {
        req.locals.guides.push(guid.dataValues.name)
        guide.update({
          availability: false
        })
        console.log(guide.dataValues.jobTitle, guide.dataValues.name, );
      });
      next();
    })
    .catch(err => {
      res.send(err);
    })
  }

  static findPorter(req, res, next) {
    let porterNeeded = +req.body.porter;
    Provider.findAll({
      where: {
        jobTitle: 'porter',
        availability: true
      },
      limit: porterNeeded
    })
    .then(data => {
      req.locals.porters = []
      data.forEach(porter => {

        req.locals.porters.push(porter.dataValues.name)
        console.log(porter.dataValues.jobTitle, porter.dataValues.name);
        porter.update({
          availability: false
        })
      });
      console.log("aaaa")
      next()
    })
    .catch(err => {
      // res.send(err);
    })
  }



  static invoice(req, res) {
    // res.send(req.body)
    console.log('asdsad')
    console.log(req.locals)
    res.send({
      porters: req.locals.porters,
      guides: req.locals.guides
    })
  }



  
}

module.exports = BookingController;