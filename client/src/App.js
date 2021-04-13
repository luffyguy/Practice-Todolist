import React from "react";
import {Route, Switch} from "react-router-dom";
import home from "./components/Pages/home";
import note from "./components/Pages/note";
import about from "./components/Pages/about";
import Navbar from "./components/navbar"
import noteList from "./components/noteList"

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/note" component={note} />
        <Route path="/about" component={about} />
      </Switch>
    </div>
  );
}

export default App;
