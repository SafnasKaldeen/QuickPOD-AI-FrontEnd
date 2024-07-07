import React from "react";

const AuthButtons = () => {
  return (
    <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
      <a
        href="/Register"
        className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
      >
        <span className="relative text-base font-bold  text-black">
          Register now
        </span>
      </a>
      <a
        href="/Login"
        className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
      >
        <span className="relative text-base font-semibold text-primary dark:text-white">
          Already Registered ?
        </span>
      </a>
    </div>
  );
};

export default AuthButtons;
