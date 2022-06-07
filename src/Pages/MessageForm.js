import axios from "axios";
import { useState } from "react";
import { Form , Col, Button, Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MessageForm() {
  const API = process.env.REACT_APP_API_URL;
  let navigate = useNavigate();

  const addedComment = (addComment) => {
    axios
      .post(`${API}/comments`, addComment)
      .then(
        () => {
          navigate("/comments", { replace: true });
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [newComment, setNewComment] = useState({
    name: "",
    post: "",
    date: "",
  });

  const handleText = (event) => {
    setNewComment({ ...newComment, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    const date = new Date();
    const formattedDate =
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    newComment.date = formattedDate;
    addedComment(newComment);
  };

  return (
    <Container className="my-4">
      <h2 className="my-4">Hi NiFTy Pal! Do you have a question?</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Label className="my-2" htmlFor="name">NAME:</Form.Label>
        <Col sm="4">
          <Form.Control
            type="text"
            id="name"
            value={newComment.name}
            onChange={handleText}
            placeholder="NAME ME"
          />
        </Col>
        <Form.Label  className="my-2" htmlFor="post">POST:</Form.Label>
        <Col sm="4">
          <Form.Control
            type="text"
            id="post"
            value={newComment.post}
            onChange={handleText}
            placeholder="Type here"
          />
        </Col>
        <Button as="input" type="submit" value="Submit" className="my-3"/>
      </Form>
    </Container>
  );
}

export default MessageForm;
