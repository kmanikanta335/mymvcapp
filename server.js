import app from './app.js'
import mongoose from "mongoose"
import dotenv from "dotenv" 

dotenv.config({path:"./config.env"})  
//console.log(process.env)  
const port = process.env.PORT || 3000  

mongoose.connect(  
    process.env.LOCAL_DB_URL  
).then(con=>{  
    console.log("Connection done successfully")  
}).catch(err=>{  
    console.log("Connection failed",err)  
})  

app.listen(port, ()=>{  
    console.log(`My mvc app server is running ${port}`)  
})  