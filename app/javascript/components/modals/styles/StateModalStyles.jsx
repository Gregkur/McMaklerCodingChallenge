import styled from "styled-components";
import { device } from "../../../helpers/devices";
import { Photo } from "./BuildingModalStyles";

const StatePhoto = styled(Photo)`
  width: 20rem;
  height: 10rem;
  margin: 0.5rem;

  @media${device.tablet} {
    width: 13rem;
    height: 20rem;
  }
  @media${device.laptop} {
    width: 16rem;
  }
  @media${device.desktop} {
    width: 28rem;
    height: 40rem;
  }
`;

const StateFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media${device.tablet} {
    flex-direction: unset;
  }
`;

const BackButton = styled.div`
  position: absolute;
  top: 0;
  left: 0.4rem;

  i {
    font-size: 2rem;
    color: #29524a;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #f1d301;
      cursor: pointer;
    }
  }
`;
export { StatePhoto, StateFlexWrapper, BackButton };
