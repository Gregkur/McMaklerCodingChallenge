import React, { useState } from "react";

import { FlexWrapper } from "./styles/ModalTextStyles";
import {
  Border,
  Header,
  Card,
  SubmitContainer,
} from "./styles/ModalConstructorStyles";

export default function ImageModal(props) {
  // Showind/Hiding loader
  const [loading, setLoading] = useState(false);

  // Stateful to get through //FAKEPATH on localhost
  let [selectedPhoto, setSelectedPhoto] = useState(null);

  const { handleFileUpload, previusModal } = props;

  // Setting a photo and sending it upwards to NewProperty.jsx
  const onInputChange = (e) => {
    setSelectedPhoto((selectedPhoto = e.target.files[0]));
    handleFileUpload(selectedPhoto);
  };

  // Showing the loader if the photo got uploaded
  const handleClick = (e) => {
    if (props.photo != null) {
      setLoading(true);
    } else {
      return false;
    }
  };

  return (
    <Border>
      <Header>Please add a photo of the property.</Header>
      <Card>
        <FlexWrapper>
          <label htmlFor="multipart"></label>
          {loading ? (
            <div className={loading ? "loader" : "collapsed"}></div>
          ) : (
            <input
              required
              className="form-control"
              id="photo"
              name="photo"
              type="file"
              placeholder="add photos here"
              onChange={onInputChange}
            />
          )}
          <SubmitContainer>
            <i onClick={previusModal} className="fas fa-chevron-left"></i>
            <button className="no-border" onClick={handleClick} type="submit">
              <i className="fas fa-check"></i>
            </button>
          </SubmitContainer>
        </FlexWrapper>
      </Card>
    </Border>
  );
}
