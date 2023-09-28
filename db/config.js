const mongoose = require('mongoose');


const dbConnection = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Data Base connected');


    } catch (err) {
        console.log(err);
        throw new Error('Database error');
    }
}

module.exports = {
    dbConnection
}