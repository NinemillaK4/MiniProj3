const Expertdb = require('../models/expert'); 

const { 
    validationResult
} = require('express-validator');
const ExpertMessages = "DONE!"

exports.create = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    new Expertdb({
        name:req.body.name,
		email:req.body.email,
		nationality:req.body.nationality,
		ability:req.body.ability
    }).save((error, expert) => {
        if (error) throw error;
        res.redirect('/');
        return res.render("home.hbs");
    });
}


// retrieve and return
exports.find = (req,res)=>{
	Expertdb.find()
	.then(expert =>{
			res.send(expert)
		})
	.catch(err =>{
		res.status(500).send({message:err.message || "Error Occured while rectriving Expert information"})
	});
}

//Update
exports.update = (req,res)=>{
	if(!req.body){
		return res
			.status(400)
			.send({message:"Data to update can no be empty"})
	}

	const id = req.params.id;

	Expertdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
	.then(data =>{
		if(!data){
			res.status(404).send({message:"Cannot Update Sposnor with ${id}. Maybe Expert not found"})
		}else{
			res.send(data)
		}
	})
	.catch(err=>{
		res.status(500).send({message:"Error Updatedd Expert information"})
	})
}

//Delete


exports.delete = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Expertdb.deleteOne({
        _id: req.params.id
    }, (error, result) => {
        if (error) throw error;
        return res.render("home.hbs");

    });
}

