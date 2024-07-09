const { name } = require("ejs")
const express=require("express")
const connectToDb = require("./database/databaseConnection")
const Blog=require ("./model/blogmodel")
const app = express()
// const multer=require("./middleware/multerConfig").multer
// const storge- require("./middleware/multerConfig").storage

const{multer,storage} = require ('./middleware/multerConfig')
const upload= multer({storage:storage})

connectToDb()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')
app.get("/",async (req,res)=>{
    const blogs= await Blog.find() //find returns array
    // console.log(blogs)
    if(blogs.length==0){
        res.send("No blogs")
    }
    res.render("home",{blogs:blogs})
})

app.get("/",(req,res)=>{
    console.log(req)
    res.send("this is the homepage")
})
app.get("/about",(req,res)=>{
    console.log(req)
    res.send("this is the aboutpage")
})
app.get("/blog/home" ,(req,res)=>{
    const create ="home"
    res.render("home.ejs", {create})
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
app.post("/createblog",upload.single('image'),async(req,res)=>{
    // const title=req.body.title
    // const subtitle =req.body.subtitle
    // const description=req.body.description
    const fileName=req.file.filename
    console.log("file")
    console.log("req.body")
    const{title,subtitle,description,image}=req.body
    console.log(title,subtitle,description,image)

   await Blog.create({
        title,
        subtitle,
        description,
        image: fileName
    })
    res.send("Post hitted")
})
app.use(express.static("./storage"))
app.listen(3000
    ,()=>{
    console.log("Nodejs Project Day 1" + 3000)
})