import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import nftvideo from "../Components/nftvideo.mp4";
// import Videos from "../Components/Videos";
import axios from "axios";

export default function NFT() {
  const [content, setContent] = useState({});
  const [show, setShow] = useState(true);
  const [changeText, setChangeText] = useState("Learn");
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${URL}/categories/${id}/lessons/${id}`)
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        throw error;
      });
  }, [id, URL]);
  console.log(content.video_url);

  // let nft = content.map((c, index) => (
  //   <div key={index}>{c.reading_material}</div>
  // ));

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
      <br />
      <br />
      <h1 className="nft-heading">{content.lesson_title}</h1>
      <br />
      <br />
      {content.reading_material ? (
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
      {show ? "" : content.reading_material}
      <video
        className="little-lady"
        src={content.video_url}
        type="video/mp4"
        width="750"
        height="500"
        controls
      ></video>
      <Link to={`/questions/${id}`}>
        <button className="next-btn">Next</button>
      </Link>
    </div>
  );
}
