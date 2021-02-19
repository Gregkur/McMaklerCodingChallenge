import React from "react";
import { render } from "react-dom";
import App from "../components/App";

// Mounting React to a root rendered in index.html.erb

document.addEventListener("DOMContentLoaded", () => {
  render(
    <App />,
    document.getElementById("root")
  );
});
