import styled from "styled-components";
import { device } from "../../helpers/devices";

const Card = styled.div`
  @media${device.laptopS} {
    width: 60%;
    height: 60vh;
  }
`;
const Header = styled.div`
  background: white;

  @media ${device.laptopS} {
    width: 80%;
  }

  h1 {
    color: #29524a;
    padding: 1.8rem;
    font-weight: 600;
    span {
      color: #f1d301;
    }

    @media ${device.desktop} {
      font-size: 5rem;
    }
  }

  h3 {
    margin-top: -5rem;
    color: #29524a;
    padding: 1.8rem;
    font-weight: 300;
    font-size: 1.3rem;

    @media ${device.desktop} {
      font-size: 2rem;
    }
  }
`;

const Icon = styled.i`
  font-size: 6rem;
  width: 6rem;
  height: 6rem;
  padding: 2.2rem;
  background: white;
  color: #29524a;
  transition: all 0.3s ease-in-out;

  @media ${device.desktop} {
    font-size: 9rem;
    width: 9rem;
    height: 9rem;
  }

  &:hover {
    color: #f1d301;
  }
`;

const Image = styled.div`
  background-size: cover;
  width: 95vw;
  height: 90vh;
  position: absolute;
  top: 2rem;
  z-index: -1;

  @media${device.tablet} {
    width: 80vw;
    height: 100vh;
    left: 2%;
  }
  @media${device.laptopS} {
    width: 33rem;
    height: 90vh;
    right: 12rem;
    left: unset;
  }
  @media${device.desktop} {
    width: 50%;
    height: 90vh;
  }
`;
const CloseButton = styled.i`
  position: absolute;
  top: 0rem;
  right: 0.4rem;
  font-size: 2rem;
  color: #29524a;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #f1d301;
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  width: unset;
  display: flex;
  justify-content: space-evenly;

  @media${device.tablet} {
    width: 60vw;
  }
  @media${device.laptopS} {
    width: 40vw;
  }
  @media ${device.laptop} {
    width: 30vw;
  }
  @media${device.desktop} {
    width: 20vw;
  }
`;

export { Card, Image, Icon, Header, CloseButton, IconContainer };
