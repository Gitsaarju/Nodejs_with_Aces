const { name } = require("ejs")
const express=require("express")
const app = express()

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
    res.send(<h1> Aces Workshop</h1>)
})
app.listen(3000
    ,()=>{
    console.log("Nodejs Project Day 1" + 3000)
})