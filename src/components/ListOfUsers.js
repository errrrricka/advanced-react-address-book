import React from "react";

function ListofUsers(props) {
  const userDivs = props.users.map((user) => {
    return <div>{user.first_name}</div>
  })
  return<div>{userDivs}</div>;
}

export default ListofUsers;
