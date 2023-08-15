exports.status= async(req,res)=>{
    res.status(200).json({status:"success",data:"Server is running"})
}