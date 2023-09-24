const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    telephone : String,
    email : {type: String, unique: true},
    date : Date,
    adresse : String,
    experience : String,
    matricule : String,
    password : String,
    confPassword : String,
    section : String,
    reference :String,
    titre : String,
    nom : String,
    heure : String,
    salle : String,
    niveau : String,
    role : String,
    status : String,
    gender : String,
    avatar : String,
    cours : String,
    


})



// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);
//Model name User en PascalCase
const user = mongoose.model("User",userSchema);
module.exports = user;