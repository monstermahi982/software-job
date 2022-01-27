import express from 'express';
import { userController } from '../Controller'


const router = express.Router();


router.get('/', userController.getUsers);

router.get('/:id', userController.getOneUser);

router.post('/', userController.addUser);

router.post('/login', userController.userLogin);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

export default router;