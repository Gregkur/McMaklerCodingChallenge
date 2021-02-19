import { device } from "../../../helpers/devices";
import styled from "styled-components";

const PropertiesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const PropertiesGrid = styled.div`
  max-width: 90%;
  grid-template-columns: 1fr;
  margin 0 auto;
  display: grid;
  grid-gap: 1rem;

  @media${device.tablet} {
    max-width: 95%;
    grid-template-columns: 1fr 1fr;
  }
  @media${device.laptop} {
    max-width: 97%;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Header = styled.h1`
  color: #29524a;
  font-weight: 300;
  font-size: 1.7rem;

  @media${device.tablet} {
    font-size: unset;
  }
  span {
    color: #f1d301;
    font-weight: 400;
  }
`;

export { PropertiesWrapper, PropertiesGrid, Header };
