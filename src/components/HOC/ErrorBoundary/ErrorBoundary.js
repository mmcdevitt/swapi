import React from "react";
import { connect } from "react-redux";
import ModalLauncher from "../../UI/Modal/ModalLauncher";
import Button from "../../UI/Button";
import Flex from "../../UI/Flex";
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
          <ModalLauncher
            title="Judge me by my size, do you?"
            resetCharacter={this.reset}
            showOnRender={true}
          >
            <React.Fragment>
              <div className="modal-content">
                <p>That is why you fail.</p>
              </div>
              <Flex className="modal-footer" jContent="flex-end">
                <Button className="btn btn-danger" handleClick={this.reset}>
                  Dissmiss
                </Button>
              </Flex>
            </React.Fragment>
          </ModalLauncher>
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
