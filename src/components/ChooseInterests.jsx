import React, { Component } from "react";
import Tags from "./InterestTag.tsx";
import Cookies from "js-cookie";

class ChooseTags extends Component {
  state = {
    tags: [],
    newTag: "",
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchInterests();
  }

  fetchInterests = () => {
    const apiUrl =
      "http://127.0.0.1:8000/generate_general_blogcast_suggestions";

    this.setState({ loading: true });

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + Cookies.get("access_token"), // Assuming you have a token stored in cookies
      },
      body: JSON.stringify({}), // You can pass any necessary data here
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch interests");
        }
        return response.json();
      })
      .then((data) => {
        // Assuming data is an array of strings like ["dummy-interest-1", "dummy-interest-2"]
        const tags = data.map((interest, index) => ({
          name: interest,
          active: false, // Assuming initial state for active
          id: index + 1, // You can generate unique IDs if needed
        }));
        this.setState({ tags, loading: true });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
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
    const { tags, newTag, loading, error } = this.state;

    return (
      <React.Fragment>
        <h2 className="text-2xl font-bold px-6 relative z-10 mt-4">
          Choose your general topic to generate Blogcasts
        </h2>
        <div className="px-6 relative z-10 mt-4">
          {loading && <p className="mt-5">Loading...</p>}
          {error && <p className="mt-5">Error: {error}</p>}
          {!loading && !error && (
            <div className="flex flex-wrap mt-6 gap-4 justify-between">
              <div className="flex flex-wrap justify-center gap-y-4 gap-x-6">
                <div className="flex flex-wrap justify-center items-center">
                  {tags.map((tag) => (
                    <Tags
                      key={tag.id}
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
                    className="p-2 text-white rounded bg-green-500 hover:bg-green-700"
                    onClick={this.handleAddTag}
                  >
                    Add Topic
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative items-center justify-center">
          <div className="text-center mx-auto">
            <div className="justify-center">
              <button className="bg-purple-700 text-white text-xs uppercase font-semibold px-5 py-3 rounded-lg border border-transparent my-5 cursor-pointer hover:bg-purple-900">
                Generate Blogcasts
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChooseTags;
