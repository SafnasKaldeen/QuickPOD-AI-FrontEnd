import React from "react";

const YourComponent = ({ Transcript }) => {
  return (
    <>
      <style jsx>{`
        #content {
          height: 300px;
          overflow-y: scroll;
        }
      `}</style>

      <div className="text-zinc-900 dark:text-white" id="reviews">
        <div className="container-fluid min-vh-100 aspect-auto p-8 border mt-8 border-gray-100 rounded-3xl bg-white dark:bg-zinc-900 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="text-white" id="content">
            {Transcript}
          </div>
        </div>
      </div>
    </>
  );
};

export default YourComponent;
