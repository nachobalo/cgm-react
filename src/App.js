import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
//  import './App.css';
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Planes from "./pages/Planes";
import Servicios from "./pages/Servicios";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/servicios" exact element={<Servicios />} />
          <Route path="/planes" exact element={<Planes />} />
          <Route path="/contacto" exact element={<Contacto />} />
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;