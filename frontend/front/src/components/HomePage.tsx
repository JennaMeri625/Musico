import { LinkContainer } from "react-router-bootstrap";

export function HomePage() {
    return (
    <div style={{paddingLeft: 350, paddingTop: 50}}>
        <input type="text" placeholder="zip code" style={{marginRight: 10}}/>
        <input type="text" placeholder="keywords: flute, wedding, singer, etc" style={{marginRight: 10}}/>

        <LinkContainer to={"/ResultsPage"}>
        <button type="submit">Search</button>
        </LinkContainer>

    </div>
    )
};