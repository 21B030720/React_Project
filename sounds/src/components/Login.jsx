import React from 'react'
import styled from "styled-components"

export default function Login() {
  const handleClick = () => {
    const clientID = "ec80aa53b442424096c97f3d31300c06";
    const redirectUrl = "http://localhost:3000";
    const apiUrl = "http://accounts.spotify.com//authorize";
    const scope = ["user-read-email", "user-read-private", "user-read-playback-state", "user-modify-playback-state", "user-read-currently-playing"];
  }
  return (
    <Container>
      <img src="logo1.png" alt="sounds" />
      <button onClick={handleClick}>Connect Sounds</button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: rgb(255, 0, 255);
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
