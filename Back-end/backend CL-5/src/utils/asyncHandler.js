//high order function -
// const asyncHandler = (func) => async()=>{}

//using try catch 
// const asyncHandler = (func)=>async(req,res,next)=>{
//     try{
//         await(req,res,next)
//     }
//     catch{
//         res.status(err.code || 500 )
//         .json({success:false,message:err.message})
//     }
// }
// export {asyncHandler}

//using promise
const asyncHandler = (requestHandler) => {
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)
        .catch(err)=next(err))
    }
}
export {asyncHandler}