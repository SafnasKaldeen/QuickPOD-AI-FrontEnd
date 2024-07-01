import React from "react";
import PropTypes from "prop-types";
import { FaLink } from "react-icons/fa6";

const PlaylistCardSide = ({ song }) => {
  return (
    <div className="w-80 my-2 border border-secondary rounded-md p-2 items-center">
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
          <span className="bg-primary hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black h-10 w-10">
            <FaLink className="text-white" />
          </span>
        </div>
      </div>
      <div className="pt-2">
        <p
          className="font-bold block truncate hover:overflow-visible hover:whitespace-normal"
          transition-name={`playlist ${song.id} title`}
          id={song.id}
        >
          {song.title}
        </p>
      </div>
    </div>
  );
};

PlaylistCardSide.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlaylistCardSide;
