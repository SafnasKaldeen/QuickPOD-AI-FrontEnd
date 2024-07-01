import React, { Component } from "react";
import Tags from "./InterestTag.tsx";

const InterestsArray = [
  { name: "Sports", active: false },
  { name: "Music", active: false },
  { name: "Politics", active: false },
  { name: "Technology", active: false },
  { name: "Science", active: false },
  { name: "Health", active: false },
  { name: "Fashion", active: false },
  { name: "Food", active: false },
  { name: "Travel", active: false },
  { name: "Art", active: false },
  { name: "Film", active: false },
  { name: "Books", active: false },
  { name: "History", active: false },
  { name: "Business", active: false },
  { name: "Education", active: false },
  { name: "Anime", active: false },
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
          Choose your Interests to generate Blogcasts
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
                  placeholder="Add more interests"
                  value={newTag}
                  onChange={this.handleChange}
                  className="p-2 bg-sky-900 text-white rounded border border-gray-400 flex-1 mr-2"
                />
                <button
                  className="p-2 text-white rounded bg-green-500"
                  onClick={this.handleAddTag}
                >
                  Add Interest
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
                  Generate Podcasts
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
