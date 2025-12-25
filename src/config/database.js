import mongoose from 'mongoose'

const connectDB= async ()=>{
    try {
          const connectionInstance= await mongoose.connect(`${process.env.DB_URI}`)


        
    } catch (error) {
         console.log("failed to connect the data base")
         process.exit(1);
    }
}

export default connectDB;