import React from "react";
import noteList from "../noteList";
import "../all.css";

const Note = () => {
  return (
    <div>
      <h1>Notes</h1>
      <label>Title:</label>
      <input type="text" />
      <label>Content:</label>
      <input type="textbox" />
      <button>Add to list</button>
    </div>
  );
};

export default Note;
