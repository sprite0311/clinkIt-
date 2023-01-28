import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
import userRoutes from './routes/user.routes.js'

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use('/user', userRoutes)

mongoose.connect(process.env.DB_URI)
    .then(()=>app.listen(process.env.PORT, ()=>console.info(`SERVER RUNNING ON PORT: ${process.env.PORT}`)))
    .catch((err)=>console.error(err));      