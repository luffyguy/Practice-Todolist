const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  noteName: {
    type: String,
  },
  noteContent: {
    type: String,
  },
});

const noteModel = mongoose.model("noteData", noteSchema);

module.exports = noteModel;
