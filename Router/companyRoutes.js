import express from 'express';
import { companyController } from '../Controller'


const router = express.Router();


router.get('/', companyController.getAllCompanies);

router.get('/:id', companyController.getOneCompany);

router.post('/', companyController.addCompany);

router.post('/login', companyController.loginCompany);

router.put('/:id', companyController.updateCompany);

router.delete('/:id', companyController.deleteCompany);

export default router;