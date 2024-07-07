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
      generatedBlogcasts: {}, // New state for storing fetched data
      isBeingGenerated: false,
    };
  }

  componentDidMount() {
    this.fetchPlaylists();
  }

  fetchPlaylists() {
    const apiUrl = "http://127.0.0.1:8000/generate_hot_news";

    this.setState({ loading: true });
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + Cookies.get("access_token"),
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
        // Cookies.set("hot_news", JSON.stringify(data));
      })
      .catch((error) => {
        this.setState({ loading: false });
        // this.setState({ error: error.message, loading: false });
      });
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

  handleSelect = (playlist) => {
    const { selected } = this.state;

    const selectedIndex = selected.findIndex(
      (item) => item.title === playlist.title
    );

    if (selectedIndex === -1) {
      this.setState((prevState) => ({
        selected: [...prevState.selected, playlist],
      }));
    } else {
      const updatedSelected = selected.filter(
        (item) => item.title !== playlist.title
      );
      this.setState({
        selected: updatedSelected,
      });
    }
  };

  Generate = () => {
    const { selected } = this.state;

    this.setState({ isBeingGenerated: true });

    const requestBody = {
      type: "hot_news",
      topics: selected.map((playlist) => ({
        title: playlist.title,
        link: playlist.link,
      })),
    };

    console.log("Making request to generate blogcasts:", requestBody);

    fetch("http://127.0.0.1:8000/generate_news_blogcast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + Cookies.get("access_token"),
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Generated blogcasts:", data);
        this.setState({ generatedBlogcasts: data }); // Update state with fetched data
        console.log("Generated blogcasts:", data.id);
        console.log("Generated blogcasts:", generatedBlogcasts);
        this.setState({ isBeingGenerated: false });
        // Cookies.set("id", data.id);
        // window.location.href = "/podcast";
      })
      .catch((error) => {
        console.error("Error generating blogcasts:", error);
        this.setState({ isBeingGenerated: false });
      });
  };

  render() {
    const {
      playlists,
      loading,
      error,
      selected,
      generatedBlogcasts,
      isBeingGenerated,
    } = this.state;

    const selectedCountStyle = {
      color: selected.length < 3 ? "red" : "white",
    };

    return (
      <div className="px-6 relative z-10 mt-4">
        <h2 className="text-2xl font-bold">
          Select the Hot News to generate Blogcasts
        </h2>
        {(isBeingGenerated || loading) && (
          <div className="flex justify-center items-center">
            <div className="p-4 rounded shadow">
              <img src="/images/pokemon.gif" alt="Loading..." />
            </div>
          </div>
        )}

        {error && <p className="mt-5 text-red-500">Error: {error}</p>}
        {!loading && !error && (
          <React.Fragment>
            {playlists.length === 0 && (
              <p className="mt-5 text-red-500">No Hot News and Articles</p>
            )}
          </React.Fragment>
        )}
        {!isBeingGenerated && !loading && !error && (
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
            {generatedBlogcasts.length === 0 && (
              <p>Error generating blogcasts</p>
            )}
            {generatedBlogcasts && (
              <div className="flex flex-col items-center justify-center mt-6">
                <button
                  className="bg-primary text-black text-bold text-xs uppercase font-semibold px-2 py-2 rounded-lg"
                  onClick={() => this.handleClicked(generatedBlogcasts)}
                >
                  Your Generated suggested Blogcasts
                </button>
              </div>
            )}
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
