import mongoose, { Schema } from "mongoose";

const userSchema= new Schema({

    userName:{
        type:String,
        required:true,
        unqiue:true,
        trim:true,
        lowercase:true,
        minlength:1,
        maxlength:30,

    },
    password:{
        type:String,
        required:true,
        minlength:1,
        maxlength:30,
        trim:true
        
    },
    email:{
        type:String,
        required:true,
        unqiue:true,
        lowercase:true,
    }

},
{
    timestamps:true
}

)

export const User=mongoose.model("User",userSchema)