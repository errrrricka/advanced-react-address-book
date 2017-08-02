import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListofUsers from "./components/ListofUsers.js";
import UserDetail from "./components/UserDetail.js";

function App(props) {
  return (
    <div>
      <div className="App">
        <ListofUsers
        selectUser={props.selectUser} users={props.users} />
        <UserDetail selectedUser={props.selectedUser} />
      </div>
    </div>
  );
}

export default App;
