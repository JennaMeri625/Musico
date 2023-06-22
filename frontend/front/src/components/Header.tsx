import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export function Header() {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to="/HomePage">
            <Navbar.Brand>
              <img
                src="musico logo.png"
                alt="musico logo"
                width="150"
                height="65"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: "pointer" }}
              />
            </Navbar.Brand>
          </LinkContainer>
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

      {showText && (
        <div
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "left",
          padding: "10px",
          position: "absolute",
          left: "85px",  // Adjust the left value to move the div to the right
          top: "80px",
          width: "200px",
          borderRadius: "10px",
        }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p>This is the text that appears when hovering over the logo.</p>
        </div>
      )}
    </>
  );
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