import React, { Component } from "react";

class DropdownList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
  }

  render() {
    return (
      <div>
        <button>Select Character</button>
        <ul>
          {this.props.data.map(character => {
            return <li key={character.name}>{character.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default DropdownList;
