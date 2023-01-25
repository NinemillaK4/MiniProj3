const mongoose = require('mongoose');

var schema = new mongoose.Schema({

	name:{
		type: String,
		required:true
	},
	email:{
		type: String,
		required:true,
		unique:true
	},

	nationality:{
		type: String,
		required:true
	},

	company:{
		type: String,
		required:true
	},
		
})

const Sponsordb = mongoose.model('sponsordb', schema);

module.exports = Sponsordb;
		
	

	
