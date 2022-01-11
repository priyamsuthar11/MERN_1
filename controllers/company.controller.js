  const {Company} = require('../Models');
  // add company
  const CompanyController = async (req,res) => {
       console.log(req.body);
       try {
             const comp = new Company({
             name : req.body.name,
           })
             await comp.save()
             res.status(201).json({
               code : 201,
               msg :" company add Successfully",
               data : comp
              })

      }catch(error){
            res.status(400).json({code : 400 , error : error , message : "failed"});
    }
  }


  const GetCompanyController = async(req,res) => {

   Company.find((err,result) => {
     if (err) {

       res.send(err);

     }
     else {
       res.json({result})
     }
   })
  }


  const UpdateCompany = async(req,res) => {
    try {
      id = req.params.id
      const updatedComp = await Company.findByIdAndUpdate(id , {
        name : req.body.name,
        status : req.body.status,
        departmentId : req.body.departmentId,
        employeeId : req.body.companyId
      }).exec()
      res.status(200).json({code :200 , msg : "updated success" , data : updatedComp})
    } catch (err) {
      res.status(400).json({code : 200 , error : err})
    }
  }


  const DeleteCompanyController = async(req,res) => {
   const id  = req.params.id;
  console.log(id);
  await Company.findByIdAndRemove(id).exec();
    res.send("data deleted");

  }


  module.exports  = {CompanyController ,GetCompanyController , UpdateCompany ,DeleteCompanyController};
