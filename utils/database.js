import mongoose from "mongoose";

let isConnected = false

export const connectToDB = async () => {
    if (isConnected) {
        console.log("Using existing DB connection");
        return;
        }
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "books",
            useNewUrlparser: true,
            useUnifiedTopology: true
        });
        isConnected = true
        console.log("successfully connected")
    } catch (error) {
        console.log(error.message)
    }
}