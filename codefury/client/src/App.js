import React from "react";

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Contact from "./components/contact";
import About from "./components/about";
import Navigation from "./components/navigation";
import Login from "./components/login";
function App() {

  return (
    <div className="App">
      <BrowserRouter>  
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/navigation" element={<Navigation />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
