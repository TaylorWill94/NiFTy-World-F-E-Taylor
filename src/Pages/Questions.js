import axios from "axios";
import { Container, Stack, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Question.css";

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
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

  return (
    <Container>
      <h1>Let's test your knowledge on what you've learned!</h1>
      <Stack className="mt-4" gap="3">
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
          className={isCorrectAnswer === "correct" ? "cont2" : ""}
          onClick={() => {
            setIsCorrectAnswer("correct");
          }}
        >
          {questions.answer}
        </button>
        <br />
        <br />
        <button
          className={isCorrectAnswer === "wrong" ? "wrong2" : ""}
          onClick={() => {
            setIsCorrectAnswer("wrong");
          }}
        >
          {questions.wrong_answer}
        </button>
      </Stack>
      {isCorrectAnswer === "correct" && (
        <div>You selected the correct answer!</div>
      )}
      {isCorrectAnswer === "wrong" && <div>Opps, try again!</div>}

      <Link to={`/categories`}>
        <Button>I Want To Learn More!</Button>
      </Link>
    </Container>
  );
}

export default Questions;
