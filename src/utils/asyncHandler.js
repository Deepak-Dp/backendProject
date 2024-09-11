
//using trycatch
const asyncHandler = (fun) => async (req, res, next)=>{
    try {
        
        await fun(req, res, next)

    } catch (error) {
    res.status(error.code || 505).json({
        success: false,
        message: error.message,

    })
    }
}

module.exports = asyncHandler;

/*
//using promises 

const asynchandler = (fun)=>{
    (req, res, next)=>{
        promise.resolve(fun(req, res, next)).catch((err)=> next(err))



        }

    }


*/