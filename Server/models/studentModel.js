const mongoose = require('mongoose')


//creating a Mongoose Schema

let studentSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    faculty: String,
    birthDate : Date,
    grades : 
        [{date : Date , grade : Number}]
});

//creating a model 

module.exports = mongoose.model('students', studentSchema);

//and exposing the model








