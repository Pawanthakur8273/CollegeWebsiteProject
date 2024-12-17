import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlaylistCard from './PlaylistCard';

const YouTubePlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = 'AIzaSyCB2qseqFHvc0FVzhlCs80DNpG-7k8yqLc'; // Your API key here

  // Fetch Playlists for a subject (e.g., AKTU)
  const fetchPlaylists = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: 'AKTU', // Search term for AKTU or any subject
          type: 'playlist',
          key: API_KEY,
          maxResults: 5, // Number of playlists to fetch
        },
      });

      const playlistItems = response.data.items;
      const playlistData = [];

      for (const playlist of playlistItems) {
        const playlistId = playlist.id.playlistId;
        const playlistTitle = playlist.snippet.title;
        const playlistDescription = playlist.snippet.description;
        const playlistThumbnail = playlist.snippet.thumbnails.high.url;

        // Get videos in the playlist
        const videosResponse = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
          params: {
            part: 'snippet',
            playlistId: playlistId,
            key: API_KEY,
            maxResults: 5, // Number of videos to fetch from the playlist
          },
        });

        let totalLikes = 0;
        let totalComments = 0;

        // Fetch statistics for each video in the playlist
        for (const video of videosResponse.data.items) {
          const videoId = video.snippet.resourceId.videoId;
          const statsResponse = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
            params: {
              part: 'statistics',
              id: videoId,
              key: API_KEY,
            },
          });

          const stats = statsResponse.data.items[0].statistics;
          totalLikes += parseInt(stats.likeCount || 0);
          totalComments += parseInt(stats.commentCount || 0);
        }

        playlistData.push({
          title: playlistTitle,
          description: playlistDescription,
          thumbnail: playlistThumbnail,
          link: `https://www.youtube.com/playlist?list=${playlistId}`,
          totalLikes,
          totalComments,
        });
      }

      // Sort playlists by likes and comments
      playlistData.sort((a, b) => (b.totalLikes + b.totalComments) - (a.totalLikes + a.totalComments));
      setPlaylists(playlistData);
    } catch (error) {
      console.error("Error fetching playlists or videos:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">AKTU Playlists</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {playlists.slice(0, 4).map((playlist, index) => ( // Limit to 4 cards
            <PlaylistCard 
              key={index}
              title={playlist.title}
              description={playlist.description}
              thumbnail={playlist.thumbnail}
              link={playlist.link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default YouTubePlaylists;
