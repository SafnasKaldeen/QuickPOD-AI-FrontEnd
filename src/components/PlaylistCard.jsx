import React from "react";
import PropTypes from "prop-types";
import PlayButton from "./PlayButton.jsx";

const keyWords = [
  "String theory",
  "Artificial intelligence",
  "Cricket",
  "Women's cricket",
  "T20 world cup",
  "Ai and string theory",
  "Euro 2024",
];

const PlaylistCard = ({ song, selected }) => {
  return (
    <div className="w-40 hover:opacity-50">
      <div className="relative group mx-auto h-40 w-full flex-none shadow-lg">
        <img
          src={song.imageUrl}
          alt={song.title}
          className="object-cover h-full w-full rounded-md shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
          transition-name={`playlist ${song.id} image`}
        />
        <div
          className="absolute right-2 bottom-2 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all"
          transition-name={`playlist ${song.id} play`}
        >
          {/* <PlayButton client:load /> */}
        </div>
      </div>
      <div className="pt-2">
        <div
          className="font-bold block truncate hover:overflow-visible hover:whitespace-normal"
          transition-name={`playlist ${song.id} title`}
        >
          {song.title}
        </div>
      </div>
    </div>
  );
};

PlaylistCard.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlaylistCard;
