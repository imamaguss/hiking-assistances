const models = require('../models');
const Provider = models.Provider;
const Customer = models.Customer;
const Booking = models.Booking

class ControllerCustomer{

    static index(req, res){
				Customer.findAll({
            order : [['id','ASC']],
        })
        .then(customerData => {
            res.render('customer/data', {data:customerData})
        })
        .catch(err => {
            res.send(err)
        })
    } 

    static login(req, res) {
        res.render('customer/login')
    }

    static postLogin(req, res) {
        let email = req.body.email;
				let password = req.body.password;
				Customer
				.findOne({
            where: {
                email: email,
                password: password
            }
        })
        .then(data => {
            if(email === data.email) {
                res.redirect('/booking');
            }
        })
        .catch(err => {
            // res.send(err);
            res.redirect('/')
        })
    }

    static logout(req, res) {
        
    }

    static signUp(req, res){
        res.render('customer/signup');
    }

    static signUpPost(req, res){
        Customer.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            createAt: new Date(),
            updateAt: new Date()
        })
        .then(newCustomer => {
            res.redirect('/customer/login')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editGet(req,res) {
        let id = req.params.id
				Customer.findById(id)
        .then(editCustomer =>{
            res.render("customer/edit",{editCustomer:editCustomer})
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