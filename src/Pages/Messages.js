import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MessageForm from "./MessageForm";
import { useParams } from "react-router";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();

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
  console.log(id);

  return (
    <div>
      <MessageForm />
      <h1>Please add a comment here!!</h1>
      {comments.map((c, index) => {
        return (
          <Card key={index}>
            <Card.Body>
              {c.name}
              <div>{c.post}</div>
              <div>{c.date}</div>
              <div>
                {" "}
                <button id={c.id} onClick={HandleDelete}>
                  Delete{" "}
                </button>{" "}
              </div>
              <Link to={`/comments/${c.id}/edit`}>
                {" "}
                <button>Edit </button>{" "}
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

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

//   const editedComment = (editComment) => {
//     axios
//       .put(`${API}/comments/${id}`, editComment)
//       .then(
//         () => {
//           navigate(`/comments/${id}`);
//         },
//         (error) => console.warn(error)
//       )
//       .catch((c) => console.warn("catch", c));
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
