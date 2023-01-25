const Sponsordb = require('../models/sponsor'); 

const { 
    validationResult
} = require('express-validator');
const SponsorMessages = "DONE!"

exports.create = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    new Sponsordb({
        name:req.body.name,
		email:req.body.email,
		nationality:req.body.nationality,
		company:req.body.company
    }).save((error, sponsor) => {
        if (error) throw error;
        res.redirect('/');
        //let message = SponsorMessages.success;
        //alert("Sponsor Saved!");
        //message.body = sponsor;
        return res.render("home.hbs");
    });
}


// retrieve and return
exports.find = (req,res)=>{
	Sponsordb.find()
	.then(sponsor =>{
			res.send(sponsor)
		})
	.catch(err =>{
		res.status(500).send({message:err.message || "Error Occured while rectriving Sponsor information"})
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

	Sponsordb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
	.then(data =>{
		if(!data){
			res.status(404).send({message:"Cannot Update Sposnor with ${id}. Maybe Sponsor not found"})
		}else{
			res.send(data)
		}
	})
	.catch(err=>{
		res.status(500).send({message:"Error Updatedd Sponsor information"})
	})
}

//Delete


exports.delete = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Sponsordb.deleteOne({
        _id: req.params.id
        //io.emit("Deleted!");
    }, (error, result) => {
        if (error) throw error;
        //if (result.deletedCount <= 0) return res.status(SponsorMessages.error).send(SponsorMessages.error);
        //return res.status(SponsorMessages.success).send(SponsorMessages.success);
        return res.render("home.hbs");

    });
}

