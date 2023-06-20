import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";


export function Header() {
    
    return(

    <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src="musico logo.png" alt="musico logo" width="150" height="65"></img> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/signUpForm">
              <Nav.Link>Sign Up</Nav.Link>
              </LinkContainer>
              <Nav.Link href="/#login">Log In</Nav.Link>  
            </Nav>
          </Navbar.Collapse>  
        </Container>
    </Navbar>

    )


}


{/* <Navbar bg="light" expand="lg">
    //   <Container>
    //   <Navbar.Brand href="#home"><img src="musico logo.png" alt="musico logo" width="150" height="65"></img> </Navbar.Brand>
        
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
           
    //           <Nav.Link href="#home">Log In</Nav.Link>
    //         <Nav.Link href="#link">Sign Up</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar> */}