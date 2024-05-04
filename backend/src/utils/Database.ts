import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(`mongodb://127.0.0.1:27017/ecommerce_24`);
        console.log(`Connected To Mongodb database ${mongoose.connection.host}`);
    }catch(error){
        console.log(`Mongodb database connection error ${error}`);
    }
}

export default connectDB;