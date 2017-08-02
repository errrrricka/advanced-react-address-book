import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ListofUsers from "./components/ListofUsers.js";
import UserDetail from "./components/UserDetail.js";

function App(props) {
  return (
    <div className="App">
      <ListofUsers
      users={props.users}
      currentUser={props.currentUser}
      selectUser={props.selectUser} />
    </div>
  );
}

export default App;
