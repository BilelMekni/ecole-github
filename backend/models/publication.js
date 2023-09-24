const mongoose = require("mongoose");
const publicationSchema = mongoose.Schema({

titre : String,
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

});
// Model Name "Publication" => PascalCase
const publication = mongoose.model("Publication", publicationSchema);
module.exports = publication;