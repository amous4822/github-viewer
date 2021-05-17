import React, { Fragment } from "react";
import spinner from "./spinner.gif";

export const Spinner = () => (
  <Fragment>
    <img src={spinner} alt="loading..." style={spinnerStyle} />
  </Fragment>
);

const spinnerStyle = {
  width: "200px",
  display: "block",
  margin: "auto",
};
