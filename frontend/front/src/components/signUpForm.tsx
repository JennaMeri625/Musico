import Form from "react-bootstrap/Form";
import { LinkContainer } from "react-router-bootstrap";
import { signInWithGoogle } from "../firebaseConfig";


export function SignUpForm() {
  return (
    <div style={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}>
      <div>
        <div>
          <Form.Text style={{ fontSize: 30, fontWeight: "bold" }}> Sign up for more access
          </Form.Text>
        </div>


        <Form style={{ marginTop: 30, backgroundColor: "black", borderRadius: "50px", padding: "20px",  }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Control
                style={{ marginBottom: 10, textAlign: "center", width: "auto", margin: "0 auto" }}
                type="FullName"
                placeholder="Enter Full Name"
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formPhoneNumber">
              <Form.Control
                style={{ marginBottom: 10, textAlign: "center", width: "auto", margin: "0 auto" }}
                type="phonenumber"
                placeholder="Enter Phone Number"
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formZipCode">
              <Form.Control
                style={{ marginBottom: 10, textAlign: "center", width: "auto", margin: "0 auto" }}
                type="zipcode"
                placeholder="Enter Zipcode"
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control
                style={{ marginBottom: 10, textAlign: "center", width: "auto", margin: "0 auto" }}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                style={{ marginBottom: 10, textAlign: "center", width: "auto", margin: "0 auto" }}
                type="Username"
                placeholder="Create Username"
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                style={{ marginBottom: 10, textAlign: "center", width: "auto", margin: "0 auto" }}
                type="password"
                placeholder="Create Password"
              />
            </Form.Group>
          </div>


          <div style={{ display: "flex", justifyContent: "center" }}>
          <LinkContainer to={"/ProfilePage"}>
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
</LinkContainer>
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
