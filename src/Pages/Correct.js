import React from "react";
import { Link } from "react-router-dom";
import "./Correct.css";
//import boyjoy from "../boyjoy.jpg";
//import background from "../boyjoy.jpg";

// import styles from "./Background.module.css";

//number 2
// class Correct extends Component {
//   render() {
//     const myStyle = {
//       backgroundImage: `url(${background})`,
//       height: "100vh",
//       marginTop: "-70px",
//       fontSize: "50px",
//       backgroundSize: "cover",
//       backgroundRepeat: "no-repeat",
//     };
//     return (
//       <div style={myStyle}>
//         <h1>Yay! You passed! You're NiFty-rific!</h1>
//       </div>
//     );
//   }
// }
// export default Correct;

//number 3
function Correct() {
  return (
    <div>
      <h1>Yay!! You passed! You're NiFTy-rific!</h1>;
      <Link to="/Categories">
        <button>Back to Categories</button>
      </Link>
      <button>Next</button>
    </div>
  );
}

export default Correct;
