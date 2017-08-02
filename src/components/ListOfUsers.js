import React from "react";
import SelectUser from "../index.js";

class ListofUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      searchText: "",
  };
}

buttonClick = () => {
  this.setState(prevState => ({
    visible: !prevState.visible
  }));
}

userSelected = (chosenOne) => {
  console.log(chosenOne);
}

changeInput (event) {
  event.preventDefault();
  this.setState({
    searchText: e.target.value
  })
};

render() {
  const userDivs = this.props.users.map((user) => {
    if (this.state.visible) {
      return (
        <div key={user.id}>
        {user.first_name}
        <a onClick={ () => {this.props.selectUser(user)} }> View </a>
        </div>
      )
    }
    else return <div></div>
   })

  return (
    <div>
      <input label='Search'placeholder="search" onChange={this.changeInput} />
      <div>{userDivs}</div>
    <button onClick={this.buttonClick}>{this.state.visible ? 'HIDE' : 'SHOW'}</button>
    </div>
    )
  }
}

export default ListofUsers;
