import express from 'express';
import { addFine, getFine, getAllFine } from '../controllers/fine.control.js';

const FineRouter = express.Router();

FineRouter.post('/addFine', addFine);
FineRouter.get('/getFine/:id', getFine);
FineRouter.get('/getAllFine', getAllFine);

export default FineRouter;
