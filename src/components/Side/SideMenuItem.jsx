import React from "react";
import { FaHome } from "react-icons/fa";
import { SiApplepodcasts } from "react-icons/si";
import { BiCustomize } from "react-icons/bi";
import { MdWorkHistory } from "react-icons/md";

const SideMenuItem = ({ IconName }) => {
  if (IconName === "home") {
    return (
      <li>
        <a
          href="/Dashboard"
          className="flex gap-4 text-zinc-400 hover:text-zinc-100 py-3.5 px-5 font-semibold transition-all duration-300"
        >
          <FaHome className="h-6 w-6" />
          <span>Home</span>
        </a>
      </li>
    );
  } else if (IconName === "podcast") {
    return (
      <li>
        <a className="flex gap-4 text-zinc-400 hover:text-zinc-100 py-3.5 px-5 font-semibold transition-all duration-300">
          <SiApplepodcasts className="h-6 w-6" />
          <span>Hot News and Articles</span>
        </a>
      </li>
    );
  } else if (IconName === "Customize") {
    return (
      <li>
        <a className="flex gap-4 text-zinc-400 hover:text-zinc-100 py-3.5 px-5 font-semibold transition-all duration-300">
          <BiCustomize className="h-6 w-6" />
          <span>Your own podasts</span>
        </a>
      </li>
    );
  } else if (IconName === "History") {
    return (
      <li>
        <a
          className="flex gap-4 text-zinc-400 hover:text-zinc-100 py-3.5 px-5 font-semibold transition-all duration-300"
          href="/history"
        >
          <MdWorkHistory className="h-6 w-6" />
          <span>My Library</span>
        </a>
      </li>
    );
  } else {
    return null;
  }
};

export default SideMenuItem;
