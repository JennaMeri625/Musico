import Form from "react-bootstrap/Form";
import { LinkContainer } from "react-router-bootstrap";
import { signInWithGoogle } from "../firebaseConfig";
import { useState } from "react";
import User from "../../../../backend/functions/src/models/User";
import { addUser } from "../services/Userservice";



export function SignUpUser() {

    const [fullName, setFullName] = useState("")
    const [ phoneNumber, setPhoneNumber ] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [musician, setMusician] = useState(false);


    function handleSignUpUser(e: any) {
      e.preventDefault();
      const newUser: User = {
        fullName,
        phoneNumber,
        zipCode,
        email,
        userName,
        password,
        musician
      }
console.log("running");

      addUser(newUser).then(data => console.log(data));
      setFullName("");
      setPhoneNumber("");
      setZipCode("");
      setEmail("");
      setUserName("");
      setPassword("");
      setMusician(false)
    }



  return (
    <div style={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}>
      <div>
        <div>
          <Form.Text style={{ fontSize: 30, fontWeight: "bold" }}> Sign up for more access
          </Form.Text>
        </div>


        <Form onSubmit={handleSignUpUser} style={{ marginTop: 30, backgroundColor: "black", borderRadius: "50px", padding: "20px",  }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Control
                style={{ marginBottom: 10, textAlign: "center", width: "auto", margin: "0 auto" }}
                type="text"
                placeholder="Enter Full Name"
                value={fullName} onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formPhoneNumber">
              <Form.Control
                style={{ marginBottom: 10, textAlign: "center", width: "auto", margin: "0 auto" }}
                type="number"
                placeholder="Enter Phone Number"
                value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formZipCode">
              <Form.Control
                style={{ marginBottom: 10, textAlign: "center", width: "auto", margin: "0 auto" }}
                type="number"
                placeholder="Enter Zipcode"
                value={zipCode} onChange={(e) => setZipCode(e.target.value)}
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control
                style={{ marginBottom: 10, textAlign: "center", width: "auto", margin: "0 auto" }}
                type="email"
                placeholder="Enter email"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Control
                style={{ marginBottom: 10, textAlign: "center", width: "auto", margin: "0 auto" }}
                type="text"
                placeholder="Create Username"
                value={userName} onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                style={{ marginBottom: 10, textAlign: "center", width: "auto", margin: "0 auto" }}
                type="password"
                placeholder="Create Password"
                value={password} onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            </div>

            <div className="formMusician"
              style={{ marginBottom: 10, textAlign: "center", width: "auto", margin: "0 auto" }}>
                <input type="checkbox"
                checked={musician} onChange={(e) => setMusician(e.target.checked)} />
            </div>
            
          


          <div style={{ display: "flex", justifyContent: "center" }}>
         
          <button
                  type="submit"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    border: "none",
                  }}
                >
                  Sign In
                </button>

          </div>
        </Form>
        <LinkContainer to={"/ProfilePage"}>
          <button 
          onClick={signInWithGoogle}
          >
            Or Sign up with Google
          </button>
          </LinkContainer>
      </div>
    </div>
  );
}




{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
