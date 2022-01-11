require('dotenv').config()

  const {
    Employee,
    Department,
    Company
  } = require('../Models');
  var jwt = require('jsonwebtoken');
  const config = require("../config/auth.config");
  const bcrypt = require('bcryptjs');
  const {
    userValidationRules,
    validate
  } = require('../middlewares/express_validator')
  var multer  = require('multer')




// register employee
  const EmployeeController = async (req, res) => {

    try {
      const user = JSON.parse(req.body.data);
   console.log(user.name,"name...................");
   console.log(req.file);
      const emp = new Employee({
        name: user.name,
        email: user.email,
        password: user.password,
        departmentId: req.body.departmentId,
        companyId: req.body.companyId,
        photo : req.file.path
      });

      const salt = await bcrypt.genSalt(10);
      emp.password = await bcrypt.hash(emp.password, salt);
      await emp.save()
      res.status(200).json({
        code : 200,
        msg: "employee added successfully",
        data : emp
      })

    } catch (err) {
      res.status(400).json({
        msg: "something went wrong",
        err: err
      })
    }
  }

//get all employee
  const GetEmployeeController = async (req, res) => {
    let empData = Employee.find((err, value) => {
      // res.send(value);
    })
    let employeeListByDEp = await Employee.find({}).populate("departmentId", "name").populate("companyId", "name").exec()
const value = {_id : employeeListByDEp._id ,name : employeeListByDEp.name ,email : employeeListByDEp.email , department :  employeeListByDEp.departmentId , company : employeeListByDEp.companyId }
console.log(value);
    res.status(200).json({
      code : 200,
      msg  : "all employeeList",
      data: employeeListByDEp
    });
  }

  //get element by id

  const GetSelfId = async (req, res) => {

    id = req.params.id
    // console.log(id);

    const data = await Employee.findOne({
      _id: id
    }).populate("departmentId", "name").populate("companyId", "name" ).exec()
  const value = {_id : data._id ,name : data.name ,email : data.email ,photo : data.photo ,  department :  data.departmentId , company : data.companyId }
 console.log(value);
    res.status(200).json({
      code: 200,
      msg: "success",
      data: value
    })
  }

  // employee all data with assoictiated Company

  const GetEmployeeControllerById = async (req, res) => {
    const _id = req.params.id;
    Employee.find({
      companyId: _id
    }).then(result => {

      res.send(result);

    })
  }


  // employww all data with assoictiated department
  const GetEmployeeByDepId = async (req, res) => {
    const _id = req.params.id;

    const data = await Employee.find({
      departmentId: _id
    }).populate("departmentId", "name").populate("companyId", "name").exec()
    res.send(data);
  }

  const UpdateEmployeeDepartment = async(req,res) => {
    try {
      id = req.params.id

      const updatedEmp = await Employee.findByIdAndUpdate(id , {
        name : req.body.name,
        email : req.body.email,
        photo : req.body.photo
      }).exec()
    await res.status(200).json({code :200 , msg : "updated success" , data : updatedEmp})
    } catch (err) {
      res.status(400).json({code : 200 , error : err})
    }
  }


  const DeleteEmployeeController = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    await Employee.findByIdAndRemove(id).exec();
    res.send("data deleted");

  }

  const LoginEmployee = async (req, res) => {

    try {
      const user = await Employee.findOne({
        email: req.body.email
      });
      if (user) {
        // console.log(user.password);
        const validPassword = await bcrypt.compare(req.body.password, user.password);
    console.log(user.id);
    console.log(validPassword);
        if (validPassword) {
          const token = jwt.sign({

            id: user.id , email : user.email
          }, process.env.SECRET, {
            expiresIn: 86400 // 24 hours
          });
          console.log(token);
          const data = {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
          };
          console.log(data);
           res.status(200).json({
            code: 200,
            msg: "logged in successfully",
            data: data
          })
        } else {
          res.status(401).json({
            code: 401,
            error: "invalid password"
          })
        }
      } else {
        res.status(401).json({
          code: 401,
          error: "email dosent exist"
        })
      }

    } catch (err) {
      res.send(err);
    }

  }

  const getProfile = (req, res) => {
    res.send("welcome");
  }

  module.exports = {
    EmployeeController,
    GetEmployeeController,
    UpdateEmployeeDepartment,
    DeleteEmployeeController,
    GetSelfId,
    GetEmployeeControllerById,
    GetEmployeeByDepId,
    LoginEmployee,
    getProfile
  };
