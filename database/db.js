import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/userData';

const connectDB = async () => {
    try {
        await mongoose.connect(url, {});
        console.log('Database is connected');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};
export default connectDB