import React from "react";
import Hug from "../../img/hug.png";
import M3lsh from "../../img/m3lsh.png";
import Bb from "../../img/bb.png";
import asfora from "../../img/asfora.png";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="text-center mt-5">
      <div className="row">
        <div className="col-md-3 col-sm-10 col-xs-10">
          <Link to="/hug">
            <div className="cardy">
              <div className="card-img">
                <img
                  src={Hug}
                  width={"250px"}
                  alt="hug-pic"
                  className="img-fluid"
                />
                <h4>أحضني</h4>
              </div>
            </div>
          </Link>
        </div>
        <br />
        <div className="col-md-3 col-sm-10 col-xs-10">
          <Link to="/sorry">
            <div className="cardy">
              <div className="card-img">
                <img
                  src={M3lsh}
                  width={"200px"}
                  alt="hug-pic"
                  className="img-fluid"
                />
                <h4>معلشني</h4>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 col-sm-10 col-xs-10">
          <Link to="/bravo">
            <div className="cardy">
              <div className="card-img">
                <img
                  src={Bb}
                  alt="hug-pic"
                  width={"200px"}
                  className="img-fluid"
                />
                <h4>برافو عليك</h4>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 col-sm-10 col-xs-10">
          <Link to="/asfor">
            <div className="cardy">
              <div className="card-img">
                <img
                  src={asfora}
                  alt="asfor-pic"
                  width={"200px"}
                  className="img-fluid"
                />
                <h4>خش نضف ودنك</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
