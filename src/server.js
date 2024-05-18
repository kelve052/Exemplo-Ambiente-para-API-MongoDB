import { app } from './app.js';
import { connectDB, closeDB } from './database/db.js';

let server
const port = process.env.PORT | 2003

export const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI); //primeiro faz a conecção com mongo db
    server = app.listen(port, () => console.log(`Server está online |   http://localhost:${port}`)); // aqui inicia o serve depois da coneção
  } catch (error) {
    console.log(error);
  }
};

export const close = async () => {
  if (server) {
    closeDB;
    server.close();
    console.log('Server closed');
  }
};