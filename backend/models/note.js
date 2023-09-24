const mongoose = require("mongoose");
const noteSchema = mongoose.Schema({
    nomeleve : String,
    nom : String,
    section: String,
    niveau : String,
    note : String,
    coefficient : String,
    semester : String,
    remarque : String,
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
const note = mongoose.model("Note",noteSchema);
module.exports = note;