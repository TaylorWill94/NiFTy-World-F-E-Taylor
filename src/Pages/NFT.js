import { useState, useEffect } from "react";
import Videos from "../Components/Videos";
import axios from "axios";

export default function NFT() {
  const [content, setContent] = useState([]);
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

  return (
    <div className="nft">
      <br />
      <br />
      <h1 className="nft-heading">What is an NFT?</h1>
      <br />
      <br />
      {content.map((c, index) => {
        return <div key={index}>{c.reading_material}</div>;
      })}
      <Videos />
    </div>
  );
}
