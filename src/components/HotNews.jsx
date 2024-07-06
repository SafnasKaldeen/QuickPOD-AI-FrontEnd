import React, { Component } from "react";
import PlaylistCard from "./PlaylistCard.jsx";
import Cookies from "js-cookie";

class HotNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
      loading: false,
      error: null,
      selected: [],
    };
  }

  componentDidMount() {
    this.fetchPlaylists();
  }

  fetchPlaylists() {
    const apiUrl = "http://127.0.0.1:8000/generate_news_blogcast";

    this.setState({ loading: true });
    // alert(Cookies.get("access_token"));
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + Cookies.get("access_token"), // Assuming you have a token stored in cookies
      },
      body: JSON.stringify({}), // Empty body for this example, adjust as needed
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ playlists: data.hot_news, loading: false });
        Cookies.set("hot_news", JSON.stringify(data));
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  handleSelect = (playlist) => {
    const { selected } = this.state;

    const selectedIndex = selected.findIndex(
      (item) => item.title === playlist.title
    );

    if (selectedIndex === -1) {
      // Add playlist to selected if not already selected and less than 3 selected
      this.setState((prevState) => ({
        selected: [...prevState.selected, playlist],
      }));
    } else if (selectedIndex !== -1) {
      // Remove playlist from selected if already selected
      const updatedSelected = selected.filter(
        (item) => item.title !== playlist.title
      );
      this.setState({
        selected: updatedSelected,
      });
    }
  };

  render() {
    const { playlists, loading, error, selected } = this.state;

    // Determine the color based on the number of selected playlists
    const selectedCountStyle = {
      color: selected.length < 3 ? "red" : "white",
    };

    return (
      <div className="px-6 relative z-10 mt-4">
        <h2 className="text-2xl font-bold">
          Select the Hot News to generate Blogcasts
        </h2>
        {loading && (
          <img src="/images/03-42-11-849_512.webp" alt="Loading..." />
        )}
        {error && <p className="mt-5 text-red-500">Error: {error}</p>}
        {!loading && !error && (
          <React.Fragment>
            {playlists.length === 0 && (
              <p className="mt-5 text-red-500">No Hot News and Artices</p>
            )}
          </React.Fragment>
        )}
        {!loading && !error && (
          <React.Fragment>
            <p className="mt-5" style={selectedCountStyle}>
              Selected ({selected.length} / 3)
            </p>
            <div
              className={`flex flex-wrap mt-6 gap-4 rounded-md p-2 items-center ${
                selected.length > 0 ? "border border-secondary" : ""
              }`}
            >
              {selected.map((playlist) => (
                <div
                  key={playlist.id}
                  onClick={() => this.handleSelect(playlist)}
                >
                  <PlaylistCard song={playlist} />
                </div>
              ))}
            </div>
            <button
              className={`flex flex-wrap mt-6 gap-4 rounded-md items-center p-2 text-white bg-green-500 hover:bg-green-700 ${
                selected.length === 0 ? "hidden" : ""
              }`}
              onClick={this.Generate}
            >
              Generate
            </button>
            <p className="mt-5">All</p>
            <div className="flex flex-wrap mt-6 gap-4">
              {playlists.map((playlist) => (
                <div
                  key={playlist.id}
                  onClick={() => this.handleSelect(playlist)}
                >
                  <PlaylistCard song={playlist} />
                </div>
              ))}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default HotNews;
