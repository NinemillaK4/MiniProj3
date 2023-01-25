const mongoose = require('mongoose');

const connectDB = async() => {
	try{
		const con = await mongoose.connect("mongodb://localhost:27017/sponsor_expert",{
			autoReconnect: true,
	        useNewUrlParser: true,
	        useUnifiedTopology: true,
	        useFindAndModify: false
		});

		console.log('MongoDB connected:Succesfuly');
	}catch(err){
		console.log(err);
		process.exit(1);
	}
}

module.exports = connectDB;

/*
mongoose.connect("mongodb://localhost:27017/collectionName", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});*/
