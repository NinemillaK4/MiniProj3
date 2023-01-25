const express = require('express');
//const route = express.Router()
const services = require('../services/render');
const controller = require('../controllers/sponsorcontroller');
const controllere = require('../controllers/expertcontroller');
const route = require('express').Router();
const router = require('express').Router();


//SPONSOR
var Content = require('../models/sponsor');
var Conten = require('../models/expert');

route.get('/', function(req, res, next) {
    Content.find(function(err, content){
        Conten.find(function(err, conten){
            res.render('home.hbs', { contents:content, conten:conten});
        });
   });
});


exports.update_sponsor = (req,res)=>{
    Content.findById(req.query.id, function(err, doc) {
            res.render('update_sponsor.hbs', {
                data:doc
             
            });     
    });
};

/*route.delete('/home', function(req, res, next) {
    userModel.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('home.hbs');
        } else {
            console.log('Failed to Delete user Details: ' + err);
        }
    });
})*/

//EXPERT 


exports.update_expert = (req,res)=>{
    Conten.findById(req.query.id, function(err, doc) {
            res.render('update_expert.hbs', {
                data:doc           
            });     
    });
};

/*route.delete('/home', function(req, res, next) {
    userModel.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('home.hbs');
        } else {
            console.log('Failed to Delete user Details: ' + err);
        }
    });
})*/


/**
 * @description Root Route
 * @method GET/
 */

//route.get('/home', services.homeRoutes);

/**
 * @description add sponsor
 * @method GET/ add-sponsor
 */

route.get('/add-sponsor', services.add_sponsor);
route.get('/add-expert', services.add_expert);



/**
 * @description add sponsor
 * @method GET/ update-sponsor
 */

route.get('/update-sponsor', services.update_sponsor);
route.get('/update-expert', services.update_expert);


//API SPONSOR
route.post('/api/sponsor', controller.create);
route.get('/api/sponsor', controller.find);
route.put('/api/sponsor/:id', controller.update);
route.delete('/api/sponsor/:id', controller.delete);

//API EXPERTS
route.post('/api/expert', controllere.create);
route.get('/api/expert', controllere.find);
route.put('/api/expert/:id', controllere.update);
route.delete('/api/expert/:id', controllere.delete);

module.exports = route;