import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import BoilerPlate from "./components/BoilerPlate";
import About from "./pages/About";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
//import './App.css'

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BoilerPlate />} />
          <Route path="/one" element={<PageOne />} />
          <Route path="/two" element={<PageTwo />} />
          <Route path="/three" element={<PageThree />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
