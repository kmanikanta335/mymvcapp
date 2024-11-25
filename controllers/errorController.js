export const errorMiddleWare = (err,req, res, next)=>{
     err.statusCode = err.statusCode || 500
     err.status = err.status || 'Error'

     res.status(404).json({
        statusCode : err.status,
        msg : err.message
     })
}