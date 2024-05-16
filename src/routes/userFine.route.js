import express from 'express';
import { addUserFine, getUserFine, getAllUserFines, updateUserFine, deleteUserFine , getUserFinesByUserID , UpdatePaidStatus} from '../controllers/userFine.controller.js';
import User from '../models/user.js';
import UserFine from '../models/UserFine.js';

const UserFineRouter = express.Router();

UserFineRouter.post('/add', addUserFine);
UserFineRouter.get('/:id', getUserFine);
UserFineRouter.get('/', getAllUserFines);
UserFineRouter.put('/:id', updateUserFine);
UserFineRouter.delete('/:id', deleteUserFine);
UserFineRouter.get('/user/:userID', getUserFinesByUserID);
UserFineRouter.put('/updatePaidStatus/:id', UpdatePaidStatus);

export default UserFineRouter;
