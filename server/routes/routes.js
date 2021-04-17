const express = require("express");
const Notes = require("../controllers/notes")
const router = express.Router();

router.get("/read", Notes.getNote);
router.post("/insert", Notes.postNote);

module.exports = router;
