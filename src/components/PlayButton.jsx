import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { FaPlay } from "react-icons/fa";

const PlayIcon = ({ size = "md" }) => {
  return (
    <span
      className={`bg-primary hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black ${
        size === "md" ? "h-10 w-10" : "h-14 w-14"
      }`}
    >
      <FaPlay className="text-white" />
    </span>
  );
};

PlayIcon.propTypes = {
  size: PropTypes.oneOf(["md", "lg"]),
};

export default PlayIcon;
