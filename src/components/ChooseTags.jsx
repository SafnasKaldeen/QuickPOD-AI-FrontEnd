import React, { Component } from "react";
import Tags from "./InterestTag.tsx";

const TagArray = [
  { name: "React", active: false },
  { name: "Vue", active: false },
  { name: "Angular", active: false },
  { name: "Svelte", active: false },
  { name: "Node.js", active: false },
  { name: "Express", active: false },
  { name: "Django", active: false },
  { name: "Flask", active: false },
  { name: "FastAPI", active: false },
  { name: "Spring", active: false },
  { name: "Laravel", active: false },
  { name: "Ruby on Rails", active: false },
  { name: "ASP.NET", active: false },
];

class ChooseTags extends Component {
  state = {
    tags: TagArray,
    newTag: "",
  };

  handleAddTag = () => {
    const { newTag, tags } = this.state;
    if (newTag && !tags.find((tag) => tag.name === newTag)) {
      this.setState({
        tags: [...tags, { name: newTag, active: true }],
        newTag: "",
      });
    }
  };

  handleChange = (event) => {
    this.setState({ newTag: event.target.value });
  };

  render() {
    const { tags, newTag } = this.state;

    return (
      <React.Fragment>
        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <Tags key={tag.name} interest={tag.name} active={tag.active} />
          ))}
        </div>
        <div className="content-center flex items-center">
          <input
            type="text"
            placeholder="Add more tags"
            value={newTag}
            onChange={this.handleChange}
            className="p-2 bg-sky-900 text-white rounded border border-gray-400 flex-1 mr-2"
          />
          <button
            className="p-2 text-white rounded bg-green-500"
            onClick={this.handleAddTag}
          >
            Add Tag
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ChooseTags;
