import axios from "axios";
import { useState, useEffect } from "react";
import { Form , Button , Container, Col} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const MessageEdit = () => {
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const [comment, setComment] = useState({
    name: "",
    post: "",
    date: "",
  });

  useEffect(() => {
    axios
      .get(`${URL}/comments/${id}`)
      .then((response) => {
        setComment(response.data);
      })
      .catch((error) => {
        navigate("*");
      });
  }, [URL, id, navigate]);

  const handleTextChange = (event) => {
    console.log(comment);
    setComment({ ...comment, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${URL}/comments/${id}`, comment).then((res) => {
      navigate(`/comments`);
    });
  };
  console.log(comment);
  return (
    <Container className="my-4">
      <h2 className="my-3">Edit Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Col sm="5">
          <Form.Control
            id="name"
            value={comment.name}
            type="text"
            onChange={handleTextChange}
          />
        </Col>
        <Form.Label htmlFor="post">Post</Form.Label>
        <Col sm="5">
          <Form.Control
            id="post"
            value={comment.post}
            type="text"
            onChange={handleTextChange}
          />
        </Col>
        <Form.Label htmlFor="date">Date</Form.Label>
        <Col sm="5">
          <Form.Control
            id="date"
            value={comment.date}
            type="text"
            onChange={handleTextChange}
          />
        </Col>
        <Button as="input" type="submit" value="Submit" className="my-3"/>
      </Form>
    </Container>
  );
};
export default MessageEdit;

// import axios from "axios";
// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// function EditComment() {
//   const API = process.env.REACT_APP_API_URL;
//   const { id } = useParams();
//   let navigate = useNavigate();
//   const [editComment, setEditComment] = useState({
//     name: "",
//     post: "",
//     date: "",
//   });
//   console.log(`${API}/comments/${id}`);

//   const editedComment = (editComment) => {
//     axios.put(`${API}/comments/${id}`, editComment).then(
//       () => {
//         navigate(`/messages`);
//       },
//       (error) => console.warn(error)
//     );
//     console.log(editComment).catch((c) => console.warn("catch", c));
//   };

//   const handleText = (event) => {
//     setEditComment({ ...editComment, [event.target.id]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     editedComment(editComment, id);
//   };

//   return (
//     <div className="edit">
//       <br />
//       <br />
//       <h1>Edit</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">NAME:</label>
//         <br />
//         <input
//           type="text"
//           id="name"
//           value={editComment.name}
//           onChange={handleText}
//           placeholder="CHANGE ME"
//         />
//         <br />
//         <label htmlFor="post">POST:</label>
//         <br />
//         <input
//           type="text"
//           id="post"
//           value={editComment.post}
//           onChange={handleText}
//           placeholder="DESCRIBE ME"
//         />
//         <br />
//         <label htmlFor="date">DATE:</label>
//         <br />
//         <input
//           type="text"
//           id="date"
//           value={editComment.date}
//           onChange={handleText}
//           placeholder="$$$"
//         />
//         <br />
//         <input type="submit" />
//       </form>
//       <br />
//       <br />
//     </div>
//   );
// }

// export default EditComment;
