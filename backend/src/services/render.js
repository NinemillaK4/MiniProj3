
const route = require('express').Router();
var Content = require('../models/sponsor');
var Conten = require('../models/expert');

exports.homeRoutes = (req,res)=>{
	
	res.render('home.hbs');
}

//EXPONSOR
exports.add_sponsor = (req,res)=>{
	res.render('add_sponsor.hbs');
}  

exports.update_sponsor = (req,res)=>{
	Content.findById(req.query.id, function(err, doc) {
            res.render('update_sponsor.hbs', {
                data:doc
             
            });     
    });
};


//EXPERT

exports.add_expert = (req,res)=>{
	res.render('add_expert.hbs');
}  

exports.update_expert = (req,res)=>{
	Conten.findById(req.query.id, function(err, doc) {
            res.render('update_expert.hbs', {
                data:doc
            });     
    });
};
