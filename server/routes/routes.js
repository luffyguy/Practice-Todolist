const express = require("express");
const Notes = require("../controllers/notes")
const router = express.Router();

router.get("/read", Notes.getNote);
router.post("/insert", Notes.postNote);
router.delete("/delete/:id", Notes.deleteNote);

module.exports = router;
