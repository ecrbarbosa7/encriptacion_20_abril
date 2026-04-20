import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB conectado correctamente');
    return mongoose;
  } catch (error) {
    console.log('Error al conectar MongoDB:', error.message);
  }
};