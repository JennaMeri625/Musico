
import { LinkContainer } from "react-router-bootstrap";

export function ProfilePage() {
    return (
        <>

        <div style={{ textAlign: "center", fontSize: 50, marginTop: 100 }}>
            This would be their profile.
        </div>

        <div style={{marginLeft: 400}}>
            <LinkContainer to={"/LoggedInPage"}>
                <button>Go to Logged In Search</button>
            </LinkContainer>
        </div>

        </>
    )
}