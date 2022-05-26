import axios from 'axios'
import { Container, Card, Stack } from 'react-bootstrap'
import {useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

function Questions() {
  const [questions, setQuestions] = useState([])
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/questions`)
      .then((response) => {
        console.log(response.data)
        setQuestions(response.data);
      })
      .catch((error) => {
        throw error;
      });
  }, [URL]);

  let quiz = questions.map((question, index) => (
    <Link to="/correct">
      <Card key={index}>
        <Card.Body>
          <Card.Text>{question.answer}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  ));
 

  

  return (
    <Container>
      <h1>Let's test your knowledge on what you've learned!</h1>
      <h2>What is an NFT?</h2>
      <Stack className="mt-4" gap='3'>
        <Link to="/tryagain">
          <Card>
            <Card.Body>
              <Card.Text>A token to purchase snacks</Card.Text>
            </Card.Body>
          </Card>
        </Link>
        {quiz}
      </Stack>
    </Container>
  )
}

export default Questions