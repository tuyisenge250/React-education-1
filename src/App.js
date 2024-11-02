import React from "react";
// import Badges from "./component/badges/Badge";
//import Banner from "./component/badges/Banners"
import "./App.css";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App(){
return (
  <BrowserRouter>
  <header>
    <Link className="site-logo" to="/">#VanLife</Link>
    <nav>
    <Link to="/About">About</Link>
    </nav>
  </header>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />} />
  </Routes>
  </BrowserRouter>
)
}