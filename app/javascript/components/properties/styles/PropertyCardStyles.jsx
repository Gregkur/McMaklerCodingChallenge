import styled from "styled-components";

const Card = styled.div`
  position: relative;
  background: white;
  width: 100%;
  border: 1px #0000003b solid;
  transition: all 0.1s ease-in-out;
  border-radius: 20px;

  * {
    color: #29524a;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  img {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    height: 17rem;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopContainer = styled.div`
  display: flex;
  margin-top: -0.6rem;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  padding: 0px 10px;
`;

const MiddleContainer = styled.div`
  margin-top: -0.7rem;
  padding: 0px 10px;
`;

const BottomContainer = styled.div`
  margin-top: -2rem;
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
`;

export { Card, InfoContainer, TopContainer, MiddleContainer, BottomContainer };
