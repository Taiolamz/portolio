// import logo from './logo.svg';
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router"; 
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home"
import About from "./components/about";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Projects from "./components/portfolio";
import "swiper/css/bundle";

import MenuBar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <MenuBar /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Projects />} />
      </Routes>
      {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
