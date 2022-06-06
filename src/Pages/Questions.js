import axios from "axios";

import { Container, Stack, Button, Card } from "react-bootstrap";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Question.css";

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [style, setStyle] = useState("cont");
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
    <Container className="my-4">
      <h1>Let's test your knowledge on what you've learned!</h1>
      <Stack className="mt-4" gap="3">
        <h1>{questions.question_text}</h1>
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

        {/* <button
          className={isCorrectAnswer === "correct" ? "cont2" : ""}
        ></button> */}

        <Card
          className={isCorrectAnswer === "correct" ? "cont2" : ""}
          onClick={() => {
            setIsCorrectAnswer("correct");
          }}
        >
          <Card.Body>{questions.answer}</Card.Body>
        </Card>
        <br />
        <Card
          className={isCorrectAnswer === "wrong" ? "wrong2" : ""}
          onClick={() => {
            setIsCorrectAnswer("wrong");
          }}
        >
          <Card.Body>{questions.wrong_answer}</Card.Body>
        </Card>
      </Stack>
      {isCorrectAnswer === "correct" && (
        <div>You selected the correct answer!</div>
      )}
      {isCorrectAnswer === "wrong" && <div>Opps, try again!</div>}
        <Button href="/categories" className="my-4">I Want To Learn More!</Button>
    </Container>
  );
}

export default Questions;
