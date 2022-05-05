const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        ref: 'Department'
    }
})

module.exports = mongoose.model('Employee', employeeSchema)