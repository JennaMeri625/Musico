import React, { useRef } from "react";
import { LinkContainer } from "react-router-bootstrap";


export const LogIn: React.FC = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);


  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    ref: React.RefObject<HTMLInputElement>
  ) => {
    if (event.key === "Tab" && ref.current) {
      event.preventDefault();
      ref.current.focus();
    }
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;


    // Perform login logic using username and password
    console.log("Username:", username);
    console.log("Password:", password);


    // Redirect or perform further actions after login
    // ...
  };


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "200px" }}>
          <input
            type="text"
            placeholder="Username"
            style={{ marginBottom: 10, border: "5px solid black", textAlign: "center" }}
            ref={usernameRef}
            onKeyDown={(e) => handleKeyDown(e, passwordRef)}
          />
          <input
            type="password"
            placeholder="Password"
            style={{ marginBottom: 10, border: "5px solid black", textAlign: "center" }}
            ref={passwordRef}
            onKeyDown={(e) => handleKeyDown(e, usernameRef)}
          />
           <LinkContainer to={"/ProfilePage"}>
          <button
            type="submit"
            style={{ backgroundColor: "black", color: "white", fontWeight: "bold", padding: "10px 20px", border: "none" }}
          >
            Login
          </button>
          </LinkContainer>
        </div>
      </form>
    </div>
  );
};


