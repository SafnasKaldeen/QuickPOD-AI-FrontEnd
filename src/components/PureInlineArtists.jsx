import React from "react";
import Icon from "astro-icon";

const SideMenuItem = ({ href, iconName, children }) => (
  <li>
    <a
      href={href}
      className="flex gap-4 text-zinc-400 hover:text-zinc-100 py-3.5 px-5 font-semibold transition-all duration-300"
    >
      <Icon name={iconName} className="h-6 w-6" />
      {children}
    </a>
  </li>
);

export default SideMenuItem;
