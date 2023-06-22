import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { SignUpForm } from "./components/signUpForm";
import { LogIn } from "./components/LogIn";
import { LoggedInPage } from "./components/LoggedInPage";
import { ProfilePage } from "./components/ProfilePage";
import { ResultsPage } from "./components/ResultsPage";

function App() {
  return (
  
    <>
    <div><Header /></div>
    <Routes >
      <Route path="/HomePage" element={<HomePage/>} />
      <Route path="/signUpForm" element={<SignUpForm />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/LoggedInPage" element={<LoggedInPage />} />
      <Route path="/ProfilePage" element={<ProfilePage />} />
      <Route path="/ResultsPage" element={<ResultsPage />} />
      
    </Routes>
    
    </>

  
    );
}
export default App;














 // <div className="App">
    //   <button type="button" className="btn btn-primary">Primary</button>

    // </div>

{/* <Navbar.Brand href="#home">Musico</Navbar.Brand> */}

     {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link2">Link2</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
            </NavDropdown> */}

             {/* <Routes>
      <Route path="/#home" element={<HomePage />} />
      <Route path="/#link" element={<SignUpForm />} />
    </Routes>
       */}

    //    <div>
    //   <header>
    //     <img src="musico logo.png" alt="musico logo" width="150" height="65"></img>
    //     <Link to="/#login">Log In</Link>
    //     <Link to="/#signup">Sign Up</Link>
    //   </header>
    // </div>

