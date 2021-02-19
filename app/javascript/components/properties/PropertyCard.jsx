import React from "react";
import { Image } from "cloudinary-react";

import {
  Card,
  InfoContainer,
  TopContainer,
  MiddleContainer,
  BottomContainer,
} from "./styles/PropertyCardStyles";

export default function PropertyCard(p) {
  return (
    <Card>
      <Image cloudName="dpbcay64m" publicId={p.photo.url}></Image>
      <InfoContainer>

        <TopContainer>
          <h3>{p.address}</h3>
          <p>{p.state}</p>
        </TopContainer>

        <MiddleContainer>
          <p>Building from {p.year}</p>
        </MiddleContainer>

        <BottomContainer>
          <p>{p.rent}€ per month</p>
          <p>
            {p.rooms} rooms | {p.size} m²
          </p>
        </BottomContainer>
        
      </InfoContainer>
    </Card>
  );
}
