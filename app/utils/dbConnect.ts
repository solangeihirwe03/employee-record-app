import mongoose from "mongoose";
import { config } from "dotenv";

config();

const dbConnect = async () => {
    if (mongoose.connection.readyState === 1) {
        console.log("Database is already connected")
        return;

    }

    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Database connected successfully")
    } catch (error: any) {
        console.error("Database connection failed: ", error.message)
    }
};

export default dbConnect