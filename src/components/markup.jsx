import React from "react";
import ReactMarkdown from "react-markdown";

const MarkupComponent = ({ markdownContent }) => {
  return (
    <div className="markup-container">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkupComponent;
