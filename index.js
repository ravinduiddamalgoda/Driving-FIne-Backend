import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './src/routes/user.route.js';
import fineRouter from './src/routes/fine.route.js';
import adminRouter from './src/routes/admin.route.js';
import UserFineRouter from './src/routes/userFine.route.js';
import Stripe from 'stripe';
import { sendMail } from './src/service/SendEmail.js';

dotenv.config({ path: './.env' });

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);
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


app.post("/create-payment-intent", async (req, res) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "INR",
        amount: 500,
        automatic_payment_methods: { enabled: true },
      });
  
      // Send publishable key and PaymentIntent details to client
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
      console.log(paymentIntent.client_secret);
    } catch (e) {
    console.log(e?.message);
      return res.status(400).send({
        error: {
          message: e.message,
        },
      });
    }
  });

  app.get("/config", (req, res) => {
    res.send({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
  });


  app.post('/Inquiry' , (req, res)=>{
    const { email, phone, inquiry } = req.body;

    const data = ``;
    sendMail(email , "We will Contact You Soon!" , data);

  })