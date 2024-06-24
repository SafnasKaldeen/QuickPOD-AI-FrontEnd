// Search.jsx
import React, { Component } from "react";

export default class Search extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Search submitted: ${this.state.search}`);
  };

  render() {
    return (
      <form className="flex flex-col" onSubmit={this.handleSubmit}>
        <div className="flex items-center pb-3">
          <input
            type="text"
            placeholder="Search..."
            name="search"
            className="flex-1 p-2 rounded-md bg-zinc-800 text-white ml-5"
            value={this.state.search}
            onChange={this.handleChange}
            required
          />
          <button type="submit" className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </form>
    );
  }
}
