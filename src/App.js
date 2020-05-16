import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; // added
import "./App.css";
// the below components will be created shortly
import Join from "./components/Join";
import Chat from "./components/Chat";
import Main from "./components/Main";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/add" component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    );
  }
}
export default App;
