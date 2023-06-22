import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


export function Header() {
    
    return(

    
    <Navbar bg="light" expand="lg">
        <Container >
          <Navbar.Brand><img src="musico logo.png" alt="musico logo" width="150" height="65"></img> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <LinkContainer to="/HomePage">
              <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signUpForm">
              <Nav.Link>Sign Up</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/LogIn">
              <Nav.Link>Log In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>  
        </Container>
    </Navbar>
    )
}