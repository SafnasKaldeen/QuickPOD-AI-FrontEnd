import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class Switch extends Component {
  constructor(props) {
    super(props);
    this.id = uuid();
    this.state = {
      checked: this.props.checked || false,
    };
  }

  toggleSwitch = () => {
    const { onChange } = this.props;
    const { checked } = this.state;

    this.setState(
      {
        checked: !checked,
      },
      () => {
        if (onChange) {
          onChange(this.state.checked);
        }
      }
    );
  };

  render() {
    const { label } = this.props;
    const { checked } = this.state;

    return (
      <label
        htmlFor={this.id}
        className="flex items-center cursor-pointer transition-colors"
      >
        <div
          className={`relative ${
            checked ? "bg-green-500" : "bg-gray-300"
          } w-10 h-5 rounded-full transition`}
        >
          <input
            type="checkbox"
            id={this.id}
            className="switch sr-only"
            checked={checked}
            onChange={this.toggleSwitch}
          />
          <div
            className={`dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform ${
              checked ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>
        </div>
        <div className="ml-1 text-green-500 font-medium">{label}</div>
      </label>
    );
  }
}

export default Switch;
