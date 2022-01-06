import React from "react";
import "./Bravo.css";
import Vid1 from "../../img/bravo/bravo.mp4";

const Bravo = () => {
  return (
    <div>
      <video autostart autoPlay src={Vid1} type="video/mp4" />
    </div>
  );
};

export default Bravo;
