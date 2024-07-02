import React, { Component } from "react";
import Tags from "./InterestTag.tsx";

const InterestsArray = [
  { name: "General Topic 1", active: false },
  { name: "General Topic 2", active: false },
  { name: "General Topic 3", active: false },
  { name: "General Topic 4", active: false },
  { name: "General Topic 5", active: false },
  { name: "General Topic 6", active: false },
  { name: "General Topic 7", active: false },
  { name: "General Topic 8", active: false },
  { name: "General Topic 9", active: false },
  { name: "General Topic 10", active: false },
  { name: "General Topic 11", active: false },
  { name: "General Topic 12", active: false },
  { name: "General Topic 13", active: false },
  { name: "General Topic 14", active: false },
  { name: "General Topic 15", active: false },
];

class ChooseTags extends Component {
  state = {
    tags: InterestsArray,
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
        <h2 class="text-2xl font-bold px-6 relative z-10 mt-4">
          Choose your general topic to generate Blogcasts
        </h2>
        <div class="px-6 relative z-10 mt-4">
          <div class="flex flex-wrap mt-6 gap-4 justify-between">
            <div class="flex flex-wrap justify-center gap-y-4 gap-x-6">
              <div className="flex flex-wrap justify-center items-center">
                {tags.map((tag) => (
                  <Tags
                    key={tag.name}
                    interest={tag.name}
                    active={tag.active}
                  />
                ))}
              </div>
              <div className="content-center flex items-center">
                <input
                  type="text"
                  placeholder="Add your General topic"
                  value={newTag}
                  onChange={this.handleChange}
                  className="p-2 bg-sky-900 text-white rounded border border-gray-400 flex-1 mr-2"
                />
                <button
                  className="p-2 text-white rounded bg-green-500"
                  onClick={this.handleAddTag}
                >
                  Add Topic
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="relative items-center justify-center">
          <div class="text-center mx-auto">
            <div class="justify-center">
              <a href="/Dashboard">
                <button class="bg-purple-700 text-white text-xs uppercase font-semibold px-5 py-3 rounded-lg border border-transparent my-5 cursor-pointer">
                  Generate Blogcasts
                </button>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChooseTags;
