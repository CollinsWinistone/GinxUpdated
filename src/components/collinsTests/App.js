import React,{createContext,useState} from "react";
import About from "../About";
import Contact from "../Contact";
import Home from "../Home";
import Inventory from "../Inventory";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../../App.css";
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