import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from "./home";
import Contact from "./contact";
import About from "./about";
import Navigation from "./navigation";
import Login from "./login";

function Home()
{
    return(
    <BrowserRouter>
    <Routes>
      <Route exact path="/app" element={<App />} />
      <Route exact path="/navigation" element={<Navigation />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    );
}

export default Home; 