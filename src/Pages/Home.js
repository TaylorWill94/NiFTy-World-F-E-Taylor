import React from "react";
import "./Home.css";
import kidsGlobe from "../download-5.jpg"

function Home() {
  return (
    <div className="home">
      <section className="bg-light text-dark p-5 text-center">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h1>Learn about <span className="text-primary"> NFTs, Money Matters, and Cryptocurrency!</span></h1>
                        <p className="my-4">Lorem ipsum dolor sit amet consectetur adipiscing elit dictum, porttitor curae erat feugiat per duis id posuere, maecenas proin aliquam viverra bibendum enim vestibulum.</p>
                    </div>
                    <img className="img-fluid w-50 mx-2" src={kidsGlobe} alt=""/>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Home;
