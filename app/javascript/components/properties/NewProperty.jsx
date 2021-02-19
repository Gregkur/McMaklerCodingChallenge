import React, { useState } from "react";
import { Link } from "react-router-dom";

import ModalConductor from "../modals/ModalConstructor";

import { CloseButton } from "../styles/HomeStyles";

export default function NewProperty(props) {
  // Used to change modals
  const [step, setStep] = useState(1);

  // To set the body for the API call
  const [property, setProperty] = useState({
    address: "",
    photo: null,
    size: "",
    year: "",
    rooms: 0,
    rent: "",
    building: "",
    state: "",
  });

  // Controlled forms
  const onChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  // Controlled file upload form
  const onFileUpload = (file) => {
    setProperty({ ...property, photo: file });
  };

  // Changing to the next modal
  const next = () => {
    let currentStep = step;
    currentStep += 1;
    setStep(currentStep);
  };

  //Changing to the previus modal
  const previous = () => {
    let currentStep = step;
    currentStep -= 1;
    setStep(currentStep);
  };

  // API call => controllers/api/v1/properties_controller
  const onSubmit = (e) => {
    e.preventDefault();

    // Variables for fetching
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const url = "/api/v1/properties/create";

    // Form a new body based on state as a FormData, to transfer Files through
    let body = new FormData();
    body.append("property[address]", property.address);
    body.append("property[photo]", property.photo);
    body.append("property[size]", property.size);
    body.append("property[year]", property.year);
    body.append("property[rooms]", property.rooms);
    body.append("property[rent]", property.rent);
    body.append("property[building]", property.building);
    body.append("property[state]", property.state);

    // API call to backend to create a new instance of Property
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
      },
      body: body,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error with forming data");
      })
      // Switching to #all view
      .then(() => props.history.push(`/property/all`))
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <Link to="/" role="button">
        <CloseButton>
          <i className="fas fa-times"></i>
        </CloseButton>
      </Link>
      <form onSubmit={onSubmit}>
        <ModalConductor
          {...property}
          handleChange={onChange}
          handleFileUpload={onFileUpload}
          step={step}
          handleSubmit={onSubmit}
          nextModal={next}
          previusModal={previous}
        />
      </form>
    </>
  );
}
