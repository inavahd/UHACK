const route=require('express').Router()

route.get('/loginS',(req,res)=>{
    res.render('loginS.ejs')
})

route.get('/loginP',(req,res)=>{
    res.render('loginP.ejs')
})

route.get('/loginL',(req,res)=>{
    res.render('loginL.ejs')
})

module.exports=route