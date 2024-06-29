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
      <div className="flex flex-wrap">
        {TagArray.map((tag) => (
          <Tags key={tag} interest={tag} />
        ))}
      </div>
    );
  }
}

export default ChooseTags;
