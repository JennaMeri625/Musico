import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { SignUpForm } from "./components/signUpForm";
import { LogIn } from "./components/LogIn";
import { LoggedInPage } from "./components/LoggedInPage";
import { ProfilePage } from "./components/ProfilePage";
import { ResultsPage } from "./components/ResultsPage";
import { Footer } from "./components/Footer";

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
    <div><Footer /></div>
    
    </>

  
    );
}
export default App;