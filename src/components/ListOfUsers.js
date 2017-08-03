import React, {Component} from "react";

class ListofUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  render () {
    const userDivs = this.props.users.map((user) => {
      return (
        <div>
          <div>{user.first_name}</div>
        </div>
      )
    })
    return (
      <div>
        <div>{userDivs}</div>
        <button onClick={function(){this.state.visible = !this.state.visible;
        }
      }>
      Hide</button>
      </div>
    );
  }
}

export default ListofUsers;
