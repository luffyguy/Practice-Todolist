import React from "react";
import Notes from "../Notes";
import "../../App.css";

const Display_Notes = () => {
  return (
    <div className="notes-container">
      <h1>All Notes</h1>
      <Notes />
    </div>
  );
};
export default Display_Notes;
