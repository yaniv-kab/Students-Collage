const express = require('express');
const studentsBL = require('../models/studentsBL'); 

const router = express.Router();

router.route('/').get(async (req, resp) => {
    let data = await studentsBL.getAllStudents();   // getting the data - with function from BL
    return resp.json(data) //sending the data
});

router.route('/:id').get(async (req, resp) => {
    let id = req.params.id;
    let data = await studentsBL.getStudentById(id);
    return resp.json(data)
});

router.route('/').post(async (req, resp) => {
    let newStudent = req.body;
    let data = await studentsBL.addStudent(newStudent)
    return resp.json(data)
});


router.route('/:id').put(async (req, resp) => {
    let id = req.params.id;
    let updatedStudent = req.body;
    let status = await studentsBL.updateStudent(id, updatedStudent);
    return resp.json(status)
})

router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id;
    let status = await studentsBL.deleteStudent(id)
    return resp.json(status);
})

module.exports = router;

