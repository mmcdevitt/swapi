import React from "react";
import { connect } from "react-redux";
import ModalLauncher from "../../UI/Modal/ModalLauncher";
import * as actions from "../../../actions/character";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

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
      <React.Fragment>
        {this.state.hasError ? (
          <ModalLauncher resetErrorBoundary={this.reset} openOnMount={true} />
        ) : (
          this.props.children
        )}
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  actions
)(ErrorBoundary);
