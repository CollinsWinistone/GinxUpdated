import React from "react";
import About from "../About";
import Contact from "../Contact";
import Home from "../Home";
import Cosa from "../Cosa";
import Inventory from "../Inventory";
import Message from "../message";
import Footer from "../modules/Footer";
// import Navbar from "../modules/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from "./NavBar";
import OxusCare from "../modules/oxusCare";
import "../App.css";

const App =() => {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Message />} />
        </Route>
      </Routes>
    </BrowserRouter>
        
     )
}

export default App;