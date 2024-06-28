import React from "react";
import Landing from "./Landing";

const Home = () => {
  const color = "red";
  const speed = "fast";
  return (
    //JSX = HTML + JS
    <div>
      Home
      <Landing color={color} speed={speed} />
    </div>
  );
};

export default Home;
