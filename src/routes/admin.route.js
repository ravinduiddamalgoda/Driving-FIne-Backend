import express from 'express';
import { addAdmin, adminLogin, getAdmin } from '../controllers/admin.controll.js';

const AdminRouter = express.Router();

AdminRouter.post('/addAdmin', addAdmin);
AdminRouter.post('/adminLogin', adminLogin);
AdminRouter.get('/getAdmin/:id', getAdmin);

export default AdminRouter;
