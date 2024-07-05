import React from "react";
import ReactMarkdown from "react-markdown";

const MarkupComponent = ({ markdownContent }) => {
  return (
    <div className="markup-container mb-10">
      {/* {markdownContent} */}
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                margin: "1.5rem 0",
                color: "skyblue",
                fontFamily: "fantasy",
                borderBottom: "2px solid skyblue",
                // textShadow:
                //   "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
              }}
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                margin: "1.3rem 0",
                color: "skyblue",
                fontFamily: "serif",
              }}
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              style={{
                fontSize: "2.3rem",
                fontWeight: "bold",
                margin: "1.1rem 0",
                color: "#ff7e33",
                fontFamily: "cursive",
              }}
              {...props}
            />
          ),
          h4: ({ node, ...props }) => (
            <h4
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                margin: "0.9rem 0",
                color: "lightgreen",
                fontFamily: "initial",
              }}
              {...props}
            />
          ),
          h5: ({ node, ...props }) => (
            <h5
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                margin: "0.7rem 0",
                color: "slateblue",
              }}
              {...props}
            />
          ),
          h6: ({ node, ...props }) => (
            <h6
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                margin: "0.5rem 0",
                color: "salmon",
              }}
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            <a
              style={{
                color: "skyblue",
                textDecoration: "underline",
              }}
              {...props}
            />
          ),
          li: ({ node, ...props }) => (
            <li
              style={{
                margin: "0.7rem 0",
                listStyle: "circle",
                marginLeft: "2rem",
              }}
              {...props}
            />
          ),
          em: ({ node, ...props }) => (
            <em
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
              }}
              {...props}
            />
          ),
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkupComponent;
