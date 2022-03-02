import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import './Normalize.css';
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Planes from "./pages/Planes";
import Servicios from "./pages/Servicios";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Staff from './pages/Staff';
import Osociales from './pages/Osociales';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/servicios" exact element={<Servicios />} />
          <Route path="/staff" exact element={<Staff />} />
          <Route path="/cobertura" exact element={<Osociales />} />
          <Route path="/planes" exact element={<Planes />} />
          <Route path="/contacto" exact element={<Contacto />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;