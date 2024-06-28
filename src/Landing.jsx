import React from "react";
import Landtwo from "./Landtwo";

const Landing = (props) => {
  return (
    <div>
      Landing
      <p>The car is {props.color}</p>
      <Landtwo colour={props.color}/>
    </div>
  );
};

export default Landing;
