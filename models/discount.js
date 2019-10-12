var mongoose = require("mongoose");

var discountSchema = new mongoose.Schema({
    amount: String,
    dueDate: String,
    setteled: String,
    seller: {
        type: mongoose.Schema.Types.ObjectId,
         ref: "Seller"
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
         ref: "Buyer"
    }
});


module.exports = mongoose.model("Discount", discountSchema);
 