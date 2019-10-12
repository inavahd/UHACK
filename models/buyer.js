var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var buyerSchema = new mongoose.Schema({
   defaults: String,
    emailId: String,
    name: String,
    username: String,
    password: String,
    contact: String,
});

buyerSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("Buyer", buyerSchema);
 