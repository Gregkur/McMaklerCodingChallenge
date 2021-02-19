import React from "react";

import BuildingModal from "./BuildingModal";
import StateModal from "./StateModal";
import TextModal from "./TextModal";
import ImageModal from "./ImageModal";

import { Card, Header, Border } from "./styles/ModalConstructorStyles";

const ModalConductor = (props) => {
  const {
    handleChange,
    handleFileUpload,
    step,
    size,
    year,
    rooms,
    rent,
    address,
  } = props;

  // Main switch, deciding on the displayed modal depending on the state of the parent

  switch (step) {
    case 1:
      return (
        <Border>
          <Header className="animating">
            What's the type of the property?
          </Header>
          <Card className="animating">
            <BuildingModal {...props} />
          </Card>
        </Border>
      );

    case 2:
      return (
        <Border>
          <Header>What's the state of the property?</Header>
          <Card>
            <StateModal {...props} />
          </Card>
        </Border>
      );

    case 3:
      return (
        <TextModal
          header="What's the size of the property?"
          modalType="size"
          value={size}
          dataType="text"
          placeholder="In m²"
          onChange={handleChange}
          {...props}
        />
      );

    case 4:
      return (
        <TextModal
          header="What's the build year?"
          modalType="year"
          value={year}
          dataType="text"
          placeholder="ex.1993"
          onChange={handleChange}
          {...props}
        />
      );

    case 5:
      return (
        <TextModal
          header="How many rooms does it have?"
          modalType="rooms"
          value={rooms}
          dataType="number"
          placeholder="Not counting kitchens and bathrooms"
          onChange={handleChange}
          {...props}
        />
      );

    case 6:
      return (
        <TextModal
          header="How high is the rent?"
          modalType="rent"
          value={rent}
          dataType="text"
          placeholder="In € per month"
          onChange={handleChange}
          {...props}
        />
      );

    case 7:
      return (
        <TextModal
          header="What's the address?"
          modalType="address"
          value={address}
          dataType="text"
          placeholder="ex. Alexanderplatz 1 Berlin"
          onChange={handleFileUpload}
          {...props}
        />
      );

    case 8:
      return <ImageModal onChange={handleFileUpload} {...props} />;

    default:
      return null;
  }
};

export default ModalConductor;
