const Employee = require('../models/employee')
const Department = require('../models/department')
const mongoose = require('mongoose')

module.exports = {
    new: newEmployee,
    create
}

function newEmployee(req, res){
    Department.findById(req.params.id, function(err, dept){
        res.render('../views/newEmployee', {dept})
    })
}

function create(req, res){
    var empl = new Employee(req.body)
    empl.department = mongoose.Types.ObjectId(req.params.id)
    console.log(empl.department)
    empl.save(function(err){
      if (err) return res.send(err)
        res.redirect('/' + req.params.id + '/updateDept')
    })

}