const route=require('express').Router()

route.get('/loginS',(req,res)=>{
    res.render('loginS.ejs')
})

route.get('/loginB',(req,res)=>{
    res.render('loginB.ejs')
})

route.get('/loginL',(req,res)=>{
    res.render('loginL.ejs')
})


module.exports=route