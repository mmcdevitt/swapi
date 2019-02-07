import React from "react";
import Modal from "./Modal";

class ModalLauncher extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    if (this.props.showOnRender) {
      this.setState({
        showModal: true
      });
    }
  }

  toggleModal() {
    if (this.props.resetCharacter !== null) {
      this.props.resetCharacter();
    }

    this.setState({
      showModal: !this.state.showModal
    });
  }

  renderElement() {
    /*
      If a custom element is passed in from props, use custom element to fire the Modal.
      Else, use the default button
    */
    const { customElement, showOnRender } = this.props;

    if (!showOnRender) {
      return customElement ? (
        customElement(this.toggleModal)
      ) : (
        <button primary onClick={this.toggleModal}>
          Click
        </button>
      );
    }
  }

  renderModal() {
    const { showModal } = this.state;

    // This allows us to pass props to children components through props.children
    const childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { toggleModal: this.toggleModal });
    });

    if (showModal) {
      return (
        <Modal title={this.props.title} onCloseRequest={this.toggleModal}>
          {childrenWithProps}
        </Modal>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderElement()}
        {this.renderModal()}
      </React.Fragment>
    );
  }
}

export default ModalLauncher;
