import mongoose from "mongoose"

const DB_NAME = "feedback"

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongo db connected`)
    } catch (error) {
        console.log("Mongo db connection error: ", error);
        process.exit(1)
    }
}

export default connectDB