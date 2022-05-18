import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import MessageForm from "./MessageForm";

export default function Comments() {
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

  const HandleDelete = (event) => {
    axios.delete(
      `${URL}/comments/${event.target.id}`,
      comments[event.target.id]
    );
    // eslint-disable-next-line
    setComments(comments.filter((obj) => obj.id != event.target.id));
  };

  return (
    <div>
      <MessageForm />
      <h1>Please add a comment here!!</h1>
      {comments.map((c, index) => {
        return (
          <div key={index}>
            {c.name}
            <div>{c.post}</div>;<div>{c.date}</div>;
            <div>
              {" "}
              <button id={c.id} onClick={HandleDelete}>
                Delete{" "}
              </button>{" "}
            </div>
            <Link to={`/messages/edit/${index}`}>
              {" "}
              <button>Edit </button>{" "}
            </Link>
          </div>
        );
      })}
    </div>

    /* <div>
    <MessageForm/>
    <h1>Please add a comment here...</h1>
<table>
  <tr>
    <th>{element.date}</th>
    <th>
      <Link to={`/transactions/details/${i}`}>{element.item_name}</Link>
    </th>
    <th>{element.amount}</th>
    <th>
      <button id={element.id} onClick={HandleDelete}>
        Delete
      </button>
    </th>
  </tr>
</table>
</div> */
  );
}
