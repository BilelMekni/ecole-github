const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

const courSchema = mongoose.Schema({
    section : String,
    reference :{type: String, unique: true},
    titre : String,
    cours : String,
    teachersId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" // Model name
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status : String,
})



// Apply the uniqueValidator plugin to userSchema.
courSchema.plugin(uniqueValidator);
//Model name User en PascalCase
const cour = mongoose.model("Cour",courSchema);
module.exports = cour;