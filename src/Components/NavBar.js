import { Navbar, Container, Nav } from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar bg="light" expand="sm">
        <Container>
            <Navbar.Brand href="/">NiFTy World</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/categories">Categories</Nav.Link>
                <Nav.Link href="/messages">Messages</Nav.Link>
                <Nav.Link href="#link">Log in</Nav.Link>
                <Nav.Link href="#link">Sign Up</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar