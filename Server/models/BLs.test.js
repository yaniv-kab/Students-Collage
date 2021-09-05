const {getAllStudents} = require('./studentsBL')

test('should get all students' , ()=> {
    const students = getAllStudents();
})