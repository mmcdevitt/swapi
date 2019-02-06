import React, { Component } from "react";

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

  render() {
    return (
      <div>{this.state.hasError ? <div>Error</div> : this.props.children}</div>
    );
  }
}

export default ErrorBoundary;
