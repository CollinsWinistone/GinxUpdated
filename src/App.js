import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Cosa from "./components/Cosa";
import Contact from "./components/Contact";
import Inventory from "./components/Inventory";
import Details from "./components/details";
import About from "./components/About";
import Message from "./components/message"
import OxusCare from "./components/modules/oxusCare";
import Navbar from "./components/modules/Navbar";
import "./App.css";
export const WholeContext = createContext({});

function App() {
  
  const [ openAdvSch, setOpenAdvSch ] = useState(false);
  // console.log(openAdvSch)
  return (
    <Cosa/>
  );
}

export default App;
