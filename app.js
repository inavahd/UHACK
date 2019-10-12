var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    //User        = require("./models/user"),
    Buyer        = require("./models/buyer"),
    Discount       = require("./models/discount"),
    Lender        = require("./models/lender"),
    Seller      = require("./models/seller"),
    Proposal     = require("./models/proposal");

mongoose.connect("mongodb://localhost:27017/uhack", {useNewUrlParser: true})

//app.set("view-engine","ejs")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
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

const signupRoute=require('./routes/signuphandler')
const loginRoute=require('./routes/loginhandler')
const uploadRoute=require('./routes/uploadHandler')

passport.use(new LocalStrategy(Buyer.authenticate()));
passport.serializeUser(Buyer.serializeUser());
passport.deserializeUser(Buyer.deserializeUser());

passport.use(new LocalStrategy(Lender.authenticate()));
passport.serializeUser(Lender.serializeUser());
passport.deserializeUser(Lender.deserializeUser());

passport.use(new LocalStrategy(Seller.authenticate()));
passport.serializeUser(Seller.serializeUser());
passport.deserializeUser(Seller.deserializeUser());

app.get('/',function(req,res){
    res.render("landing.ejs",{currentUser: req.user});
})

app.use(signupRoute)


app.use(loginRoute)

app.use(uploadRoute)


app.post("/signupS", function(req, res){
    var newUser = new Seller({ 
                                username: req.body.username,
                                contact: req.body.lcontactnum,
                                emailId: req.body.email,
                                name: req.body.firstname,
                             });
    Seller.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("signupS.ejs",{currentUser: req.user});
        }
        passport.authenticate("local")(req, res, function(){
//           res.redirect("/campgrounds"); 
            res.redirect('/loginS')
        });
    });
})


app.post("/signupL", function(req, res){
    var newUser = new Lender({ 
                                username: req.body.username,
                                contact: req.body.lcontactnum,
                                emailId: req.body.email,
                                name: req.body.firstname,
                             });
    Lender.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("signupL.ejs",{currentUser: req.user});
        }
        passport.authenticate("local")(req, res, function(){
//           res.redirect("/campgrounds"); 
            res.redirect('/loginL')
        });
    });
})


app.post("/signupB", function(req, res){
    var newUser = new Buyer({ 
                                username: req.body.username,
                                contact: req.body.lcontactnum,
                                emailId: req.body.email,
                                name: req.body.firstname,
                                defaults: "0"
                             });
    Buyer.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("signupB.ejs",{currentUser: req.user});
        }
        passport.authenticate("local")(req, res, function(){
//           res.redirect("/campgrounds"); 
            res.redirect('/loginB')
        });
    });
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