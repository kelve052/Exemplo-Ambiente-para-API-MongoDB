import dotenv from 'dotenv';
import express from 'express';
import router from './routes/routes.js';
import { start } from './server.js';

export const app = express();
dotenv.config();

app.use(express.json());



app.use('/', router);

start();