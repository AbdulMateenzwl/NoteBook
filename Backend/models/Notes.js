const mongoose = require("mongoose");

const NotesSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, default: Date.now },
    description: {type:String, require:true},
    tag: {type:String, default:"General"}, 
});

module.exports = mongoose.model("notes", NotesSchema);
