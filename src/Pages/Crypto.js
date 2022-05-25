import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import whatiscryptovideo from "../Components/whatiscryptovideo.mp4";
import Videos from "../Components/Videos";
import axios from "axios";
import "./Crypto.css";

export default function Crypto() {
  const [lesson, setLesson] = useState([]);
  const [show, setShow] = useState(true);
  const [changeText, setChangeText] = useState("Learn");
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/lesson`)
      .then((response) => {
        setLesson(response.data);
      })
      .catch((error) => {
        throw error;
      });
  }, [URL]);

  let crypto = lesson.map((c, index) => (
    <div key={index}>{c.reading_material}</div>
  ));

  const showCrypto = () => {
    setShow((text) => !text);
  };

  const changeBtnText = () => {
    setChangeText(":D");
  };

  const closeBtn = () => {
    setChangeText("Click");
  };

  // const changeBtn = (changeText) => {
  //   if (setShow === "true") {
  //     changeText("Close");
  //   } else {
  //     changeText("Learn");
  //   }
  // };

  return (
    <div className="crypto">
      <h1 className="app-heading">NiFTY World</h1>
      <Link to="/">
        <h1 className="crypto-home-btn">Home</h1>
      </Link>
      <br />
      <br />
      <h1 className="crypto-heading">What is Cryptocurrency?</h1>
      <br />
      <br />
      {{ crypto } ? (
        <button
          className="crypto-learn-btn"
          onClick={() => {
            showCrypto();
            changeBtnText();
          }}
        >
          {changeText}
        </button>
      ) : (
        <button
          className="crypto-learn-btn"
          onClick={() => {
            showCrypto();
            closeBtn();
          }}
        >
          {changeText}
        </button>
      )}
      <br />
      <br />
      {show
        ? ""
        : lesson.map((c, index) => {
            return (
              <div className="crypto-info" key={index}>
                {c.reading_material}
              </div>
            );
          })}
      <Videos />
      <video className="crypto-cartoon-video" width="750" height="500" controls>
        <source src={whatiscryptovideo} type="video/mp4" />
      </video>

      <button className="next-btn">Next</button>
    </div>
  );
}
