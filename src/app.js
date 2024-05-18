import dotenv from 'dotenv';
import express from 'express';
// import router from './Routes/routes';
import { start } from './server.js';

export const app = express();
dotenv.config();

app.use(express.json());


app.get('/', (req, res)=>{
  res.send('Api já está funcionando')
})
// app.use('/', router);

start();