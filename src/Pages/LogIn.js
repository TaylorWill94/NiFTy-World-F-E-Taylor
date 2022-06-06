import "./Login.css";
import { Container } from "react-bootstrap";

function LogIn() {
  return (
    <Container className="login-page">
      <div className="login-form">
        <h1 className="login-header">Welcome back NiFTy Pal!</h1>
        <br />
        <div className="logInForm">
          <form>
            <label htmlFor="username">USERNAME:</label>
            <br />
            <br />
            <input id="username" type="text" />
            <br />
            <br />
            <label htmlFor="date">EMAIL:</label>
            <br />
            <br />
            <input id="email" type="text" />
            <br />
            <br />
            <button type="button" className="btn btn-outline-primary">
              Log In
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default LogIn;
