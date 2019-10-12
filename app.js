var express = require("express")
var bodyParser = require("body-parser")
var app = express()
const hbs=require('hbs')
const path=require('path')
var mongoose = require("mongoose")
var passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    User        = require("./models/user");

mongoose.connect("mongodb://localhost:27017/uhack", {useNewUrlParser: true})

app.set("view-engine","ejs")
app.set("view-engine", "hbs")
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(path.join(__dirname,'/partials'))

app.use(require("express-session")({
    secret: "COE-2 is shit!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
})


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/',function(req,res){
    res.render("landing.hbs");
})




function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(3000, function(){
    console.log("The app has started!!");
})