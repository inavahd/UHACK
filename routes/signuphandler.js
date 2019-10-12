const route=require('express').Router()

route.get('/signupS',(req,res)=>{
    res.render('signupS.ejs')
})

route.get('/signupL',(req,res)=>{
    res.render('signupL.ejs')
})

route.get('/signupB',(req,res)=>{
    res.render('signupB.ejs')
})


module.exports=route