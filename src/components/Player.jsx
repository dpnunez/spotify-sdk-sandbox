import React, { useState } from "react";
import styled from "styled-components";

import { CLOSED_PLAYER } from "../pages/Dashboard";

const Player = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PlayerContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      player
    </PlayerContainer>
  );
};

const PlayerContainer = styled.div`
  transition: all 0.5s ease;
  max-height: ${({ isOpen }) => (isOpen ? "100vh" : `${CLOSED_PLAYER}px`)};
  min-height: ${({ isOpen }) => (isOpen ? "100vh" : `${CLOSED_PLAYER}px`)};
  top: ${({ isOpen }) => (isOpen ? 0 : `calc(100vh - ${CLOSED_PLAYER}px)`)};
  width: 100%;
  background-color: #272727;
  position: absolute;
`;

export { Player };
