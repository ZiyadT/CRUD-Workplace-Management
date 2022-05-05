const Employee = require('../models/employee')
const Department = require('../models/department')
const mongoose = require('mongoose')

module.exports = {
    new: newEmployee,
    create,
    show,
    delete: del
}

function newEmployee(req, res){
    Department.findById(req.params.id, function(err, dept){
        res.render('../views/newEmployee', {dept})
    })
}

function create(req, res){
    var empl = new Employee(req.body)
    empl.department = mongoose.Types.ObjectId(req.params.id)
    empl.save(function(err){
      if (err) return res.send(err)
        res.redirect('/' + req.params.id + '/updateDept')
    })

}

function show(req, res){
    Employee.findById(req.params.id, function(err, empl){
        Department.findById(empl.department, function(err, dept){
            res.render('../views/showEmployee', {empl, dept})
        })
    })
}

function del(req, res){
    Employee.findById(req.params.id, function(err, empl){
        Department.findById(empl.department, function(err, dept){
            Employee.findByIdAndDelete(req.params.id, function(err){
                res.redirect('/' + dept.id + '/updateDept')
            })
        })
    })
    
}