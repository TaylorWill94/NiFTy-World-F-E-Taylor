import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import nftvideo from "../Components/nftvideo.mp4";
import Videos from "../Components/Videos";
import axios from "axios";

export default function NFT() {
  const [content, setContent] = useState([]);
  const [show, setShow] = useState(true);
  const [changeText, setChangeText] = useState("Learn");
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/lessons`)
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        throw error;
      });
  }, [URL]);

  let nft = content.map((c, index) => (
    <div key={index}>{c.reading_material}</div>
  ));

  const showNft = () => {
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
    <div className="nft">
      <h1 className="app-heading">NiFTY World</h1>
      <Link to="/">
        <h1 className="nft-home-btn">Home</h1>
      </Link>
      <br />
      <br />
      <h1 className="nft-heading">What is an NFT?</h1>
      <br />
      <br />
      {{ nft } ? (
        <button
          className="nft-learn-btn"
          onClick={() => {
            showNft();
            changeBtnText();
          }}
        >
          {changeText}
        </button>
      ) : (
        <button
          className="nft-learn-btn"
          onClick={() => {
            showNft();
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
        : content.map((c, index) => {
            return (
              <div className="nft-info" key={index}>
                {c.reading_material}
              </div>
            );
          })}
      <Videos />
      <video className="little-lady" width="750" height="500" controls>
        <source src={nftvideo} type="video/mp4" />
      </video>
      <Link to={`/questions`}>

        <button className="next-btn">Next</button>
      </Link>
    </div>
  );
}
