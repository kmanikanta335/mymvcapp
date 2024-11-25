
export default class MyApiError extends Error
{
    constructor(statusCode, errorMessage){
        super(errorMessage)
        this.statusCode = statusCode
        this.status = 404
        Error.captureStackTrace(this,this.constructor)
    }
}