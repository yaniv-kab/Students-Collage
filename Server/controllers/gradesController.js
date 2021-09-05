const express = require('express');
const gradesBL = require('../models/gradesBL')

const router = express.Router();
router.route('/:id').get( async (req,resp)=>{
let id = req.params.id
let data = await gradesBL.getAllGrades(id);
return resp.json(data);
})

router.route('/:id').post( async (req,resp) => {
    let id = req.params.id;
    let newGrade = req.body;
    let data = await gradesBL.addGrade(id,newGrade);
    return resp.json(data);
})
router.route('/:studentId/:gradeId').put(async (req,resp)=>{
    let studentId = req.params.studentId;
    let gradeId = req.params.gradeId
    let updatedGrades = req.body;
    let status = await gradesBL.updateGrade(studentId,gradeId,updatedGrades);
    return resp.json(status);
})
router.route('/:studentId/:gradeId').delete(async(req,resp)=>{
    let studentId = req.params.studentId;
    let gradeId = req.params.gradeId
    let status = await gradesBL.deleteGrade(studentId,gradeId);
    return resp.json(status)

})
module.exports = router;
