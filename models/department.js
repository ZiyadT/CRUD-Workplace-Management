const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    manager:{
        type: String
    }
})

module.exports = mongoose.model('Department', departmentSchema)