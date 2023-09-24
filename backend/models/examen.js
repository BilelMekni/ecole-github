const mongoose = require("mongoose");
const examenSchema = mongoose.Schema({
    titre : String,
    nom : String,
    message : String,
    date : Date,
    heure : String,
    salle : String,
    
   
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
//Model name User en PascalCase
const examen = mongoose.model("Examen",examenSchema);
module.exports = examen;