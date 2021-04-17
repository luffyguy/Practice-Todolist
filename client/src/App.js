import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Display_Notes from "./Components/Pages/Display_Notes";
import About from "./Components/Pages/About";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notes" component={Display_Notes} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default App;
