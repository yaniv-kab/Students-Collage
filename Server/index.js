const express = require('express');
const cors = require('cors');

const studentsController = require('./controllers/studentsController');
const gradesController = require('./controllers/gradesController')
require('./configs/database');


const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/students', studentsController);
app.use('/api/grades',gradesController)

app.listen(process.env.PORT || port, () => 
    console.log(`the Server is Running on port ${port}`));