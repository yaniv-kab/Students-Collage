const mongoose = require('mongoose')

//connection to DB

mongoose.connect('mongodb://localhost:27017/StudentsProjDB', { // connection String
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//mongoose ODM

