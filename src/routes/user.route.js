import { Router } from "express";
import { body } from "express-validator";
import { CurrentUser, LoginUser, RegisterUser, searchByNIC, getAllUsers, getUserByEmail , getUserById , userFineUpdate } from "../controllers/user.control.js";
import upload from '../utills/upload.js';  // Importing the default export

const userRouter = Router();

userRouter.post('/register', upload.single('image'), RegisterUser);
userRouter.post('/login', LoginUser);
userRouter.get('/getallusers', getAllUsers);
userRouter.get('/userbymail/:email', getUserByEmail);
userRouter.get('/searchByNIC/:nic', searchByNIC);
userRouter.get('/:id', getUserById);
userRouter.put('/userFine/:id', userFineUpdate);


export default userRouter;
