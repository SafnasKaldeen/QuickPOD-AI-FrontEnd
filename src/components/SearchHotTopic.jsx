import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import PlayButton from "./PlayButton";
import Cookies from "js-cookie";

class SearchHotTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      content: null,
      loading: false,
      error: null,
    };

    // Binding methods to the component instance
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Optionally, you can fetch initial data here when the component mounts
    // Example: this.fetchData();
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

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

  handleSubmit(e) {
    e.preventDefault();
    const { search } = this.state;
    const apiUrl = "http://127.0.0.1:8000/generate_news_blogcast";

    console.log("Making request to:", apiUrl); // Check if apiUrl is correct

    this.setState({ loading: true });

    console.log(
      "Body:",
      JSON.stringify({
        type: "user_defined",
        topics: [
          {
            title: search,
            link: `https://example.com/${encodeURIComponent(search)}`,
          },
        ],
      })
    );

    fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + Cookies.get("access_token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "user_defined",
        topics: [
          {
            title: search,
            link: `https://example.com/${encodeURIComponent(search)}`,
          },
        ],
      }),
    })
      .then((response) => {
        console.log("Response status:", response.status); // Check response status

        if (!response.ok) {
          console.error("Network response was not ok");
          this.setState({
            loading: false,
            error: "Network response was not ok",
          });
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Check the fetched data
        if (data) {
          const firstResult = data;
          this.setState({
            content: firstResult,
            loading: false,
            error: null,
          });
        } else {
          this.setState({
            content: null,
            loading: false,
            error: "No results found",
          });
        }
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  render() {
    const { search, content, loading, error } = this.state;

    return (
      <React.Fragment>
        {!loading && (
          <form className="flex flex-col" onSubmit={this.handleSubmit}>
            <div className="flex items-center pb-3">
              <input
                type="text"
                placeholder="Search the topic you want to generate blogcast..."
                name="search"
                className="flex-1 p-2 rounded-md bg-zinc-800 text-white ml-5"
                value={search}
                onChange={this.handleChange}
                required
              />
              <button type="submit" className="p-2">
                <FaSearch className="h-5 w-5 text-gray-300" />
              </button>
            </div>
          </form>
        )}
        {loading && (
          <div className="flex justify-center items-center">
            <div className="p-4 rounded shadow">
              <img src="/images/pokemon.gif" alt="Loading..." />
            </div>
          </div>
        )}
        {content && (
          <div className="flex flex-col items-center justify-center mt-6">
            <button
              className="btn btn-primary px-4 py-2 bg-primary text-black text-bold rounded"
              onClick={() => this.handleClicked(content)}
            >
              Your Generated user defined Blogcasts
            </button>
          </div>
        )}
        {error && !loading && (
          <p className="m-6 text-red-500">Error: {error}</p>
        )}
      </React.Fragment>
    );
  }
}

export default SearchHotTopic;
