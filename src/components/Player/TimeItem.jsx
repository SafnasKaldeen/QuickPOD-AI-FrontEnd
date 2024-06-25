import React, { Component } from "react";
import { parseTime } from "@/lib/helpers";

class TimeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formattedTime: "",
    };
  }

  componentDidMount() {
    const { time } = this.props;
    const hms = parseTime(time).join(":");
    this.setState({ formattedTime: hms });
  }

  render() {
    const { formattedTime } = this.state;

    return <span>{formattedTime}</span>;
  }
}

export default TimeItem;
