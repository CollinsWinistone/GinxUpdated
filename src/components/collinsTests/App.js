import React,{createContext,useState} from "react";
import About from "../About";
import Contact from "../Contact";
import Home from "../Home";
import Inventory from "../Inventory";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../../App.css";
import SedanInOxus from "../home-component/sedanInOxus";
export const WholeContext = createContext({});

const App =() => {
  const [ openAdvSch, setOpenAdvSch ] = useState(false);
    return (
      <SedanInOxus/>
    
        
     )
}

export default App;