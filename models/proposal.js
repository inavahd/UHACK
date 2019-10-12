var mongoose = require("mongoose");

var proposalSchema = new mongoose.Schema({
    interestRate: String,
    lender: {
        type: mongoose.Schema.Types.ObjectId,
         ref: "Lender"
    },
    discount: {
        type: mongoose.Schema.Types.ObjectId,
         ref: "Discount"
    },
});


module.exports = mongoose.model("Proposal", proposalSchema);