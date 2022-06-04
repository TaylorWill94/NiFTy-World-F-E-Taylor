import axios from "axios";
import { Container, Stack } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Question.css";

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [style, setStyle] = useState("cont");
  const [wrong, setWrong] = useState("wrong");
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${URL}/lessons/${id}/questions/${id}`)
      .then((response) => {
        console.log(response.data);
        setQuestions(response.data);
      })
      .catch((error) => {
        throw error;
      });
  }, [id, URL]);

  // let quiz = questions.map((question, index) => (
  //   <Link to="/correct">
  //     <Card key={index}>
  //       <Card.Body>
  //         <Card.Text>{question.answer}</Card.Text>
  //       </Card.Body>
  //     </Card>
  //   </Link>
  // ));

  const changeBtnColor = () => {
    setStyle("cont2");
  };

  const alert = () => {
    if (setStyle("cont2")) {
    }
  };

  const wrongBtnColor = () => {
    setWrong("wrong2");
  };

  return (
    <Container>
      <h1>Let's test your knowledge on what you've learned!</h1>
      <Stack className="mt-4" gap="3">
        <Link to="/tryagain">
          {/* <Card>
            <Card.Body>
              <Card.Text>A token to purchase snacks</Card.Text>
            </Card.Body>
          </Card> */}
        </Link>
        <h1>{questions.question_text}</h1>
        <br />
        <br />
        {/* <button
          className={style}
          onClick={() => {
            changeBtnColor();
            alert("hello there");
          }}
        >
          {questions.answer}
        </button> */}
        <button
          className={style}
          onClick={() => {
            changeBtnColor();
          }}
        >
          {questions.answer}
        </button>
        <br />
        <br />
        <button className={wrong} onClick={wrongBtnColor}>
          {questions.wrong_answer}
        </button>
      </Stack>
    </Container>
  );
}

export default Questions;
