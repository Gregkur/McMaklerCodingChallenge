import React from "react";

import {
  StatePhoto,
  StateFlexWrapper,
  BackButton,
} from "./styles/StateModalStyles";

export default function TypeAndStateModal(props) {
  const { handleChange, nextModal, previusModal } = props;

  const onInputChange = (e) => {
    handleChange(e);
    nextModal();
  };

  return (
    <StateFlexWrapper>
      <BackButton>
        <i onClick={previusModal} className="fas fa-chevron-left"></i>
      </BackButton>
      <label htmlFor="multipart"></label>
      <StatePhoto
        className="form-control simple"
        id="state"
        name="state"
        type="text"
        value="Simple"
        readOnly
        onChange={onInputChange}
        onClick={onInputChange}
      />
      <StatePhoto
        className="form-control normal"
        id="state"
        name="state"
        type="text"
        value="Normal"
        readOnly
        onChange={onInputChange}
        onClick={onInputChange}
      />
      <StatePhoto
        className="form-control premium"
        id="state"
        name="state"
        type="text"
        value="Premium"
        readOnly
        onChange={onInputChange}
        onClick={onInputChange}
      />
    </StateFlexWrapper>
  );
}
