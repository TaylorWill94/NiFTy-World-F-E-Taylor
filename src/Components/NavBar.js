import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavBar.css";
import logo from "../logo.png";
function NavBar() {
  return (
    //     <Navbar bg="light" expand="sm">
    //       <Container>
    //         <Navbar.Brand href="/">NiFTy World</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //           <Nav className="me-auto">
    //             <Nav.Link href="/about">About</Nav.Link>
    //             <Nav.Link href="/categories">Categories</Nav.Link>
    //             <Nav.Link href="/comments">Messages</Nav.Link>
    //             <Nav.Link href="/login">Log in</Nav.Link>
    //             <Nav.Link href="/signup">Sign Up</Nav.Link>
    //           </Nav>
    //         </Navbar.Collapse>
    //       </Container>
    //     </Navbar>
    //   );
    // }
    <Navbar className="navbar-brand" expand="sm">
      <Container className="navbar-brand">
        <Navbar.Brand href="/">
          <img src={logo} style={{ width: 100, marginTop: -7 }} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/comments">Messages</Nav.Link>
            <Nav.Link href="/login">Log in</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

//     </Nav>
//     <Navbar.Header>
//           <div className="navbar-brand">
//             &#9776; React-Bootstrap
//             <img src={logo} style={{ width: 100, marginTop: -7 }} alt="" />
//           </div>
//         </>
//       </Navbar.Brand>
//       <Navbar.Toggle />
//     </Navbar.Header>
//   );
// }

export default NavBar;
