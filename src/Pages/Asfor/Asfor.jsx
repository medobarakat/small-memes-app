import React from "react";
import Song from "../../img/asfor/asfor.mp3";
import asfora from "../../img/asfora.png";
import "./Asfor.css";
const Asfor = () => {
  return (
    <div className="asfor">
      <img src={asfora} alt="asfor" />
      <hr />
      <audio controls autoplay>
        <source src={Song} type="audio/mpeg" autoplay />
      </audio>
    </div>
  );
};

export default Asfor;
