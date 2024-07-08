const mongoose =require("mongoose")
// import 'mongoose'

 async function connectToDb(){
   await  mongoose.connect("mongodb+srv://agtime:Dh2005ig@cluster0.dpm3j73.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   console.log("Database connected")
 }
 module.exports = connectToDb

// module.experts=mongoose
// export default mongoose
// export{

// }