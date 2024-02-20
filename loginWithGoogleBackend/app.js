require('dotenv').config()
const express=require('express')
const session=require("express-session")
const app=express()
const cors=require("cors")
const dbConnect= require('./database/dbConfig')
const PORT=process.env.PORT||3001
dbConnect(process.env.ConnectionString)
const loginRoute=require("./routes/loginRoute")
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false
}))
app.get("/",(req,res)=>{
    res.json({
        message:"Surver is running"
    })
})
app.use("/login",loginRoute)
app.listen(PORT,()=>{
    console.log(`Node is running on port ${PORT}`)
})