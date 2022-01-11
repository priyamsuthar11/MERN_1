const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: false,
  },
  status: {
    type: Number,
    default: 0,
    // 0 = Inactive
    // 1 = Active
  },
  departmentId:{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Department',
    required : false
  },
  companyId: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Company",
    required : false
  }
}, {
  timestamps : true
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
