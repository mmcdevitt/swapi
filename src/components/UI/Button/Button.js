import React from "react";
import cs from "classnames";

import "./Button.css";

class Button extends React.Component {
  classes() {
    const { large, className, size, left, open } = this.props;

    return cs(
      "btn",
      "btn-default",
      large ? "btn-lg" : null,
      size ? `btn-${size}` : null,
      className,
      { left },
      { open }
    );
  }

  render() {
    return (
      <button
        id={this.props.buttonId}
        onClick={this.props.handleClick}
        className={this.classes()}
        {...this.props}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
