import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function NftContent() {
  const [lesson, setLesson] = useState([]);
  // const [buttonChange, setButtonChange] = useState("Learn");
  // const [show, setShow] = useState(true);
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${URL}/lessons/${id}`)
      .then((response) => {
        setLesson(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [id, URL]);

  // const showNft = () => {
  //   setShow((text) => !text);
  // };

  // const changeBtnText = () => {
  //   setButtonChange("Learn");
  // };

  let nft = lesson.map((less, i) => <div key={i}>{lesson.lesson_title}</div>);

  return (
    <div className="nft">
      <br />
      <br />
      <h1 className="nft-heading">Let's Learn!</h1>
      <br />
      <br />
      <p>What does fungibility mean?</p>
      <br />
      <br />
      {nft}
      {/* <p>
        Fungibility is the ability of a good or asset to be interchanged with
        other individual goods or assets of the same type.
      </p> */}
      <br />
      <br />
      {/* <button
        className="nft-learn-btn"
        onClick={() => {
          showNft();
          changeBtnText();
        }}
      >
        {buttonChange}
      </button> */}
      <br />
      <br />
      <Link to="/">
        <button className="nft-learn-btn">Next</button>
      </Link>
    </div>
  );
}

export default NftContent;
