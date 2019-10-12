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

route.post('/loginS',(req,res)=>{
    res.render('seller.ejs')
})

module.exports=route