import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import AllProperties from "../components/properties/AllProperties";
import NewProperty from "../components/properties/NewProperty";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/property/all" exact component={AllProperties} />
      <Route path="/property/new/" exact component={NewProperty} />
    </Switch>
  </Router>
);
