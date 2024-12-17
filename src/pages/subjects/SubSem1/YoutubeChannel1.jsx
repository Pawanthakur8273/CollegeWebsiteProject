import React from 'react';
import PlaylistCard from '../../../../src/compnents/PlaylistCard';

function YoutubeChannel1() {
  return (
    <>
    <div className="playlist-container">
      <PlaylistCard 
        title="React Basics Playlist"
        description="Learn the basics of React through this detailed YouTube playlist."
        playlistLink="https://www.youtube.com/playlist?list=PLabc12345"
        downloadLink="/downloads/react-basics.pdf"
      />
    </div>
    <div className="playlist-container">
      <PlaylistCard 
        title="React Basics Playlist"
        description="Learn the basics of React through this detailed YouTube playlist."
        playlistLink="https://www.youtube.com/playlist?list=PLabc12345"
        downloadLink="/downloads/react-basics.pdf"
      />
    </div>
    <div className="playlist-container">
      <PlaylistCard 
        title="React Basics Playlist"
        description="Learn the basics of React through this detailed YouTube playlist."
        playlistLink="https://www.youtube.com/playlist?list=PLabc12345"
        downloadLink="/downloads/react-basics.pdf"
      />
    </div>
      </>
  );
}

export default YoutubeChannel1;
