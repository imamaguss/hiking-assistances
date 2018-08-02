const models = require('../models');
const Provider = models.Provider;
const Customer = models.Customer;
const Booking = models.Booking

class ControllerCustomer{

    static index(req, res){
        Customer.findAll({
            order : [['id','ASC']],
            //include: [models.Provider] 
        })
        .then(customerData => {
            res.render('customers/customers.ejs', {customerData:customerData})
        })
    
        .catch(err => {
            res.send(err)
        })
    }  

    static addGet(req, res){
        res.render('customers/addCustomer.ejs')
    }

    static addPost(req, res){
        Customer.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            createAt: new Date(),
            updateAt: new Date()
        })
        .then(newCustomer => {
            res.redirect('/customer')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editGet(req,res) {
        let id = req.params.id
        Customer.findById(id)
        .then(editCustomer =>{
            res.render("customers/editCustomer.ejs",{editCustomer:editCustomer})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editPost(req,res) {
        Customer.update({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        },{
         where:{
         id:req.params.id
        }
        })
        .then(() =>{
            res.redirect("/customers")
        })
        .catch(err => {
            res.send(err)
        })
    }

    static delete(req,res) {
        let id = req.params.id
        Customer.destroy({
            where:{id : id}
        })
        .then(()=>{
            res.redirect('/customer')
        })
        .catch(err => {
            res.send(err)
        })
    } 


    
}

module.exports = ControllerCustomer