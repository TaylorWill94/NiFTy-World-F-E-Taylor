import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import nftvideo from "../Components/nftvideo.mp4";
// import Videos from "../Components/Videos";
import axios from "axios";
import {Button} from "react-bootstrap"

export default function LessonList() {
  // const [content, setContent] = useState({});
  const [lesson, setLesson] = useState({})
  // const [show, setShow] = useState(true);
  // const [changeText, setChangeText] = useState("Learn");
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`${URL}/lessons/${id}`)
      .then((response) => {
        setLesson(response.data);
        // console.log(`${URL}/lessons/${id}`)
      })
      .catch((error) => {
        throw error;
      });
  }, [id,URL]);

  // let nft = content.map((c, index) => (
  //   <div key={index}>{c.reading_material}</div>
  // ));

  // const showNft = () => {
  //   setShow((text) => !text);
  // };

  // const changeBtnText = () => {
  //   setChangeText(":D");
  // };

  // const closeBtn = () => {
  //   setChangeText("Click");
  // };

  // const changeBtn = (changeText) => {
  //   if (setShow === "true") {
  //     changeText("Close");
  //   } else {
  //     changeText("Learn");
  //   }
  // };

  return (
    <>
      <Button href={`/categories/${lesson.categories_id}/lessons/${lesson.id}`}>{lesson.lesson_title}</Button>
      <h1>{lesson.reading_material}</h1>
      {/* <h2>{lesson.videos}</h2>
      <h2>{lesson.categories_id}</h2>
      <h2>What is an NFT?</h2> */}

    </>
  //   <div className="nft">
  //     <h1 className="app-heading">NiFTY World</h1>
  //     <Link to="/">
  //       <h1 className="nft-home-btn">Home</h1>
  //     </Link>
  //     <br />
  //     <br />
  //     <h1 className="nft-heading">What is an NFT?</h1>
  //     <br />
  //     <br />
  //     {{ nft } ? (
  //       <button
  //         className="nft-learn-btn"
  //         onClick={() => {
  //           showNft();
  //           changeBtnText();
  //         }}
  //       >
  //         {changeText}
  //       </button>
  //     ) : (
  //       <button
  //         className="nft-learn-btn"
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
  //     {show
  //       ? ""
  //       : content.map((c, index) => {
  //           return (
  //             <div className="nft-info" key={index}>
  //               {c.reading_material}
  //             </div>
  //           );
  //         })}
  //     <Videos />
  //     <video className="little-lady" width="750" height="500" controls>
  //       <source src={nftvideo} type="video/mp4" />
  //     </video>
  //     <button className="next-btn">Next</button>
  //   </div>
  );
}
