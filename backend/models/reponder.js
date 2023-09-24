const mongoose = require("mongoose");

const reponderSchema = mongoose.Schema({

title : String,
description : String,

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
// Model Name "Reponder" => PascalCase
const reponder = mongoose.model("Reponder", reponderSchema);
module.exports = reponder;