import React from "react";

function UserDetail(props) {
  let user = props.current;
  return (
    <div>
    <h1>{user.first_name}{user.last_name}</h1>
    <p>{user.occupation}{user.address}{user.phone}</p>
    </div>
  );
}

export default UserDetail;
