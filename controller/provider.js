const model = require('../models');
const Provider = model.Provider;
const Customer = model.Customer;
const Booking = model.Booking

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
    Provider.findAll()
      .then(data => {
        res.render('provider/addView',{jobTitle: req.body.jobTitle});
      })
      .catch(err => {
        res.send(err);
      });
  }

  static post(req, res) {
    Provider.create({
      name: req.body.name,
      jobTitle: req.body.jobTitle,
      feePerDay: req.body.feePerDay
    })
    .then(data => {
      res.redirect('/');
    })
    .catch(err => {
      res.send(err);
    });
  }

  static editGet(req,res) {
    let id = req.params.id
    Provider.findById(id)
    .then(editProvider =>{
        res.render("provider/editProvider.ejs",{editProvider:editProvider})
    })
    .catch(err => {
        res.send(err)
    })
  }

  static editPost(req,res) {
    Provider.update({
      name: req.body.name,
      jobTitle: req.body.jobTitle,
      feePerDay: req.body.feePerDay
    },{
     where:{
     id:req.params.id
    }
    })
    .then(() =>{
        res.redirect("/provider")
    })
    .catch(err => {
        res.send(err)
    })
  } 


  static erase(req, res) {
    Provider.destroy({
      where: {id: req.params.id}
    })
    .then(data => {
      res.redirect('/provider');
    })
    .catch(err => {
      res.send(err);
    });
  }
}

module.exports = ProviderController;