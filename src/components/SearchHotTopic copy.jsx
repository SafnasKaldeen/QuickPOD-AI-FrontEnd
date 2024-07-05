import React, { Component } from "react";
import { FaLink, FaPlay, FaSearch } from "react-icons/fa";
import PlayButton from "./PlayButton";

class SearchHotTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      content: null,
    };

    // Binding methods to the component instance
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Simulate setting content based on search result

    this.setState({
      content: {
        blog: {
          markdown:
            "# The Rise of AI\nArtificial Intelligence is transforming industries...",
          title: "The Rise of AI",
          blog_img_url:
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        },
        podcast: {
          audio_url:
            "https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3",
          thumbnail_url:
            "https://images.unsplash.com/photo-1580927752452-5d1b75d4e0d7",
          transcript: {
            title: "AI Podcast Episode 1",
            content:
              "Welcome to our podcast on AI. Today we discuss the impact of artificial intelligence on various industries...",
          },
        },
        keywords: ["AI", "technology", "future"],
        type: "technology",
        id: 5,
      },
    });
  }

  render() {
    const { search, content } = this.state;

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
        {content && (
          <a
            href={`/podcast/${content.id}`}
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
      </React.Fragment>
    );
  }
}

export default SearchHotTopic;
