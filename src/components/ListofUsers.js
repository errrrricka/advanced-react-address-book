import React from 'react';

// I need props to have a property called users
// and it needs to be an array of user objects

function ListofUsers(props) {
  const users = props.users;
  const userDivs = users.map(function (user, i) {
    return <div key={i}> {user.first_name} </div>;
  });
  return (
    <div className="ListofUsers">
    <button type="button">Hide</button>
    {userDivs}
    </div>
  );
}

// same thing as HW 1, importing map function as a variable.

export default ListofUsers;
