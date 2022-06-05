import axios from "axios";
import { useState } from "react";
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
    <div className="new-form">
      <br />
      <br />
      <h1>ADD A NEW COMMENT...</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">NAME:</label>
        <br />
        <input
          type="text"
          id="name"
          value={newComment.name}
          onChange={handleText}
          placeholder="NAME ME"
        />
        <br />
        <label htmlFor="post">POST:</label>
        <br />
        <input
          type="text"
          id="post"
          value={newComment.post}
          onChange={handleText}
          placeholder="Type here"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      <br />
      <br />
    </div>
  );
}

export default MessageForm;
