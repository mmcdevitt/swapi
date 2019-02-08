import React from "react";
import Modal from "react-modal";
import Button from "../Button";
import Flex from "../Flex";
import SVGCross from "../SVG/SVGCross";
import "./Modal.css";

Modal.setAppElement("#star-wars");

class ModalLauncher extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
  }

  componentDidMount() {
    if (this.props.openOnMount) {
      this.setState({
        modalIsOpen: true
      });
    }
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.props.resetErrorBoundary();
    this.setState({ modalIsOpen: false });
  };

  render() {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "0",
        width: "500px"
      }
    };

    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Judge me by my size, do you?"
      >
        <div className="modal-header">
          <div className="modal-title">Error Loading Movies</div>
          <div className="modal-close" onClick={this.closeModal}>
            <SVGCross />
          </div>
        </div>
        <div className="modal-content">
          <p>There was an error with your request...</p>
        </div>
        <Flex className="modal-footer" jContent="flex-end">
          <Button className="btn btn-danger" handleClick={this.closeModal}>
            Dissmiss
          </Button>
        </Flex>
      </Modal>
    );
  }
}

export default ModalLauncher;
