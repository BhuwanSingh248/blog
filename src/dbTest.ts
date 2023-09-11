// src/dbTest.ts

import mongoose from 'mongoose';

export const testDatabaseConnection = () => {
  return new Promise((resolve, reject) => {
    if (mongoose.connection.readyState === 1) {
      resolve('Database connection is successful');
    } else {
      reject('Database connection failed');
    }
  });
};
