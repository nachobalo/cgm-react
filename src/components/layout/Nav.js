import React, { useState } from 'react';
import { faBars, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css';


const Nav = () => {

    const [menuShow, setmenuShow] = useState(false);

    return (

        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <NavLink to="/">#ClinicaGamarraMendoza</NavLink>
                </div>
                <button onClick={() => setmenuShow(!menuShow)} className="navbar-toggle">
                    {!menuShow ? <FontAwesomeIcon icon={faBars} />
                    : <FontAwesomeIcon icon={faTimes} />}
                </button>
                <ul className={`navbar-menu ${menuShow && "navbar-menu-visible"}`}>
                    <li><NavLink className="navbar-lInk" to="/"><FontAwesomeIcon icon={faHome} size="lg" /></NavLink></li>
                    <li><NavLink className="navbar-lInk" to="/planes">Planes</NavLink></li>
                    <li><NavLink className="navbar-lInk" to="/cobertura">Cobertura</NavLink></li>
                    <li><NavLink className="navbar-lInk" to="/staff">Cartilla Medica</NavLink></li>
                    <li><NavLink className="navbar-lInk" to="/servicios">Servicios</NavLink></li>
                    <li><NavLink className="navbar-lInk" to="/Contacto">Contacto</NavLink></li>
                </ul>

            </nav>

        </header>
    );


}




export default Nav;