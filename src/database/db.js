import mongoose from 'mongoose';

let database = mongoose.Connection | null

export const connectDB = (url) => {
  if (database) {
    return database; // retorna o database do mongoDB se já estiver conectado
  }

  return mongoose.connect(url, {}).then((conn) => { // faz a conecção com o mongoDB se não estiver conectado
    database = conn.connection;
    return database;
  });
};

export const closeDB = async () => {
  if (database) {
    await database.close();
    console.log('Database connection closed');
    database = null;
  }
};