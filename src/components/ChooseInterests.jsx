import React, { Component } from "react";
import Tags from "./InterestTag.tsx";
import Cookies from "js-cookie";
import { error } from "node_modules/astro/dist/core/logger/core";

class ChooseTags extends Component {
  state = {
    tags: [],
    newTag: "",
    isLoading: true,
    error: null,
    blogCast: null,
    isBlogcastLoading: false,
  };

  componentDidMount() {
    this.fetchProfileData();
  }

  openBlogcast() {
    window.open(`/podcast`);
  }

  fetchProfileData = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/generate_general_blogcast_suggestions",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + Cookies.get("access_token"),
          },
        }
      );

      if (response.ok) {
        const profileData = await response.json();
        const tagsWithDefaultActive = profileData.map((interest, index) => ({
          name: interest,
          active: true,
          id: index + 1,
        }));

        this.setState({ tags: tagsWithDefaultActive, isLoading: false });
      } else {
        throw new Error(`Failed to fetch profile data: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      this.setState({
        error:
          "there is an error while fetching suitable interests -> " + error,
        isLoading: false,
      });
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

  handleClicked = async (song) => {
    console.log(song);
    try {
      // alert(song.id);
      await Cookies.set("id", song.id);
      console.log("Cookie : ", Cookies.get("id"));
      window.location.href = "/podcast";
    } catch (error) {
      console.error("Error setting cookie:", error);
      alert("Error setting cookie:" + error);
    }
  };

  handleChange = (event) => {
    this.setState({ newTag: event.target.value });
  };

  handleFinalizeInterests = async () => {
    const { tags } = this.state;
    const selectedInterests = tags
      .filter((tag) => tag.active)
      .map((tag) => tag.name);

    this.setState({ isBlogcastLoading: true });
    console.log("body", JSON.stringify({ topics: selectedInterests }));

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/generate_general_blogcast",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + Cookies.get("access_token"),
          },
          body: JSON.stringify({ topics: selectedInterests }),
        }
      );

      // alert("Updating topics...");
      if (response.ok) {
        const responseData = await response.json();
        console.log("Topics updated successfully", responseData);
        // alert("Topics updated successfully!");
        this.setState({ blogCast: responseData, isBlogcastLoading: false });
      } else {
        // alert("Failed to update topics");
        this.setState({ error: "Failed to generate blogcast" });
        throw new Error(`Failed to update topics: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating topics:", error);
      this.setState({ isBlogcastLoading: false });
      this.setState({ blogCast: null });
      this.setState({
        error: "Failed to generate blogcast -> " + "server error",
      });
      // alert("Error updating topics. Please try again." + error);
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
    const { tags, newTag, isLoading, error, isBlogcastLoading, blogCast } =
      this.state;

    return (
      <div className="relative flex items-center justify-center">
        <div className="text-center mx-auto">
          <div className="flex flex-wrap justify-center gap-y-4 gap-x-6">
            {!blogCast && error && (
              <p className="text-red-500" role="alert">
                Error: {error}
              </p>
            )}
            {!blogCast && isLoading && (
              <p className="text-gray-600">Loading...</p>
            )}
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <div className="content-center flex items-center">
              <input
                type="text"
                placeholder="Add more topics"
                value={newTag}
                onChange={this.handleChange}
                className="p-2 m-3 bg-zinc-900 text-white rounded border border-gray-400 flex-1 mr-2"
                aria-label="Add more topics"
              />
              <button
                className="bg-transparent m-3  text-primary text-bold text-xs uppercase font-semibold px-5 py-3 rounded-lg border border-primary my-5 cursor-pointer"
                onClick={this.handleAddTag}
                aria-label="Add Interest"
              >
                Add Topics
              </button>
            </div>

            {/* <div className="relative items-center justify-center">
              <button
                onClick={this.handleFinalizeInterests}
                className="bg-primary m-3  text-black text-bold text-xs uppercase font-semibold px-5 py-3 rounded-lg border border-transparent my-5 cursor-pointer"
                aria-label="Update Interests"
              >
                {isBlogcastLoading ? "Updating..." : "Update Topics"}
              </button>
            </div> */}
          </div>
          <div className="relative items-center justify-center">
            <button
              onClick={this.handleFinalizeInterests}
              className="mb-5 btn btn-primary px-4 py-2 bg-primary text-black text-bold rounded"
              aria-label="Update Interests"
            >
              {isBlogcastLoading ? "Updating..." : "Update Topics"}
            </button>
          </div>
          {isBlogcastLoading && (
            <div className="flex justify-center items-center">
              <div className="p-4 rounded shadow">
                <img src="/images/pokemon.gif" alt="Loading..." />
              </div>
            </div>
          )}
          <div className="flex flex-wrap justify-center items-center">
            {!blogCast && tags.length > 0 ? (
              tags.map((tag, index) => (
                <Tags
                  key={index}
                  interest={tag.name}
                  active={tag.active}
                  onClick={() => this.handleTagClick(index)}
                />
              ))
            ) : (
              <p className="mx-5">No Topics found. Add yours.</p>
            )}
          </div>
          {blogCast && (
            <div className="flex flex-col items-center justify-center mt-6">
              <button
                className="bg-primary text-black text-xs uppercase font-bold px-2 py-2 rounded-lg"
                disabled={isBlogcastLoading}
                onClick={() => this.handleClicked(blogCast)}
              >
                {isBlogcastLoading ? "Loading..." : "Your Blogcast is ready!"}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ChooseTags;
