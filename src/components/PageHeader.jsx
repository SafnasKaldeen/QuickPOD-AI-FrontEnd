import React, { useEffect } from "react";
import { MdChevronLeft, MdLogout, MdPerson } from "react-icons/md";
import Cookies from "js-cookie";

const PageHeader = () => {
  useEffect(() => {
    const logoutButton = document.getElementById("logout-button");
    if (logoutButton) {
      logoutButton.addEventListener("click", logOut);
    }
    return () => {
      if (logoutButton) {
        logoutButton.removeEventListener("click", logOut);
      }
    };
  }, []);

  const logOut = (event) => {
    event.preventDefault();
    Cookies.remove("access_token");
    location.href = "/Login";
  };

  return (
    <div
      className="relative z-10 py-4 px-6 flex justify-between"
      transition-name="page header"
      transition-persist
    >
      <a
        href="/Dashboard"
        aria-label="Go back to the home page"
        className="bg-zinc-900 rounded-full inline-flex justify-center items-center h-8 w-8"
        id="back"
      >
        <MdChevronLeft className="h-4 w-4 -ml-0.5" />
      </a>
      <div className="flex items-center gap-3">
        <a
          id="logout-button"
          href="#"
          className="flex relative overflow-hidden group bg-gradient-to-br from-black/10 to-black/40 rounded-md px-2.5 h-7 text-gray-200 hover:text-white transition-colors gap-1 items-center"
        >
          <span className="text-xs font-bold">Log Out</span>
          <MdLogout className="h-4 w-4" />
        </a>
        <a
          aria-label="Go to profile"
          href="/Profile"
          className="text-gray-200 hover:text-white"
        >
          <MdPerson className="h-7 w-7" />
        </a>
      </div>
    </div>
  );
};

export default PageHeader;
