const express = require('express');
const router = express.Router();
const {CompanyController ,GetCompanyController , UpdateCompany ,DeleteCompanyController} = require('../controllers/company.controller');


router.post('/company/add', CompanyController);
router.get('/company/getAll', GetCompanyController);
router.put('/company/:id', UpdateCompany);
router.delete('/company/:id', DeleteCompanyController);


module.exports = router;
