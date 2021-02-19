import React from "react";

import { Photo } from "./styles/BuildingModalStyles";

export default function BuildingModal(props) {
  const { handleChange, nextModal } = props;

  const onInputChange = (e) => {
    handleChange(e);
    nextModal();
  };

  return (
    <>
      <label htmlFor="multipart"></label>
      <Photo
        className="form-control house"
        id="building"
        name="building"
        type="text"
        value="House"
        readOnly
        onChange={onInputChange}
        onClick={onInputChange}
      />
      <Photo
        className="form-control apartment"
        id="building"
        name="building"
        type="text"
        value="Apartment"
        readOnly
        onChange={onInputChange}
        onClick={onInputChange}
      />
    </>
  );
}
