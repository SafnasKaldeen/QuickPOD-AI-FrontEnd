import React from "react";
import ReactMarkdown from "react-markdown";

const MarkupComponent = ({ markdownContent }) => {
  return (
    <div className="markup-container mb-10">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1
              style={{
                fontSize: "3.5rem",
                margin: "2rem 0",
                color: "#ebebe9",
                fontFamily: "fantasy",
                lineHeight: "4rem",
                borderBottom: "2px solid #CCF241",
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
                color: "grey",
                fontFamily: "poppins",
              }}
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              style={{
                fontSize: "2rem",
                // fontWeight: "bold",
                margin: "1.1rem 0",
                color: "#DF4D4E",
                fontFamily: "poppins",
              }}
              {...props}
            />
          ),
          h4: ({ node, ...props }) => (
            <h4
              style={{
                fontSize: "1.7rem",
                fontWeight: "bold",
                margin: "0.9rem 0",
                color: "lightgreen",
                fontFamily: "poppins",
              }}
              {...props}
            />
          ),
          h5: ({ node, ...props }) => (
            <h5
              style={{
                fontSize: "1.6rem",
                // fontWeight: "bold",
                margin: "0.7rem 0",
                color: "slateblue",
              }}
              {...props}
            />
          ),
          h6: ({ node, ...props }) => (
            <h6
              style={{
                fontSize: "1.5rem",
                // fontWeight: "bold",
                margin: "0.5rem 0",
                color: "salmon",
              }}
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            <a
              style={{
                color: "#CCF241",
                textDecoration: "underline",
                target: "_blank",
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
              style={
                {
                  // fontStyle: "italic",
                  // fontWeight: "bold",
                }
              }
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              style={{
                fontSize: "1.4rem", // Adjust the font size as per your requirement
                // lineHeight: "1.5rem", // Adjust the line height as per your requirement
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
