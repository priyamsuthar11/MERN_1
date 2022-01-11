const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({

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
  companyId:{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Company',
    required : false
  },
  employeeId:{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Department',
    required : false
  }

},
{
  timestamps : true
});

const Department = mongoose.model("Department", DepartmentSchema);

module.exports = Department;
