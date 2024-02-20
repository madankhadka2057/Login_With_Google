const mongoose=require("mongoose")
 async function dbConnect(ConString){
           await mongoose.connect(ConString,{ useNewUrlParser: true, useUnifiedTopology: true })
            .then(()=>{

                console.log("Database Connected Successfully ")
            })
            .catch((err)=>{
                console.log("Error  to connect database ")
            })
}
module.exports= dbConnect