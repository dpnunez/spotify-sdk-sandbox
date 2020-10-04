import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <BackgroundSide />
      <Actions></Actions>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: auto;
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
  background-image: linear-gradient(90deg, #c074b2, #8ab5e8);
  grid-area: txt;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(transparent, #000);
  }
`;

export default Login;
