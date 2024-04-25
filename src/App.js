import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import NavBar from "./components/navBar/navbar";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projetcs from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (

    <div className="App">

      <Router>
        <ScrollToTop />
        <NavBar />

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/projects" element={ <Projetcs /> } />
          <Route path="/contacts" element={ <Contacts /> } />
          <Route path="/project/:id" element={ <Project /> } />
        </Routes>


        <Footer />
      </Router>

    </div>

  );
}

export default App;
