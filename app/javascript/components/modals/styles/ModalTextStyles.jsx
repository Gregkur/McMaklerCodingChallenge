import styled from "styled-components";
import { device } from "../../../helpers/devices";

const Input = styled.input`
  width: 80%;
  height: 4rem;
  font-size: 1.5rem;
  color: #000000bd;
  border: none;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  font-family: "Raleway", sans-serif !important;
  display: flex;
  text-align: center;

  @media${device.tablet} {
    width: 80vw;
  }
  @media${device.laptop} {
    width: 40vw;
  }
`;
const FlexWrapper = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media${device.laptop} {
    width: unset;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  padding: 4rem;
  display: flex;
  justify-content: space-between;

  i {
    font-size: 3rem;
    color: #29524a;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #f1d301;
      cursor: pointer;
    }
  }
`;
export { Input, FlexWrapper, ButtonContainer };
