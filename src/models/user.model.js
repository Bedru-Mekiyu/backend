import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'

const userSchema= new Schema({

    username:{
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

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password= await bcrypt.hash(this.password,10);

    next();
});

userSchema.methods.comparePassword=async function (password) {
    return await bcrypt.compare(password,this.password)
}


export const User=mongoose.model("User",userSchema)