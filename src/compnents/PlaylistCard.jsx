import React from 'react';

const PlaylistCard = ({ title, description, thumbnail, link }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img 
        src={thumbnail} 
        alt="Playlist Thumbnail" 
        className="rounded-t-lg object-cover w-full h-48" 
      />
      <div className="p-4">
        <h5 className="text-xl font-bold text-gray-800 truncate">{title}</h5>
        <p className="text-gray-600 mt-2 text-sm line-clamp-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 text-center"
        >
          Watch Playlist
        </a>
      </div>
    </div>
  );
};

export default PlaylistCard;
