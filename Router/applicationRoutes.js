import express from 'express';
import { applicationController } from '../Controller'


const router = express.Router();


router.get('/user/:id', applicationController.getUserApplication);

router.get('/job/:id', applicationController.getJobApplication);

router.get('/company/:id', applicationController.getCompanyApplication);

router.post('/', applicationController.addApplication);

router.delete('/:id', applicationController.deleteApplication);

export default router;