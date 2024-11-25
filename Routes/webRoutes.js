import express from 'express'
import { deleteEmployeeById, getShowEmployee, getUpdateEmployee, postUpdatedEmployee } from '../controllers/employeeController.js'

const webRouter = express.Router()

webRouter.route('/')
       .get(getShowEmployee)

webRouter.route('/delete')
         .get(deleteEmployeeById)


webRouter.route('/update')
          .get(getUpdateEmployee)
          .post(postUpdatedEmployee)

export default webRouter