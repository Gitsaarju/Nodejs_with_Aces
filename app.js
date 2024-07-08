const { name } = require("ejs")
const express=require("express")
const connectToDb = require("./database/databaseConnection")
const Blog=require ("./model/blogmodel")
const app = express()

connectToDb()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')

app.get("/",(req,res)=>{
    console.log(req)
    res.send("this is the homepage")
})
app.get("/about",(req,res)=>{
    console.log(req)
    res.send("this is the aboutpage")
})
app.get("/about",(req,res)=>{
    const name=rjuGautam
    res.render("about.ejs",{ name : name})
})
app.get("/contact",(req,res)=>{
    console.log(req)
    res.send("<h1> Aces Workshop</h1>")
   
})
app.get("/createblog",(req,res)=>{
    const create="createblog"
    res.render("creteblog.ejs",{create})
    
})
app.get("/createblog",(req,res)=>{
    res.render("./blog/createBlog")
})
app.post("/createblog",async(req,res)=>{
    // const title=req.body.title
    // const subtitle =req.body.subtitle
    // const description=req.body.description
    const{title,subtitle,description}=req.body
    console.log(title,subtitle,description)

   await Blog.create({
        title,
        subtitle,
        description
    })
    res.send("Post hitted")
})
app.listen(3000
    ,()=>{
    console.log("Nodejs Project Day 1" + 3000)
})