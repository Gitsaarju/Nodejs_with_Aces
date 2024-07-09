const multer= require ("multer")
const storage=multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./Storage')

    },
    filename : function(req,file,cb){
        // cb(null,file.originalname)
        cb(null,Date.now() + "-" + file.originalname)
    }
})

module.exports={multer,storage}

