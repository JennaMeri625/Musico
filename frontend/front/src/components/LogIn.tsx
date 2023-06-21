import { LinkContainer } from "react-router-bootstrap";


export function LogIn() {
    return (

        <>
        <div style={{marginLeft: 300, marginTop: 50}}>
            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder="Type Password" />
            
            <LinkContainer to={"/ProfilePage"}>
            <button type="submit">Log In</button>
            </LinkContainer>
            
        </div>
        <div style={{ padding: 100 }}>

            Need to add "Log in with Google"

            onClick from login with Google should Link to="/LoggedInPage"
        </div>
        </>
    )
};