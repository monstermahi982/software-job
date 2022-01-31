import express from 'express';
import { userController } from '../Controller'
import { auth } from '../Middleware'


const router = express.Router();


router.get('/', userController.getUsers);

router.get('/:id', userController.getOneUser);

router.post('/', userController.addUser);

router.post('/login', userController.userLogin);

router.put('/:id', userController.updateUser);

router.put('/block/:id', userController.blockUser);

router.put('/unblock/:id', userController.unblockUser);

router.delete('/:id', auth, userController.deleteUser);

export default router;