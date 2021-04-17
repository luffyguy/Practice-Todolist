import React, { useState } from "react";
import Axios from "axios";
import "../App.css";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Note = () => {
  const [noteName, setNoteName] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const addToList = () => {
    console.log(noteName + noteContent);
    Axios.post("http://localhost:3001/routes/insert", {
      noteName: noteName,
      noteContent: noteContent,
    });
  };

  /* styles */
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "40vw",
      },
    },
    title: {
      fontSize: "35px",
    },
    content: {
      fontFamily: "sans-serif",
      fontSize: "15px",
    },
  }));
  const classes = useStyles();
  return (
    <div className="container">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className={classes.title}
          id="outlined-basic"
          placeholder="Title"
          variant="filled"
          onChange={(event) => {
            setNoteName(event.target.value);
          }}
        />
        <br />
        <TextareaAutosize
          className={classes.content}
          placeholder="Content"
          rowsMin={15}
          onChange={(event) => {
            setNoteContent(event.target.value);
          }}
        />
        <br />
        <Button variant="contained" color="primary" onClick={addToList}>
          Save
        </Button>
      </form>
    </div>
  );
};

export default Note;
