import React from "react";
import Note from "../Note";
import Notes from "../Notes";
import "../../App.css"

const Home = () => {
  return (
    <div className="home">
      <Note />
      <h2>Recent Notes</h2>
      <Notes / >
    </div>
  );
};

export default Home;
