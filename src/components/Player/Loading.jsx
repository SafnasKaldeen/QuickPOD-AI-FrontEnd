import React, { Component } from "react";
import { FaMusic } from "react-icons/fa";

class Loading extends Component {
  render() {
    const { loaded, title } = this.props;

    return (
      <div className="flex items-center gap-2">
        {loaded ? (
          <FaMusic size={20} color="#87ceeb" />
        ) : (
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
        )}
        <div>{loaded ? title : "Rendering..."}</div>
      </div>
    );
  }
}

export default Loading;
