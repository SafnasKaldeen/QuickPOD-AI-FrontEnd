import React, { Component } from "react";
import Tags from "./InterestTag.tsx";
import Cookies from "js-cookie";

class ChooseTags extends Component {
  state = {
    tags: [],
    newTag: "",
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchProfileData();
  }

  fetchProfileData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + Cookies.get("access_token"),
        },
      });

      if (response.ok) {
        const profileData = await response.json();
        const tagsWithDefaultActive = profileData.interests.map((interest) => ({
          name: interest.replace(/["[\]]/g, ""), // Remove extra quotes and brackets
          active: true,
        }));

        this.setState({ tags: tagsWithDefaultActive, isLoading: false });
      } else {
        throw new Error(`Failed to fetch profile data: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      this.setState({ error: error.message, isLoading: false });
    }
  };

  handleAddTag = () => {
    const { newTag, tags } = this.state;
    if (newTag.trim() && !tags.find((tag) => tag.name === newTag.trim())) {
      this.setState((prevState) => ({
        tags: [
          ...prevState.tags,
          { name: newTag.trim(), active: true, selected: false },
        ],
        newTag: "",
      }));
    }
  };

  handleChange = (event) => {
    this.setState({ newTag: event.target.value });
  };

  handleFinalizeInterests = async () => {
    const { tags } = this.state;
    const selectedInterests = tags
      .filter((tag) => !tag.selected)
      .map((tag) => tag.name);

    try {
      const response = await fetch("http://127.0.0.1:8000/profile/interests", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + Cookies.get("access_token"),
        },
        body: JSON.stringify({ interests: selectedInterests }),
      });

      if (response.ok) {
        console.log("Interests updated successfully");
        alert("Interests updated successfully!");
      } else {
        throw new Error(`Failed to update interests: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error updating interests:", error);
    }
  };

  handleTagClick = (index) => {
    this.setState((prevState) => {
      const updatedTags = [...prevState.tags];
      updatedTags[index].active = !updatedTags[index].active;
      updatedTags[index].selected = !updatedTags[index].selected;
      return { tags: updatedTags };
    });
  };

  render() {
    const { tags, newTag, isLoading, error } = this.state;

    return (
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="text-center mx-auto">
          {error && (
            <p className="text-red-500" role="alert">
              Error: {error}
            </p>
          )}
          {isLoading && <p className="text-gray-600">Loading...</p>}

          <div className="flex flex-wrap justify-center gap-y-4 gap-x-6">
            {tags.length > 0 ? (
              tags.map((tag, index) => (
                <Tags
                  key={index}
                  interest={tag.name}
                  active={tag.active}
                  onClick={() => this.handleTagClick(index)}
                />
              ))
            ) : (
              <p>No interests found. Add yours</p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center mb-4">
            <input
              type="text"
              placeholder="Add more tags"
              value={newTag}
              onChange={this.handleChange}
              className="p-2 bg-zinc-900 text-white rounded border border-gray-400 mr-2"
              aria-label="Add more tags"
            />
            <button
              className="p-2 rounded bg-transparent border border-primary text-primary hover:bg-primary hover:border-primary hover:text-black transition duration-300 ease-in-out"
              onClick={this.handleAddTag}
              aria-label="Add Tag"
            >
              Add Tag
            </button>
          </div>
          <a href="/Dashboard" className="text-blue-500 underline">
            <button
              onClick={this.handleFinalizeInterests}
              className="mt-4 px-4 py-2 bg-primary text-black rounded transition duration-300 ease-in-out"
              aria-label="Update Interests"
            >
              Update Interests
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default ChooseTags;
