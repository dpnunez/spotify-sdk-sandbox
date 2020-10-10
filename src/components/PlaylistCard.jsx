import React from "react";
import styled from "styled-components";
import PlayIconImg from "../assets/play_icon.svg";

import { Text } from "./Text";

// import { Container } from './styles';

const PlayerCard = ({ images, name, tracks, ...props }) => {
  console.log(props);
  return (
    <CardContainer>
      <PlayIcon icon={PlayIconImg} />
      <img src={images[1].url} />
      <Details>
        <Text as="h3">{name}</Text>
        <Text fontSize={14} color="txt_gray">
          Contém {tracks.total} músicas
        </Text>
      </Details>
    </CardContainer>
  );
};

const PlayIcon = styled.div`
  grid-area: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;

  background-image: ${({ icon }) => `url("${icon}")`};
  background-size: 45%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000000aa;

  transition: all 0.4s ease;
  opacity: 0;
`;

const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    "cover info"
    "cover info";
  grid-template-columns: 100px auto;
  grid-template-rows: 50px 50px;
  margin: 20px 0;
  position: relative;

  img {
    height: 100%;
    grid-area: cover;
  }

  &:hover {
    ${PlayIcon} {
      opacity: 1;
    }
  }
`;

const Details = styled.div`
  grid-area: info;
  margin: 0 10px;
`;

export { PlayerCard };
