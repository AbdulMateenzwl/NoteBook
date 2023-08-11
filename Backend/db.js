const mongoose = require('mongoose');

const mongoURI =
	'mongodb+srv://admin_user:HqJZ.ymd9K7DEcu@cluster0.st4adqm.mongodb.net/notebook';

const connectToMongo = () => {

    mongoose.connect(mongoURI, () => {
        console.log('Connected to MongoDB');
    })
}



module.exports = connectToMongo;