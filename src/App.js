import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ListofUsers from "./components/ListofUsers.js"

function App(props) {
  return (
    <div className="App">
      <ListofUsers users={props.users} />
    </div>
  );
}

export default App;
