const route=require('express').Router()

route.get('/loginS',(req,res)=>{
    res.render('LoginS.ejs')
})

route.get('/loginP',(req,res)=>{
    res.render('LoginP.ejs')
})

route.get('/loginL',(req,res)=>{
    res.render('LoginL.ejs')
})

module.exports=route