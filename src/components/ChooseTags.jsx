import React, { Component } from "react";
import Tags from "./InterestTag.tsx";

const TagArray = [
  "React",
  "Vue",
  "Angular",
  "Svelte",
  "Node.js",
  "Express",
  "Django",
  "Flask",
  "FastAPI",
  "Spring",
  "Laravel",
  "Ruby on Rails",
  "ASP.NET",
  "Flask",
  "Django",
  "Rails",
  "Spring",
  "Laravel",
];

class ChooseTags extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex flex-wrap">
          {TagArray.map((tag) => (
            <Tags key={tag} interest={tag} />
          ))}
        </div>
        <div className="content-center">
          <input
            type="text"
            placeholder="Add more tags"
            className="p-2 bg-sky-900 text-white rounded"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ChooseTags;
