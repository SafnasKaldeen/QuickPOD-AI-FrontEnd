import React, { Component } from "react";
import { FaLink, FaPlay, FaSearch } from "react-icons/fa";

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
        id: 16,
        title:
          "People not voting in general election blame distrust in politicians",
        link: "https://www.bbc.com/news/articles/c28ed9j2d28o",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhw80X-qYrwoxY1hJ-2RBj8isoJLwkYBe8EFVoFCHP7ABkGcK5hD8h2d5dg&s",
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
                  src={content.imageUrl}
                  alt={content.title}
                  className="object-cover h-full w-full rounded-md shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
                  transition-name={`playlist ${content.id} image`}
                />
                <div
                  className="absolute right-2 bottom-2 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all"
                  transition-name={`playlist ${content.id} play`}
                ></div>
              </div>
              <div className="pt-2">
                <div
                  className="font-bold block truncate"
                  transition-name={`playlist ${content.id} title`}
                >
                  {content.title}
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
