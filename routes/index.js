var express = require('express');
var router = express.Router();
const deptCtrl = require('../controllers/departments')
const employeeCtrl = require('../controllers/employees')

/* GET home page. */
router.get('/', deptCtrl.index)
router.get('/newDept', deptCtrl.new)
router.get('/:id/updateDept', deptCtrl.edit)
router.put('/:id', deptCtrl.update)
router.post('/', deptCtrl.create)
router.delete('/:id', deptCtrl.del)
router.get('/:id/newEmployee', employeeCtrl.new)
router.post('/:id/createEmployee', employeeCtrl.create)
router.get('/:id/viewEmployee', employeeCtrl.show)
router.delete('/:id/delete', employeeCtrl.delete)

module.exports = router;
