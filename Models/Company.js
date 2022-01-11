const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
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
  ,
  employeeId:{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Employee',
    required : false
  }}
},{
  timestamps : true
});

const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;
