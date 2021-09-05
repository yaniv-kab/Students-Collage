const Student = require('./studentModel')
const StudentBL = require('./studentsBL')


const getAllGrades = (id) => {
    return new Promise((resolve,reject)=>{
        Student.findById(id,(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data.grades)
            }
        })
    })
}
 const addGrade = (id,newGrade)=>{
     return new Promise( (resolve,reject) => {
         let gradeToSave ={
             date : newGrade.date ,
             grade : newGrade.grade
         }
         Student.findById(id,(err,data) => {
             if(err){
                reject(err);
             }else{
                 data.grades.push(gradeToSave)
                 data.save(err=>{
                     if(err){
                        reject(err);
                     }else{
                         resolve(gradeToSave)
                     }
                 })
             }
         })
      } )
 }
 const updateGrade =  (studentId,gradeId,gradeToUpdate ) => {
     return new Promise((resolve,reject) => {
         Student.findById(studentId, (err,data) => {
            if(err) {
                reject(err);
            }else{
                let gradesArr = data.grades;
                let gradesArrUpdated = gradesArr.map(grade => {
                    if(grade._id == gradeId){
                        return gradeToUpdate
                    }else{
                        return grade
                    }
                })
                data.grades = gradesArrUpdated
                data.save(err=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve("grade updated")
                    }
                })
            }
         })
     })
 }
 const deleteGrade = (studentId,gradeId) => {
     return new Promise((resolve,reject)=>{
         Student.findById(studentId,(err,data)=>{
             if(err){
                 reject(err)
             }else{
                 let gradesArr = data.grades;
                 let gradesAfterDeleted = gradesArr.filter(grade => grade._id != gradeId)
                 data.grades = gradesAfterDeleted
                 data.save(err=>{
                     if(err){
                         reject(err)
                     }else{
                         resolve("grade deleted")
                     }
                 })
             }
         })
     })
 }
module.exports = {getAllGrades,addGrade,updateGrade,deleteGrade}