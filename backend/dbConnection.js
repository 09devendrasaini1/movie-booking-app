const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/bookmyshow');
        console.log('Connected to Database');
    } catch (err) {
        console.log('Database connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
