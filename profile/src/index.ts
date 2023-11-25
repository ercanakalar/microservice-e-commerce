import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import { app } from './app';

const start = async () => {
  dotenv.config();
  if (!process.env.JWT_KEY) throw new Error('JWT_KEY must be defined');

  if (!process.env.MONGO_URI) throw new Error('MONGO_URI must be defined');

  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error, 'error connecting to db');
  }
};

app.listen(3000, () => {
  console.log('Listening Profile Server on port 3000');
});

start();
