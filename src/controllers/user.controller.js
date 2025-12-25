

import { User } from "../models/user.model.js";

const registerUser=async (req,res)=>{
    try {
   const {username,password,email}=req.body;

   if(!username|| !password|| !email){
  return  res.status(400).json({message:'All fields are required'})
   }
   

   const existing= await User.findOne({email:email.toLowerCase()})

   if(existing){
    return res.status(400).json({message:"the user already exist"})
   }

   const user= await User.create({
    username,
    password,
    email:email.toLowerCase()
   });
   res.status(201).json({
    message:'the user is created successfully',
    user:{userId:user._id,email:user.email,username:user.username}
   })

        
    } catch (error) {
       res.status(500).json({message:"the server is causing the problem",error:error.message})
    }
}

const loginUser=async (req,res)=>{
       try {

     const {email,password}=req.body;
    

    const user=await User.findOne({
        email:email.toLowerCase()
    })

    if(!user){
        return res.status(400).json({
            message:"the user is not found"
        });
        


        const isMatch=await user.comparePassword(password);
        if(!isMatch) return res.status(400).json({
            message:"Invalid credentials"
        });
        res.status(200).json({
            message:"user logged in successfully",
            email:user.email,
            username:user.username,
            userId:user._id
        })
    }
        
       } catch (error) {

        res.status(500).json({
            message:"internal server error"
        })
        
       }
}

export{registerUser,loginUser};