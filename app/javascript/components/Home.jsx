import React from "react";

import { Link } from "react-router-dom";

import { Card, Image, Icon, Header, IconContainer } from "./styles/HomeStyles";

export default function Home() {
  return (
    <Card>
      <Header>
        <h1>
          Welcome to <span>McMakler</span>
        </h1>{" "}
        <br />{" "}
        <h3>
          add your property to have it valued by one of our agents, or browse
          through all the properties.
        </h3>
      </Header>
      <IconContainer>
        <Link to="/property/new" role="button">
          <Icon className="far fa-building"></Icon>
        </Link>
        <Link to="/property/all" role="button">
          <Icon className="fas fa-search"></Icon>
        </Link>
      </IconContainer>
      <Image className="homepage-background" />
    </Card>
  );
}
