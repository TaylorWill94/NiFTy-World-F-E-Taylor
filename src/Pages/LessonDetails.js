import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Container , Button , Stack} from "react-bootstrap";

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
    setChangeText("Learn");
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
    <Container>
      <h1 style={{backgroundColor: "yellow", textAlign: "center"}} className="m-5 p-5">{content.lesson_title}</h1>
      <Stack direction="horizontal" gap="4">
      {content.reading_material ? (
        <Button
          className="outline-primary"
          onClick={() => {
            showNft();
            changeBtnText();
          }}
        >
          {changeText}
        </Button>
      ) : (
        <Button
        className="outline-primary"
          onClick={() => {
            showNft();
            closeBtn();
          }}
        >
          {changeText}
        </Button>
      )}
      <Button href={`/questions/${id}`} variant="primary">Take the quiz!</Button>
      </Stack>
      <Container className="my-5">
      {show ? "" : content.reading_material}
      </Container>
      <Container>
        <video
          className="little-lady"
          src={content.videos_url}
          type="video/mp4"
          width="750"
          height="500"
          controls
        ></video>
      </Container>
    </Container>
  );
}
