import React from "react";
import PlayButton from "./PlayButton.jsx";
import { playlists } from "../lib/data.ts";

const PlaylistItem = () => {
  return (
    <React.Fragment>
      {playlists.map((playlist) => (
        <a
          key={playlist.id}
          href={`/playlist/${playlist.id}`}
          className="playlist-item flex group relative transition-all duration-300 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50"
        >
          <div className="h-20 w-20">
            <img
              src={playlist.cover}
              alt={playlist.title}
              className="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
            />
          </div>
          <div className="font-bold block">{playlist.title}</div>
          <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <PlayButton client:load />
          </div>
        </a>
      ))}
    </React.Fragment>
  );
};

export default PlaylistItem;
