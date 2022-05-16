import React from "react";
import "./Home.css";
import desktopHomeImage from "../desktopHomeImage.png";

function Home() {
  return (
    <div className="page">
      <div className="logo">NiFTy World</div>
      {/* <img src={logo} className="logo" /> */}
      <span
        className="rightHeader"
        style={{ width: "417px", height: "91px", left: "887px", top: "72px" }}
      >
        About
      </span>
      <span
        className="rightHeader"
        style={{ width: "417px", height: "91px", left: "1079px", top: "72px" }}
      >
        Login
      </span>
      <span
        className="rightHeader"
        style={{ width: "417px", height: "91px", left: "1300px", top: "72px" }}
      >
        Sign Up
      </span>
      {/* <div className="rightHeader">About Login Sign Up </div> */}
      <div className="text">Learn about NFTs, Cryptocurrency and Finance!</div>

      <img src={desktopHomeImage} className="peopleImage" />
    </div>
  );
}

export default Home;
