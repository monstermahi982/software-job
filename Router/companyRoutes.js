import express from 'express';
import { companyController } from '../Controller'


const router = express.Router();


router.get('/', companyController.getAllCompanies);

router.get('/:id', companyController.getOneCompany);

router.post('/', companyController.addCompany);

router.post('/login', companyController.loginCompany);

router.put('/:id', companyController.updateCompany);

router.put('/block/:id', companyController.blockCompany);

router.put('/unblock/:id', companyController.unblockCompany);

router.delete('/:id', companyController.deleteCompany);

export default router;