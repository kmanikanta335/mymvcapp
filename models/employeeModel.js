import mongoose from "mongoose";

const empSchema = new mongoose.Schema({
    eid:{
        type: Number,
        required:["true","Employee id is needed it should be unique"],
        unique:true
    },
    ename:{
        type:String,
        required:["true","Employee name is needed "],
        default:"John Doe"

    },
    email:{
        type:String,
        required:["true","Employee mail is needed"]
    },
    password:{
        type:String,
        required:["true","Employee password is needed"]

    }
       
    
})

const empModel = mongoose.model("newEmpModel", empSchema)

export default empModel
