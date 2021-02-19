import styled, { keyframes } from "styled-components";
import { device } from "../../../helpers/devices";
import { ButtonContainer } from "./ModalTextStyles";

const SlideRight = keyframes`
0% {
  opacity: 0;
  transform: translate3d(100%, 0px, 0px);
}

100% {
  opacity: 1;
}
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: unset;
  }
`;

const Header = styled.h1`
  text-align: center;
  color: #29524a;
  font-weight: 600;

  @media${device.desktop} {
    font-size: 5rem;
  }
  span {
    color: #f1d301;
  }
`;

const Border = styled.div`
  @media${device.tablet} {
    width: 90vw;
    border: 2px solid #f1d30163;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  @media${device.laptop} {
    width: 60vw;
    height: 35vw;
  }
`;

const SubmitContainer = styled(ButtonContainer)`
  @media${device.laptop} {
    width: 35vw;
  }
`;
export { SlideRight, Card, Header, Border, SubmitContainer };
