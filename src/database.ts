import mongoose from "mongoose";
import dotenv from 'dotenv';

// load env variable from .env file

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || ""


const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
        });
        console.log('connected to Mogodb')
    } catch (error) {
        console.error('MongoDB connnection error :', error);
        process.exit(1);
    }
};

export default connectDB;