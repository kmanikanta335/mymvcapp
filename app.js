import express from 'express'
import empRouter from './Routes/empRoutes.js'
import { errorMiddleWare } from './controllers/errorController.js'
import path from "path"
import MyApiError from './utils/MyApiErorr.js'
import webRouter from './Routes/webRoutes.js'

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set("view engine","ejs")
// if we are using different folders name for views
app.set("views",path.resolve('./views'))
app.use("/api/v1/employee",empRouter)
// app.all('*', (req,res,next)=>{
//     next(new MyApiError(404,`${req.url} is not found, Api Error`))
// })
app.use("/web",webRouter)
app.use(errorMiddleWare)
export default app