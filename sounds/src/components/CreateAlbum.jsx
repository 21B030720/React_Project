import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";

export default function CreateAlbum() {
  const [{ token }, dispatch] = useStateProvider();
  const [playlistName, setPlaylistName] = useState('');
  const [playlistDescription, setPlaylistDescription] = useState('');

  const getPlaylistData = async () => {
    try {
      const res = await axios.post(
        'https://api.spotify.com/v1/me/playlists',
        {
          name: playlistName,
          description: playlistDescription,
          public: false,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Playlist created:', res.data);

      const updatedPlaylists = await fetchUpdatedPlaylists();

      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists: updatedPlaylists });
    } catch (error) {
      console.error('Error creating playlist:', error.response || error.message);
    }
  };

  const fetchUpdatedPlaylists = async () => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });

      return response.data.items;
    } catch (error) {
      console.error('Error fetching updated playlists:', error.response || error.message);
      throw error;
    }
  };

  const handleClick = () => {
    getPlaylistData();
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Playlist Name"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Playlist Description"
        value={playlistDescription}
        onChange={(e) => setPlaylistDescription(e.target.value)}
      />
      <Button onClick={handleClick}>Create Playlist</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
  padding: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #1db954;
  color: #fff;
  cursor: pointer;
`;
