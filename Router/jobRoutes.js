import express from 'express';
import { jobController } from '../Controller'

const router = express.Router();

router.get('/', jobController.getAllJobs);

router.get('/search', jobController.jobSearch);

router.get('/length', jobController.jobArrayLength);

router.get('/:id', jobController.getOneJob);

router.post('/', jobController.addJob);

router.put('/block/:id', jobController.blockJob);

router.put('/unblock/:id', jobController.unblockJob);

router.delete('/:id', jobController.deleteJob);

export default router;