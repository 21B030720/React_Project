import React, { useState } from 'react'
import { useStateProvider } from "../utils/StateProvider"
import { useEffect } from 'react'
import axios from "axios"
import { reducerCases } from '../utils/Constants';
import styled from 'styled-components';


export default function Playlists() {
    const [{token, playlists}, dispatch] = useStateProvider();
    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get(
                'https://api.spotify.com/v1/me/playlists', 
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-type": "application/json",
                }
            });
            const { items } = response.data;
            const playlists = items.map(({name, id}) => {
                return {name, id};
            });
            // console.log("All Playlists", playlists)
            dispatch({type:reducerCases.SET_PLAYLISTS, playlists});
        };
        getPlaylistData();
        getPlayListHelp();
    }, [token, dispatch])

    const getPlayListHelp = async () => {
        let userId = "313hldr7jozas7tvxrvwtzxvmvkq";
        try {
            let allPlaylists = [];
            let nextUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;
        
            while (nextUrl) {
              const response = await axios.get(nextUrl, {
                headers: {
                  Authorization: 'Bearer ' + token,
                  'Content-Type': 'application/json',
                },
              });
        
              const playlists = response.data.items;
              allPlaylists = [...allPlaylists, ...playlists];
        
              // Check if there are more playlists to fetch
              nextUrl = response.data.next;
            }
        
            console.log(`User ${userId}'s playlists:`, allPlaylists);
            return allPlaylists;
          } catch (error) {
            console.error('Error getting user playlists:', error.response || error.message);
            throw error;
          }
      };
      

    const changeCurrentPlaylist = (selectedPlaylistId) => {
        dispatch({type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId})
    }

  return (
    <Container>
        <ul>
            {
                // console.log("Hello", playlists)
                playlists.map(({name, id}) => {
                    return (
                        <li key={id} onClick={()=>changeCurrentPlaylist(id)}>
                            {name}
                        </li>
                    )
                })
            }
        </ul>
    </Container>
  )
}

const Container = styled.div`
height: 100%;
overflow: hidden;
ul {
    list-style-type: none;
    display:flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 55vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 0.7rem;
        &-thumb {
            background-colot: rgba(255,255,255, 0.6);
        }
    }
    li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
            color: white;
        }
    }
}
`;
