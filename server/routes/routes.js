const express = require("express");
const Notes = require("../controllers/notes")
const router = express.Router();

router.get("/", Notes.getNote);
router.post("/", Notes.postNote);

module.exports = router;
