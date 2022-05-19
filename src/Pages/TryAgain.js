import React from "react";
import { Link } from "react-router-dom";

function TryAgain() {
  return (
    <div>
      <h1>Opps! Try Again</h1>;
      <Link to="/Categories">
        <button>Back to Categories</button>
      </Link>
      <button>Next</button>
    </div>
  );
}

export default TryAgain;
