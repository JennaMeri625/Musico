import { signOut } from "../firebaseConfig";
import { HomePage } from "./HomePage";
import { LinkContainer } from "react-router-bootstrap";


export function LoggedInPage() {
   
    return (


        <>


        <div style={{marginLeft: 475, marginTop: 100}}>Welcome "{"Name"}"!
        <div style={{marginLeft: 20, marginTop: 20}}>
        <LinkContainer to={"/ProfilePage"}>
        <button> Go To Profile </button>
        </LinkContainer>
        </div>
        </div>


        <HomePage />


        <div style={{marginLeft: 500, marginTop: 30}}>
        <LinkContainer to={"/HomePage"}>
        <button onClick={signOut}> Sign Out </button>
        </LinkContainer>
        </div>


        </>
    )
}
