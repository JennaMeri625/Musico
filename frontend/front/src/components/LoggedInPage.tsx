import { useContext } from "react";
import { signOut } from "../firebaseConfig";
import AuthContext from "../services/AuthContext";
import { HomePage } from "./HomePage";
import { LinkContainer } from "react-router-bootstrap";

export function LoggedInPage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <div style={{ fontFamily: "Arial", fontSize: "24px" }}>
          Welcome {user!.displayName}!
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div>
          <LinkContainer to={"/ProfilePage"}>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
                padding: "10px 20px",
                border: "none",
                marginRight: "10px"
              }}
            >
              Go To Profile
            </button>
          </LinkContainer>
          <LinkContainer to={"/HomePage"}>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
                padding: "10px 20px",
                border: "none"
              }}
              onClick={signOut}
            >
              Sign Out
            </button>
          </LinkContainer>
        </div>
        </div>
        </>
    );
};