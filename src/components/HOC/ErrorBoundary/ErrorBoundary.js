import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/character";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: ""
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      errorMessage: error
    });
  }

  reset = () => {
    this.props.resetError();
    this.setState({
      hasError: false,
      errorMessage: ""
    });
  };

  render() {
    return (
      <div>
        {this.state.hasError ? (
          <div>
            Error <button onClick={this.reset}>Ok</button>
          </div>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(ErrorBoundary);
