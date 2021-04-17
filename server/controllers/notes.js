const noteModel = require("../models/notes");

const getNote = async (req, res) => {
  await noteModel.find({}, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
};

const postNote = async (req, res) => {
  const notePost = new noteModel({
    noteName: req.body.noteName,
    noteContent: req.body.noteContent,
  });
  try {
    await notePost.save();
    res.send("inserted data");
  } catch (error) {
    res.send("Error" + error);
  }
};

const deleteNote = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    await noteModel.findByIdAndDelete(id);
    res.send("deleted");
    res.json(note);
  } catch (error) {
    res.send("Error" + error);
  }
};
module.exports = {
  getNote,
  postNote,
  deleteNote,
};
