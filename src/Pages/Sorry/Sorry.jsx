import React from "react";
import "./Sorry.css";
import Vid from "../../img/malesh/Mlsh.mp4";
const Sorry = () => {
  return (
    <div>
      <video autostart autoPlay src={Vid} type="video/mp4" />
    </div>
  );
};

export default Sorry;
