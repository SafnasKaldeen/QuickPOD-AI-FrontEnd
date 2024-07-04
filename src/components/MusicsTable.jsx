import React from "react";
import { Icon } from "@iconify/react";
import PlayButton from "./PlayButton.jsx";

const SongTable = ({ data }) => {
  const handleClicked = (song) => {
    console.log(song);
  };

  return (
    <React.Fragment>
      <h1
        id="General"
        className="text-center text-2xl font-bold dark:text-yellow-400 md:text-4xl m-8 text-green-400"
      >
        Your Own Customized Playlist
      </h1>
      <div className="mx-5">
        <div onClick={() => console.log("Playing everythin oney by one")}>
          <PlayButton size="lg" />
        </div>
        <table className="table-auto text-left min-w-full divide-y-2 divide-gray-500/30 mt-10">
          <thead>
            <tr className="text-gray-300">
              <th className="font-normal px-4 py-2 whitespace-nowrap">#</th>
              <th className="font-normal px-4 py-2 whitespace-nowrap">Title</th>
              <th className="font-normal px-4 py-2 whitespace-nowrap">
                <Icon icon="carbon:play" className="inline-block h-5 w-5" />
              </th>
              <th className="font-normal px-4 py-2 whitespace-nowrap text-right">
                <Icon icon="carbon:time" className="inline-block h-5 w-5" />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((song, index) => (
              <tr key={index} className="group hover:bg-gray-500/20">
                <td className="whitespace-nowrap px-4 py-2">{index + 1}</td>
                <td className="whitespace-nowrap px-4 py-2 flex gap-3 items-center">
                  <div className="h-10 w-10">
                    <img
                      src={song.podcast.thumbnail_url}
                      alt={song.blog.title}
                      className="rounded object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
                    />
                  </div>
                  <div className="leading-none">{song.blog.title}</div>
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href={`podcast/${song.id}`}
                    // onClick={() => handleClicked(song)}
                    className="text-gray-300 group-hover:text-white"
                  >
                    <PlayButton />
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-right">
                  {song.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default SongTable;
