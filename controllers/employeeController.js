import employeeModel from "../models/employeeModel.js";
import MyApiError from "../utils/MyApiErorr.js";
export const getAllEmployees = async (req,res,next)=>{
    try{

    
     const empList = await employeeModel.find()

     res.status(200).json({
        status:"Succuss",
        result: empList.length,
        data:{
            empList: empList
        }
     })
    }
    catch(err){
        console.log(err,"err")
       next(new MyApiError(404, "My Api Error for getting all employees"))
    }
}

export const addNewEmployee = async (req, res, next)=>{
    try{

        const newEmp = await employeeModel.create(req.body)
        res.status(201).json({
            status:'Scucces',
            msg: "data added succufully",
            data:{
                newEmp : newEmp
            }
        })
    }catch(err){
           next(new MyApiError(404, 'failed to register the employee'))
    }

}

export const getShowEmployee = async (req,res, next)=>{
    try{

        const empList = await employeeModel.find()
    
       return res.render("Profile",{
        empList:empList
       })
    }catch(err){
          return render("Error")
    }
}

export const deleteEmployeeById = async (req,res,next)=>{
    try{
        const empId = req.query.id
        const ans = await employeeModel.deleteOne({eid: empId})
        console.log("employee is deleted",empId)
       return  res.redirect('/web')
    }catch(err){
        return render("Error")
    }
}

export const getUpdateEmployee = async (req,res, next)=>{
    try{
         const empId = req.query.id
         const employee = await employeeModel.findOne({eid:empId})
         if(!employee){
            return res.status(404).send("error! employee not found")
         }

         return res.render("Update", {employee})
    }catch(err){
        console.error("Error fetching employee for update:", err);
        return res.status(500).send("Internal Server Error");
    }
}

export const postUpdatedEmployee = async (req, res, next)=>{
    try{
        const empId = req.body.eid
        const updatedData = {
            ename:req.body.ename,
            email:req.body.email
        };
        console.log(empId,updatedData)
        const ans = await employeeModel.findOneAndUpdate({eid:empId}, updatedData,{new:true})
        if(!ans){
          return res.status(404).send("Error ! No data updated ")
        }
         
        return res.redirect('/web')
    }catch(err){
        console.error("Error fetching employee for update:", err);
        return res.status(500).send("Internal Server Error");
    }
}