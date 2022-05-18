import { useState, useEffect } from "react";
import axios from "axios";
import MessageForm from "./MessageForm";

export default function Messages() {
  const [comments, setComments] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        throw error;
      });
  }, [URL]);

  return (
    <div>
      <MessageForm />
      <h1>Please put your comment here!!</h1>
      {comments.map((c, index) => {
        return (
          <div key={index}>
            {c.name}
            <div>{c.post}</div>;<div>{c.date}</div>;
          </div>
        );
      })}
    </div>
  );
}
