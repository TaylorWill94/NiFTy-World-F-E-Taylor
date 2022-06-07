import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import nftvideo from "../Components/nftvideo.mp4";
// import Videos from "../Components/Videos";
import axios from "axios";
import { Button , Container, Stack} from "react-bootstrap";

export default function LessonList() {
  // const [content, setContent] = useState({});
  const [lessons, setLessons] = useState([]);
  // const [show, setShow] = useState(true);
  // const [changeText, setChangeText] = useState("Learn");
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${URL}/categories/${id}/lessons`)
      .then((response) => {
        setLessons(response.data);
      })
      .catch((error) => {
        throw error;
      });
  }, [id, URL]);

  // let nft = content.map((c, index) => (
  //   <div key={index}>{c.reading_material}</div>
  // ));

  // const showNft = () => {
  //   setShow((text) => !text);
  // };

  // let lessonList = lessons.map((lesson, i) => (
  //   <Button
  //     key={i}
  //     href={`/categories/${lesson.id}/lessons/${lesson.categories_id}`}
  //   >
  //     {lesson.lesson_title}
  //   </Button>
  // ));

  // let lessonList = lessons.map((lesson, i) => (
  //   <Button key={i} href={`/categories/${lesson.categories_id}/${lesson.id}`}>
  //     {lesson.lesson_title}
  //   </Button>
  // ));

  let lessonList = lessons.map((lesson, i) => (
    <div key={i}>
      {/* <Link > */}
        <Button href={`/categories/${lesson.categories_id}/${lesson.id}`} variant="outline-primary">{lesson.lesson_title}</Button>
      {/* </Link> */}
    </div>
  ));
  return (
    <Container>
      <h2 className="my-5">Lessons</h2>
      <Stack className="mt-5" gap="3">
        {lessonList}
      </Stack>
        {/* <Button href={`/categories/${lessons.categories_id}/lessons/${lessons.id}`}>{lessons.lesson_title}</Button> */}
        {/* <h1>{lessons.reading_material}</h1> 
        <h2>{lesson.videos}</h2>
        <h2>{lesson.categories_id}</h2>
        <h2>What is an NFT?</h2> */}
    </Container>
  );
}
