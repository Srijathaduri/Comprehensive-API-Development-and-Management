module.exports=(err,req,res,next)=>{
    console.error(`[ERROR] ${err.message}`);
    const statusCode = res.statusCode!==200 ? res.statusCode : 500 ;
    res.status(statusCode).json({
        success:false,
        error : err.message || "Internal Server Error",
        stack : process.env.NODE_ENV === 'production' ? undefined : err.stack
    });
}