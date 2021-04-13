const noteModel = require("../models/notes");

const getNote = async (req, res) => {
  try {
    const noteGet = await noteModel.find();
    res.status(200).json(noteGet);
    res.json(note);
  } catch (error) {
    res.send("Error" + error);
    res.status(404).json({ message: error.message });
  }
};

const postNote = async (req, res) => {
  const notePost = new noteModel({
    noteName: req.body.noteName,
    noteContent: req.body.noteContent,
  });
  try {
    const n1 = await notePost.save();
    res.status(200).json(n1);
    res.json(n1);
  } catch (error) {
    res.send("Error" + error);
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getNote,
  postNote,
};
