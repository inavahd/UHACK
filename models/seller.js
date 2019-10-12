var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var sellerSchema = new mongoose.Schema({
    emailId: String,
    name: String,
    username: String,
    password: String,
    contact: String,
});
 
sellerSchema.plugin(passportLocalMongoose)


module.exports = mongoose.model("Seller", sellerSchema);
 