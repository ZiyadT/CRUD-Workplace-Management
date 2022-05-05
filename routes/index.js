var express = require('express');
var router = express.Router();
const deptCtrl = require('../controllers/departments')

/* GET home page. */
router.get('/', deptCtrl.index)
router.get('/newDept', deptCtrl.new)
router.get('/:id/updateDept', deptCtrl.edit)
router.put('/:id', deptCtrl.update)
router.post('/', deptCtrl.create)
router.delete('/:id', deptCtrl.del)

module.exports = router;
