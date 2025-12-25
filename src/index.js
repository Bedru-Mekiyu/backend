import dotenv from 'dotenv';
import connectDB from './config/database.js';
import app from './app.js';

dotenv.config({
    path:'./.env'
});

const startserver= async ()=>{
    try {

        await connectDB();
        app.on('error',(error)=>{
            console.log("error",error)
            throw new error
        })

    app.listen(process.env.PORT,()=>{
        console.log(`the server is running on the port ${process.env.PORT}`)
    })

        
    } catch (error) {
         console.error("the mongodb problem error")
    }
}
startserver();