import PropTypes from "prop-types";
import React from "react";

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  updateName = name => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
        <svg
          width="256px"
          height="417px"
          viewBox="0 0 256 417"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <polygon
              fill="#343434"
              points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
            />
            <polygon
              fill="#8C8C8C"
              points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"
            />
            <polygon
              fill="#3C3C3B"
              points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
            />
            <polygon
              fill="#8C8C8C"
              points="127.962 416.9052 127.962 312.1852 0 236.5852"
            />
            <polygon
              fill="#141414"
              points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
            />
            <polygon
              fill="#393939"
              points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
            />
          </g>
        </svg>

        <h3>Here's an idea, what if ... {this.state.name}!</h3>
        <hr />
        <form>
          <label htmlFor="name">What if:</label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={e => this.updateName(e.target.value)}
          />
        </form>
      </div>
    );
  }
}
