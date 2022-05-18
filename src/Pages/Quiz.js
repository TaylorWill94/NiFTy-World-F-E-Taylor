import axios from 'axios'
import { Container, Card, Stack } from 'react-bootstrap'
import {useState, useEffect } from 'react'

function Quiz() {
  const [quiz, setQuiz] = useState([])
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/quizzes`)
      .then((response) => {
        console.log(response.data)
        setQuiz(response.data);
      })
      .catch((error) => {
        throw error;
      });
  }, [URL]);

  let questions = quiz.map((question, index) => (
    <Card key={index}>
      <Card.Body>{question.answer}</Card.Body>
    </Card>
  ));

  

  return (
    <Container>
      <h1>Let's test your knowledge on what you've learned!</h1>
      <h2>What is an NFT?</h2>
      <Stack className="mt-4" gap='3'>
        <Card>
          <Card.Body>A token to purchase snacks</Card.Body>
        </Card>
        {questions}
      </Stack>
    </Container>
  )
}

export default Quiz