const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  noteName: {
    type: String,
  },
  noteContent: {
    type: String,
  },
});

const note = mongoose.model("noteData", noteSchema);
module.export = note;
