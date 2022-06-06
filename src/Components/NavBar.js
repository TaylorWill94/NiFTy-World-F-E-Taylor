import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavBar.css";
import logo from "../logo.png";
function NavBar() {
  return (
    <Navbar className="navbar-brand" expand="sm" >
      <Container className="navbar-brand">
        <Navbar.Brand href="/">
          <img src={logo} style={{ width: 100, marginTop: -7 }} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about" style={{color: "white"}}>About</Nav.Link>
            <Nav.Link href="/categories" style={{color: "white"}}>Categories</Nav.Link>
            <Nav.Link href="/comments" style={{color: "white"}}>Messages</Nav.Link>
            <Nav.Link href="/login" style={{color: "white"}}>Log in</Nav.Link>
            <Nav.Link href="/signup" style={{color: "white"}}>Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
