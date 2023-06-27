import { useContext } from "react";
import { signOut } from "../firebaseConfig";
import AuthContext from "../services/AuthContext";
import { HomePage } from "./HomePage";
import { LinkContainer } from "react-router-bootstrap";


export function LoggedInPage() {
   
    const { user } = useContext(AuthContext);

    return (


        <>
        <div style={{marginLeft: 30}}>Welcome {user!.displayName}!</div>

        <div style={{marginLeft: 475, marginTop: 100}}>
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
