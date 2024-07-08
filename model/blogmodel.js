const mongoose=require("mongoose")
const Schema=mongoose.Schema

 const blogSchema = new Schema({
    title:{
        type:String
    },
    subtitle:{
        type:String
    },
    description:{
        typr:String
    },
    image:{
        type:String
    }
})

 const Blog =mongoose.model("BLog",blogSchema)
 module.exports = Blog