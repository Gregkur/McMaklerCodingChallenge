import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

import PropertyCard from "./PropertyCard";

import { CloseButton } from "../styles/HomeStyles";
import {
  PropertiesWrapper,
  PropertiesGrid,
  Header,
} from "./styles/AllPropertiesStyles";

export default function AllProperties() {
  // State to grab the response from the JSON
  const [properties, setProperties] = useState([]);

  // API call => controllers/api/v1/properties_controller
  useEffect(() => {
    const url = "/api/v1/properties";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Problems with the backend");
      })
      // For less immediate showing of cards
      .then((response) =>
        setTimeout(() => {
          setProperties(response);
        }, 500)
      );
  }, []);

  // Mapping fetched properties to make cards
  const mappedProperties = properties.map((p) => (
    <PropertyCard key={p.id} {...p} />
  ));

  return (
    <PropertiesWrapper>
      <Link to="/" role="button">
        <CloseButton>
          <i className="fas fa-times"></i>
        </CloseButton>
      </Link>
      <Header>
        Find your <span>perfect home</span> here
      </Header>
      <PropertiesGrid>{mappedProperties}</PropertiesGrid>
    </PropertiesWrapper>
  );
}
