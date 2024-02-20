const mongoose=require("mongoose")

const loginSchema=new mongoose.Schema({
    email:{
        type:String,
        required: true 
    },
    given_name:{
        type:String,
        required: true  
    },
    name:{
        type:String,
        required: true  
    },
    picture:{
        type:String,
        required: true  
    },
    sub:{
        type:String,
        required: true  
    }
    
},{timestamps:true})
const loginModel=mongoose.model("loginModel",loginSchema)
module.exports=loginModel