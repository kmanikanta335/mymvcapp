import express from 'express'
import { addNewEmployee, getAllEmployees } from '../controllers/employeeController.js'

const empRouter = express.Router()

empRouter.route('/home')
   .get(getAllEmployees)
   .post(addNewEmployee)

export default empRouter