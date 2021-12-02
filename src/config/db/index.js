const mongoose = require('mongoose');


async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_dev');
        console.log('Successfully');
    } catch (error) {
        console.log('Failed');
    }

}

module.exports = {connect};