import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function SignUpForm() {
  return (
    <>
    <div>
        <Form.Text style={{padding: 75, fontSize: 30}}>
          Sign up here to continue your search with access to contact details.
        </Form.Text>
    </div>

      <Form style={{padding: 100}}>
        <div>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="FullName" placeholder="Enter Full Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="phonenumber" placeholder="Enter Phone Number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formZipCode">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="zipcode" placeholder="Enter Zipcode" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        </div>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      
    </>
  );
}


{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}