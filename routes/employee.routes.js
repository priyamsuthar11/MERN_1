const express = require('express');
var app = express()
const router = express.Router();
const {EmployeeController , GetEmployeeController ,GetSelfId,GetEmployeeByDepId,GetEmployeeControllerById, UpdateEmployeeDepartment , DeleteEmployeeController , LoginEmployee , getProfile} = require('../controllers/employee.controller');
const {verifyToken} = require('../middlewares/index');
const { userValidationRules, validate } = require('../middlewares/express_validator')
const path = require('path')
var multer  = require('multer')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../uploads'));
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname)
    }
})
var upload = multer({ storage: storage })


app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

// http://localhost:5678/uploads/sample.png

router.post('/employee', upload.single('photo') ,EmployeeController);
router.post('/employee/login', userValidationRules() , validate ,LoginEmployee);
router.get('/employee/comid/:id' , GetEmployeeControllerById)
router.get('/employee/getAll',verifyToken, GetEmployeeController);
router.get('/employee/byID/:id',GetSelfId) ;
router.put('/employee/:id', UpdateEmployeeDepartment);
router.delete('/employee/:id', DeleteEmployeeController);
router.get('/profile',verifyToken, getProfile );
router.get('/employee/:id', GetEmployeeControllerById)
router.get('/employee/depid/:id', GetEmployeeByDepId)



module.exports = router;
