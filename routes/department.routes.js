const express = require('express');
const router = express.Router();
const {DepartmentController,GetDepartmentController,UpdateDepartment , DeleteDepartmentController ,GetDepartmentByComp , GetDataByID} = require('../controllers/department.controller');


router.post('/department', DepartmentController);
router.get('/department', GetDepartmentController);
router.get('/department/:id' , GetDataByID )
router.get('/department/compID/:id', GetDepartmentByComp);

router.put('/department/update/:id', UpdateDepartment);
router.delete('/department/delete/:id', DeleteDepartmentController);


module.exports = router;
