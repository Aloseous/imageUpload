import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
    const connection = await mongoose.connect(process.env.CONNECTION_URL)
    }catch(err) {
        console.log('Error in connection')
    }

}
