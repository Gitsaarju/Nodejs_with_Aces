const { name } = require("ejs")
const express=require("express")
const connectToDb = require("./database/databaseConnection")
const Blog=require ("./model/blogmodel")
const bcrypt = require('bcrypt')
const register = require("./model/usermodel")
// const login = require ("./model/usermodel")
const encodeURI = require('encodeurl')
const app = express()
// const multer=require("./middleware/multerConfig").multer
// const storge- require("./middleware/multerConfig").storage

const{multer,storage} = require ('./middleware/multerConfig')
const Register = require("./model/usermodel")
const upload= multer({storage:storage})

connectToDb()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')
app.get("/blog/home",async (req,res)=>{
    const blogs= await Blog.find() //find returns array
    // console.log(blogs)
    if(blogs.length==0){
        res.send("No blogs")
    }
    res.render("home.ejs",{blogs:blogs})
})

app.get("/home",(req,res)=>{
    console.log(req)
    res.send("this is the homepage")
})
app.get("/about",(req,res)=>{
    console.log(req)
    res.send("this is the aboutpage")
})
// app.get("/blog/home" ,(req,res)=>{
//     const create ="home"
//     res.render("home.ejs", {create})
// })
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
// app.get("/blog",(req,res)=>{
//     const page="blog"
//     res.render("blogpage.ejs",{page})
// })
app.get("/blogpage/:id",async(req,res) =>{
    const id=req.params.id
   const blog= await Blog.findById(id)
   console.log(blog)
    res.render("blogpage.ejs",{blog,encodeURI:encodeURI})
})

app.get("/deleteblog/:id",async (req,res)=>{
    const id = req.params.id 
    await Blog.findByIdAndDelete(id)
    res.redirect("/")
})
app.get("/Updateblog/:id",async (req,res)=>{
    const blog = req.params.id
    await Blog.findByIdAndDelete(id)
    const {id}=req.params

    res.render("./Editblog",{blog:blog})

})

app.post("/Editblog/:id",async(req,res)=>{
    const id=req.parms.id
    const {title,subtitle,description} =req.body
    await Blog.findByIdAndUpdate(id,{
        title:title,
        subtitle:subtitle,
        description:description
    })
    res.redirect("/blogpage/" + id)
})
    

app.get("/register",(req,res)=>{
    res.render("./Authentication/register")
})


app.post("/register",async (req,res)=>{
    const {username,email,password} = req.body 
   await User.create({
        username : username, 
        email : email, 
        password : bcrypt.hashSync(password,12)
    })
    // res.send("User registered successfully")
    res.redirect("/login")
})
    
    


app.get("/login",(req,res)=>{
    res.render("./Authentication/login")
})

app.post("/login",async(req,res)=>{
   
    const{email,password}=req.body
    const data = await User.findOne({email:email})
    if (user.length ===0){
        res.send("Invalid email")
        // res.redirect("/login")
    }
    else{
        const isMatched=bcrypt.comparesync(password,user[0].password)
        if(!isMatched){
            res.send("Invalid password")
            // res.redirect("/login")
        } else{
            res.send("Logged in successful")
        }
        }
    })

    

   
    
app.use(express.static("./storage"))
app.listen(3000
    ,()=>{
    console.log("Nodejs Project" + 3000)

})