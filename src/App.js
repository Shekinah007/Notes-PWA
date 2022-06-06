import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
// import "./App.css";
import Home from "./features/components/Home";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./features/components/Navbar";
import Note from "./features/components/Note";
import EditNote from "./features/components/EditNote";

{
  /* <img src={logo} className="App-logo" alt="logo" /> */
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/NotePad">
            <Home />
          </Route>
          <Route exact path="/createNote">
            <Note />
          </Route>
          <Route exact path="/editNote/:id">
            <EditNote />
          </Route>
        </Switch>
        {/* <a target="_blank" href="https://icons8.com/icon/IA4hgI5aWiHD/add">
          Add
        </a>
        icon by
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a> */}
      </div>
    </Router>
  );
}

export default App;
