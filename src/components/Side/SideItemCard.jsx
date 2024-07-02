import React from "react";
import InlineArtists from "../InlineArtists.astro";
import { colors } from "../../lib/colors";
import PureInlineArtists from "../PureInlineArtists";

// Define the actual colorMapping object
export const colorMapping = {
  "Sports Mix": colors.teal,
  "Political Mix": colors.green,
  "Business Mix": colors.blue,
  "Tech Mix": colors.red,
  "Korean Mix": colors.pink,
  "Health & Wellness Mix": colors.gray,
};

const { song } = Astro.props;

const PlaylistItem = () => (
  <a
    href={`/podcast/${song.id}`}
    className="playlist-item flex group relative p-2 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none hover:bg-zinc-500/10 focus:bg-zinc-500/50"
    data-color={colorMapping[song.category]}
  >
    <div className="h-12 w-12 flex-none">
      <img
        src={song.image}
        alt={song.title}
        className="object-cover rounded h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
      />
    </div>
    <div className="flex flex-auto flex-col truncate">
      <div className="font-semibold w-full flex-none truncate">
        {song.title}
      </div>
      <div className="text-gray-400 text-sm truncate flex-1">
        <PureInlineArtists artists={song.artists} />
      </div>
    </div>
  </a>
);

export default PlaylistItem;
