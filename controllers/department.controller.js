const {
  Department,
  Company
} = require('../Models');

const DepartmentController = async (req, res) => {

  try {
    const dep = new Department({
      name: req.body.name,
      status: req.body.status,
      companyId: req.body.companyId
    })
    await dep.save()
    res.status(201).json({
      code:201,
      msg: "department added successfully",
      data :dep

    })

  } catch (err) {
    res.status(400).json({
      code : 400,
      msg: "something went wrong",
      err : err
    })
  }
}


const GetDepartmentController = async (req, res) => {

  Department.find((err, result) => {
    if (err) {

      res.send(err);

    } else {
      res.json({
        result
      })
    }
  })
}


//get department by Id


const GetDataByID = async (req, res) => {
  try {
    const id = req.params.id
    const DepData = await Department.findById({
      _id: id
    }).exec()
    const data = {
      id: DepData._id,
      name: DepData.name,
      status: DepData.status
    }
    res.status(200).json({
      code: 200,
      msg: "success",
      data: data
    })
  } catch (err) {
    res.status(400).send({
      code: 400,
      error: err
    })
  }

}

// get department data by company id

const GetDepartmentByComp = async (req, res) => {


  try {
    const id = req.params.id

    const getdepdatacom = await Department.find({
      companyId: id
    }).exec()

    res.send(getdepdatacom);

  } catch (err) {
    res.status(400).json({
      code: 400,
      msg: "data not found",
      error : err
    })
  }
}


const UpdateDepartment = async (req, res) => {
  try {
    const id = req.params.id
    console.log(id);
    const UpdatedData = await Department.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      status: req.body.status
    }, {
      new: true
    }).exec()
    if (!UpdatedData) {
      res.send("update unsucsess");
    }
    res.status(200).send({
      code: 200,
      msg: "update successfully",
      data: UpdatedData
    })

  } catch (err) {
    res.status(400).send({
      lasterror: err
    });
  }
}


const DeleteDepartmentController = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await Department.findByIdAndRemove(id).exec();
  res.status(200).send({code : 200 , msg : "data deleted" , data : data});
}

module.exports = {
  DepartmentController,
  GetDepartmentController,
  UpdateDepartment,
  GetDepartmentByComp,
  DeleteDepartmentController,
  GetDataByID
};
