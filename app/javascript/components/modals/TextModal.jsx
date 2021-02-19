import React, { useState } from "react";

import { Input, FlexWrapper, ButtonContainer } from "./styles/ModalTextStyles";
import { Border, Header, Card } from "./styles/ModalConstructorStyles";

export default function TextModal(props) {
  // Stateful for basic form validation
  const [filled, setFilled] = useState(false);

  const {
    handleChange,
    nextModal,
    previusModal,
    header,
    modalType,
    value,
    dataType,
    placeholder,
  } = props;

  // Called in NewProperty.jsx
  const onInputChange = (e) => {
    e.target.value !== "" ? setFilled(true) : setFilled(false);
    handleChange(e);
  };
  // Not allowing accidental form submits
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      return false;
    }
  };

  return (
    <Border>
      <Header>{header}</Header>
      <Card>
        <FlexWrapper>
          <label htmlFor="multipart"></label>
          <Input
            required
            className="form-control"
            id={modalType}
            name={modalType}
            value={value}
            type={dataType}
            placeholder={placeholder}
            onChange={onInputChange}
            onKeyDown={handleKeyDown}
          />
          <ButtonContainer>
            <i onClick={previusModal} className="fas fa-chevron-left"></i>
            <i
              onClick={nextModal}
              className={`fas fa-chevron-right ${
                filled ? "visible" : "collapsed"
              }`}></i>
          </ButtonContainer>
        </FlexWrapper>
      </Card>
    </Border>
  );
}
