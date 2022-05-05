const Department = require('../models/department')

module.exports = {
    create,
    new: newDept,
    edit,
    update,
    del,
    index
}

function newDept(req, res){
    res.render('../views/addDept')
}

function create(req, res){
    const dept = new Department({
        name: req.body.name,
        role: req.body.role,
        manager: req.body.manager
    })
    dept.save(function(err){
        res.redirect('/')
    })
}

function index(req, res){
    Department.find({}, function (err, depts) {
        res.render('../views/index', { depts });
    })
}

function edit(req, res){
    Department.findById(req.params.id, function(err, dept){
        res.render('../views/updateDept', {dept})
    })
}

function update(req, res){
    Department.findByIdAndUpdate(req.params.id, req.body, function(err){
        res.redirect('/')
    })
}

function del(req, res){
    console.log(req.body)
    Department.findByIdAndDelete(req.params.id, function(err){
        res.redirect('/')
    })
}