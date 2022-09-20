import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Inventory from "./components/Inventory";
import Details from "./components/details";
import About from "./components/About";
import "./App.css";
export const WholeContext = createContext({});

function App() {
  
  const [ openAdvSch, setOpenAdvSch ] = useState(false);
  // console.log(openAdvSch)
  return (
    <WholeContext.Provider value={{openAdvSch, setOpenAdvSch}}>
    <BrowserRouter>
      <Routes>
        <Route exact component={Home} path='/' />
        <Route exact component={Contact} path='/contact' />
        <Route exact component={Inventory} path='/inventory' />
        <Route exact component={About} path='/about' />
        <Route exact path='/cars/:id' > <Details /></Route>
        {/* // render={(props)=><Details id={props.match.params.id} />}  */}

      
      </Routes>
    </BrowserRouter>
    </WholeContext.Provider>
  );
}

export default App;
