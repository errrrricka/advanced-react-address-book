import React from 'react';

function ListofUsers(props) {
  const userDiv = props.users.map((user) => {
    return (
      <div>
      {user.first_name}
      </div>
    );
  })
  return (
      <div>
      {userDiv}
        <button onClick={
          () => {
            //put a function right here anyway you want
            console.log("hello");
          }
        }>Hide</button>
      </div>
  );
}

// same thing as HW 1, importing map function as a variable.

export default ListofUsers;
