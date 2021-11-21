import React from 'react'
import { Link } from "react-router-dom";

const Nav = (props) => {

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">#ClinicaGamarraMendoza</Link>
            </div>
            <button className="navbar-toggle"><i className="fas fa-bars"></i></button>
            <ul className="navbar-menu">
                <li><Link className="navbar-link" to="/servicios">Servicios</Link></li>
                <li><Link className="navbar-link" to="/planes">Planes</Link></li>
                <li><Link className="navbar-link" to="/contacto">Contacto</Link></li>
            </ul>

        </nav>
    );
}


export default Nav;