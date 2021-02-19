import styled from "styled-components";
import { device } from "../../../helpers/devices";

// Styling the photo in the form, refferenced in ./StateModalStyles
const Photo = styled.input`
  width: 15rem;
  height: 15rem;
  margin: 1rem;
  font-family: "Raleway", sans-serif !important;
  text-align: center;
  cursor: pointer;
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: 0.4rem;
  color: #ffffff;
  border: none;
  transition: all 0.3s ease-in-out;
  background-position: center;
  background-size: cover;
  filter: brightness(0.8);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  &:hover {
    filter: brightness(1);
  }

  @media${device.laptop} {
    width: 20rem;
    height: 20rem;
  }
  @media${device.desktop} {
    width: 30rem;
    height: 30rem;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export { Photo, FlexWrapper };
