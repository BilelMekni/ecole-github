const mongoose = require("mongoose");
const envoyerSchema = mongoose.Schema({

titre : String,
message : String,

studentsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User" // Model name
},
userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
},
status : String,

});
// Model Name "Publication" => PascalCase
const envoyer = mongoose.model("Envoyer", envoyerSchema);
module.exports = envoyer;