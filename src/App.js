import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Inventory from "./components/Inventory";
import Details from "./components/details";
import About from "./components/About";
import Navbar from "./components/modules/Navbar";
import Footer from "./components/modules/Footer";
import OxusCare from "./components/modules/oxusCare";
import SedanInOxus from "./components/home-component/sedanInOxus";
import {  useTheme } from "@mui/material";
import ExploreCar from "./components/exploreCar";
import "./App.css";
import { HomeMaxSharp, HomeMaxTwoTone, HomeMiniOutlined } from "@mui/icons-material";
export const WholeContext = createContext({});

const App =() => {
  const [ openAdvSch, setOpenAdvSch ] = useState(false);
    return (
      <WholeContext.Provider value={{openAdvSch, setOpenAdvSch}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="inventory" element={<Inventory/>}/>
              <Route path="contact" element={<Contact />} />
              
            
            </Route>
          </Routes>
     
      </BrowserRouter>

      </WholeContext.Provider>
    
        
     )
}

export default App;