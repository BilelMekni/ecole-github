const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const contactSchema = mongoose.Schema({
    nomPrenom : String,
    email : {type: String, unique: true},
    titre : String,
    message : String,
    
})
// Apply the uniqueValidator plugin to contactSchema.
contactSchema.plugin(uniqueValidator);
//Model name Contact en PascalCase
const contact = mongoose.model("Contact",contactSchema);
module.exports = contact;