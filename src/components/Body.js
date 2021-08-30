import React from "react";

const Body = (props) => (
  <div>
    <p> hello this is my body </p> {props.text} {props.text2}{" "}
  </div>
);

export default Body;

export const Body2 = () => (
  <div>
    <p> hello this is my body 2</p>
  </div>
);
