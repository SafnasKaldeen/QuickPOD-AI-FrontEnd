import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import PlayButton from "./PlayButton.jsx";
import Cookies from "js-cookie";

const SongTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/get_all_blogcasts",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: "Bearer " + Cookies.get("access_token"), // Assuming you have a token stored in cookies
            },
          }
        );
        if (!response.ok) {
          console.error("Network response was not ok");
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("Fetched data:", result.blogcasts);
        setData(result.blogcasts || []); // Assuming data.hot_news is the correct structure
        console.log("Fetched data:", result.blogcasts.length);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClicked = async (song) => {
    console.log(song);
    try {
      await Cookies.set("id", song.id);
      console.log("Cookie : ", Cookies.get("id"));
      window.location.href = "/podcast";
    } catch (error) {
      console.error("Error setting cookie:", error);
    }
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (sortConfig.key === "") return data;

    const sorted = [...data].sort((a, b) => {
      let aValue, bValue;

      if (sortConfig.key === "title") {
        aValue = a.podcast.transcript.title.toLowerCase();
        bValue = b.podcast.transcript.title.toLowerCase();
      } else if (sortConfig.key === "keywords") {
        aValue = a.keywords[0].toLowerCase();
        bValue = b.keywords[0].toLowerCase();
      } else {
        aValue = a[sortConfig.key];
        bValue = b[sortConfig.key];
      }

      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    return sorted;
  }, [data, sortConfig]);

  const filteredData = sortedData.filter((song) => {
    const keywords = song.keywords.join(" ").toLowerCase();
    return keywords.includes(searchTerm.toLowerCase());
  });

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <div className="p-4  rounded shadow w-60">
          <img src="/images/pokemon.gif" alt="Loading..." />
        </div>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <React.Fragment>
      <h1
        id="General"
        className="text-center text-2xl dark:text-white md:text-4xl m-8 text-white"
      >
        Blogcast History
      </h1>
      <div className="mx-5">
        <div onClick={() => console.log("Playing everything one by one")}>
          <PlayButton size="lg" />
        </div>
        <div className="flex justify-between items-center text-gray-300">
          <span>
            <p className="m-2 mt-5">{filteredData.length} blogcasts found</p>
          </span>
          <span>
            <form
              className="flex items-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="search" className="sr-only">
                Search by key-words
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by key-words"
                className="p-2 rounded-md bg-zinc-800 text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="p-2">
                <Icon icon="carbon:search" className="h-5 w-5 text-gray-300" />
              </button>
            </form>
          </span>
        </div>
        <table className="table-auto text-left min-w-full divide-y-2 divide-gray-500/30 mt-10 pb-10">
          <thead>
            <tr className="text-gray-300">
              <th
                className="font-normal px-4 py-2 whitespace-nowrap cursor-pointer"
                onClick={() => handleSort("id")}
              >
                #
                {sortConfig.key === "id" && (
                  <Icon
                    icon={
                      sortConfig.direction === "ascending"
                        ? "carbon:caret-up"
                        : "carbon:caret-down"
                    }
                    className="inline-block h-5 w-5 ml-2"
                  />
                )}
              </th>
              <th
                className="font-normal px-4 py-2 whitespace-nowrap cursor-pointer"
                onClick={() => handleSort("title")}
              >
                Title
                {sortConfig.key === "title" && (
                  <Icon
                    icon={
                      sortConfig.direction === "ascending"
                        ? "carbon:caret-up"
                        : "carbon:caret-down"
                    }
                    className="inline-block h-5 w-5 ml-2"
                  />
                )}
              </th>
              <th className="font-normal px-4 py-2 whitespace-nowrap">
                <Icon icon="carbon:play" className="inline-block h-5 w-5" />
              </th>
              <th
                className="font-normal px-4 py-2 whitespace-nowrap text-right cursor-pointer"
                onClick={() => handleSort("keywords")}
              >
                <Icon icon="carbon:tag" className="inline-block h-5 w-5" />
                Keywords
                {sortConfig.key === "keywords" && (
                  <Icon
                    icon={
                      sortConfig.direction === "ascending"
                        ? "carbon:caret-up"
                        : "carbon:caret-down"
                    }
                    className="inline-block h-5 w-5 ml-2"
                  />
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((song, index) => (
              <tr key={index} className="group hover:bg-gray-500/20">
                <td className="whitespace-nowrap px-4 py-2">{index + 1}</td>
                <td className="whitespace-nowrap px-4 py-2 flex gap-3 items-center">
                  <div className="h-10 w-10">
                    <img
                      src={song.podcast.thumbnail_url.replace(/.*\\public/, "")}
                      alt={song.podcast.transcript.title}
                      className="rounded object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
                    />
                  </div>
                  <div className="leading-none sm:leading-tight">
                    <p>{song.podcast.transcript.title}</p>
                    <p>
                      {/* {song.podcast.thumbnail_url.replace(/.*\\public/, "")} */}
                    </p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    className="text-gray-300 group-hover:text-white"
                    onClick={() => handleClicked(song)}
                  >
                    <PlayButton />
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-right">
                  {song.keywords[0]}
                </td>
              </tr>
            ))}
          </tbody>
          <div className="flex flex-wrap mt-6 gap-4"></div>
        </table>
      </div>
    </React.Fragment>
  );
};

export default SongTable;
