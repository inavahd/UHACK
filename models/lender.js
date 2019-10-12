var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var lenderSchema = new mongoose.Schema({
    emailId: String,
    name: String,
    username: String,
    password: String,
    contact: String,
});

lenderSchema.plugin(passportLocalMongoose)


module.exports = mongoose.model("Lender", lenderSchema);
 