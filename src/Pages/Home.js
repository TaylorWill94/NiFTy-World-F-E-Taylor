import React from "react";
import "./Home.css";
import logo from "../homepageLogo.jpg"

function Home() {
  return (
    <div className="home">
      <section>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h1>Learn about <span className="text-primary"> NFTs, Money Matters, and Cryptocurrency!</span></h1>
                    </div>
                    <img className="img-fluid w-50 mx-2" src={logo} alt=""/>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Home;
