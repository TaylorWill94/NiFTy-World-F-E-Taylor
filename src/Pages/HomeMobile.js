import React from "react";
import "./Home.css";
import StarTopRight from "../StarTopRight.png";
import StarTopLeft from "../StarTopLeft.png";
import StarMidRight from "../StarMidRight.png";
import StarLeftBottom from "../StarLeftBottom.png";
import "./App.css";
import NFTyWorld from "../NFTy World.png";

function Home() {
  return (
    <div className="PhoneScreen">
      <img src={StarTopRight} className="StarOne" />
      <img src={NFTyWorld} className="AppName" />
      <img src={StarTopLeft} className="StarTwo" />
      <img src={StarMidRight} className="StarThree" />
      <img src={StarLeftBottom} className="StarFour" />

      <h2 className="Welcome Text">
        Welcome To NFTy World! Let’s learn about everything NFT’s, cryptos and
        finance!
      </h2>
      <button className="Button">
        <strong>Go</strong>
      </button>
    </div>
  );
}

export default Home;
