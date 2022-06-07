import "./NFT.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import {Button, Container, Stack} from "react-bootstrap"

export default function LessonDetails() {
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
  console.log(content.videos_url);

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

  // return (
  //   <div className="nft">
  //     <br />
  //     <br />
  //     <h1 className="nft-heading">{content.lesson_title}</h1>
  //     <br />
  //     <br />
  //     {content.reading_material ? (
  //       <button
  //         type="button"
  //         className="btn btn-outline-primary learn-btn"
  //         onClick={() => {
  //           showNft();
  //           changeBtnText();
  //         }}
  //       >
  //         {changeText}
  //       </button>
  //     ) : (
  //       <button
  //         type="button"
  //         className="btn btn-outline-primary nft-learn-btn"
  //         onClick={() => {
  //           showNft();
  //           closeBtn();
  //         }}
  //       >
  //         {changeText}
  //       </button>
  //     )}
  //     <br />
  //     <br />
  //     <div className="lesson-content">
  //       {show ? "" : content.reading_material}
  //     </div>
  //     <video
  //       className="little-lady"
  //       src={content.videos_url}
  //       type="video/mp4"
  //       width="750"
  //       height="500"
  //       controls
  //     ></video>
  //     {/* <Link to={`/questions/${id}`}>
  //       <Button className="next-btn">Next</Button>
  //     </Link> */}
  //     <br />
  //     <br />
  //     <div className="next-btn-div">
  //       <Link to={`/questions/${id}`}>
  //         <button type="button" className="btn btn-outline-primary next-button">
  //           Test your knowledge!
  //         </button>
  //       </Link>
  //     </div>
  //   </div>
  // );



  return (
    <div className="nft">
      <br />
      <br />
      <h1 className="nft-heading">{content.lesson_title}</h1>
      <br />
      <br />
      {content.reading_material ? (
        <button
          type="button"
          className="btn btn-outline-primary learn-btn"
          onClick={() => {
            showNft();
            changeBtnText();
          }}
        >
          {changeText}
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-outline-primary nft-learn-btn"
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
      <div className="lesson-content">
        {show ? "" : content.reading_material}
      </div>
      <video
        className="little-lady"
        src={content.videos_url}
        type="video/mp4"
        width="750"
        height="500"
        controls
      ></video>
      {/* <Link to={`/questions/${id}`}>
        <Button className="next-btn">Next</Button>
      </Link> */}
      <br />
      <br />
      <div className="next-btn-div">
        <Link to={`/questions/${id}`}>
          <button type="button" className="btn btn-outline-primary next-button">
            Take the quiz!
          </button>
        </Link>
      </div>
    </div>
  );
}










