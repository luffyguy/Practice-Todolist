const noteModel = require("../models/notes");

const getNote = async (req, res) => {
  const note = await noteModel.find();
  try {
    res.json(note);
  } catch (error) {
    res.send("Error" + error);
  }
};

const postNote = async (req, res) => {
  const note = new noteModel({
    noteName: req.body.noteName,
    noteContent: req.body.noteContent,
  });
  const n1 = await note.save();
  try {
    res.json(n1);
  } catch (error) {
    res.send("Error" + error);
  }
};

module.exports = {
  getNote,
  postNote,
};
