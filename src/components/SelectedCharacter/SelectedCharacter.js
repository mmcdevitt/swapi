import React, { Component } from "react";
import { connect } from "react-redux";

class SelectedCharacter extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <div>{this.props.character.name}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { data } = state.selectedCharacter;

  return {
    character: data
  };
}

export default connect(mapStateToProps)(SelectedCharacter);
