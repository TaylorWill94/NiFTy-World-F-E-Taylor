import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Videos from "../Components/Videos";
import axios from "axios";

export default function NFT() {
  const [content, setContent] = useState([]);
  const [show, setShow] = useState(false);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/content`)
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
      {/* {content.map((c, index) => {
        return <div key={index}>{c.reading_material}</div>;
      })} */}
      {nft} ?{" "}
      <button onClick={showNft} type="button">
        hide
      </button>{" "}
      : <button>show</button>
      {show ? "Hi" : "Bye"}
      <Videos />
      <button className="next-btn">Next</button>
    </div>
  );
}
