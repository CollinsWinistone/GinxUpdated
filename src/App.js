import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Inventory from "./components/Inventory";
import Details from "./components/details";
import About from "./components/About";
import "./App.css";
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