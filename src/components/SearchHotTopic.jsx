import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import PlayButton from "./PlayButton";
import Loading from "./Player/Loading";
import load from "node_modules/astro-icon/lib/utils";

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

  handleSubmit(e) {
    e.preventDefault();
    const { search } = this.state;
    const apiUrl = "http://127.0.0.1:8000/generate_news_blogcast";

    console.log("Making request to:", apiUrl); // Check if apiUrl is correct

    this.setState({ loading: true });

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
          this.setStatet({
            loading: false,
            error: "Network response was not ok",
          });
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Check the fetched data
        if (data && data.length > 0) {
          const firstResult = data[0];
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
        {loading && (
          <div className="inset-0 flex items-center justify-center bg-zinc-900">
            <div className="loader"></div>
            <p className="text-gray-600 text-xl">
              <h2 className="text-2xl font-bold text-gray-800 mt-6">
                Blogcast is being generated!
              </h2>
            </p>
          </div>
        )}
        {content && (
          <a
            href={`/podcast`} // Ensure this link is properly generated based on your application logic
            className="playlist-card p-4 flex flex-col items-center justify-center group relative transition-all duration-300 overflow-hidden gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/5 hover:bg-zinc-500/20 focus:bg-zinc-500/20"
            data-color={"colors.teal.dark"}
            transition-name={`playlist ${content.id} box`}
          >
            <div className="w-40">
              <div className="relative group mx-auto h-40 w-full flex-none shadow-lg">
                <img
                  src={content.podcast.thumbnail_url}
                  alt={content.podcast.transcript.title}
                  className="object-cover h-full w-full rounded-md shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
                  transition-name={`playlist ${content.id} image`}
                />
                <div
                  className="absolute right-2 bottom-2 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all"
                  transition-name={`playlist ${content.id} play`}
                >
                  <PlayButton client:load />
                </div>
              </div>
              <div className="pt-2">
                <div
                  className="font-bold block truncate"
                  transition-name={`playlist ${content.id} title`}
                >
                  {content.blog.title}
                </div>
              </div>
            </div>
          </a>
        )}
        {error && !loading && <p className="bg-red-500">Error: {error}</p>}
      </React.Fragment>
    );
  }
}

export default SearchHotTopic;
