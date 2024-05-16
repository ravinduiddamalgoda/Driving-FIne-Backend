import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './src/routes/user.route.js';
import fineRouter from './src/routes/fine.route.js';
import adminRouter from './src/routes/admin.route.js';
import UserFineRouter from './src/routes/userFine.route.js';

dotenv.config({ path: './.env' });

const app = express();
const port = process.env.PORT || 3400;
const url = process.env.MONGODB_URL;

app.use(cors());
app.use(express.static('./public'));
app.use(bodyParser.json());

async function connectDB(url, connectionParams) {
    await mongoose.connect(url, connectionParams);
    console.log('Database Connected');
}

connectDB(url, {})
    .then(() => {
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('Connection Error', err);
    });

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use('/user', userRouter);
app.use('/fine', fineRouter);
app.use('/admin', adminRouter);
app.use('/userFine', UserFineRouter);
