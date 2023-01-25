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

	ability:{
		type: String,
		required:true
	},
		
})

const Expertdb = mongoose.model('expertdb', schema);

module.exports = Expertdb;
		
	

	
