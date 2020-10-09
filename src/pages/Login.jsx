import React from "react";
import styled from "styled-components";
import { Button, Text } from "../components";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const loginRedirect = () => {
  const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-modify-playback-state"
  ];
  window.location = `https://accounts.spotify.com/authorize?response_type=token&scope=${encodeURIComponent(
    scopes
  )}&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    `${window.location.origin}/callback`
  )}`;
};

const Login = () => {
  return (
    <Container>
      <BackgroundSide />
      <Actions>
        <div>
          <Text as="h1" color="white">
            Acessar sua conta do Spotify
          </Text>
          <Text color="white">
            Voce tera acesso a milhares de musicas e playlists, basta acessar
            sua conta do spotify
          </Text>
          <Button onClick={loginRedirect} px={50} my={40}>
            Acessar
          </Button>
        </div>
      </Actions>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "bg txt";
`;

const BackgroundSide = styled.div`
  grid-area: bg;
  filter: grayscale(100%);
  background: linear-gradient(#000000dd, #000000fa),
    url("https://source.unsplash.com/random/?music") no-repeat;
  background-size: cover;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  background-image: linear-gradient(90deg, #c074b2, #8ab5e8);
  grid-area: txt;
  position: relative;

  & > div {
    z-index: 2;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(transparent, #000);
    pointer-events: none;
  }
`;

export default Login;
