import React from "react";
import SVGCross from "../SVG/SVGCross";

import "./Modal.css";

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener("keyup", this.handleEscKeyUp, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleEscKeyUp, false);
  }

  handleEscKeyUp = e => {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener("keyup", this.handleEscKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  };

  render() {
    const { onCloseRequest, title } = this.props;

    return (
      <div className="modal-wrapper">
        <div className="backdrop" onClick={onCloseRequest} />
        <div className="modal">
          <div className="modal-header">
            <div className="modal-title">{title}</div>
            <div className="modal-close" onClick={onCloseRequest}>
              <SVGCross />
            </div>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
