import React from 'react'
import { Link } from 'react-router-dom';
import Frecuentes from "../components/layout/Frecuentes";

const Planes = props => {

    return (
        <>
            <section className="container planes">
                <h1 className="h1">Clinica Gamarra Mendoza</h1>
                <h2 className="titulo">Planes de Salud</h2>
                <h3 className="subtitulo">Elegi el plan que mas te conviene</h3>
                <div className="cards">

                    <div className="card">
                        <h3>Plan Full</h3>
                        <h4>Todo lo que necesites</h4>
                        <div className="card-text">
                            <ul>
                                <li>Atencion medica en nuestro centro.</li>
                                <li>Guardia a domicilio las 24 HS.</li>
                                <li>Enfermeria a domicilio.</li>
                                <li>Traslado a centros de salud</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <h3>Plan Emergencias</h3>
                        <h4>Te cuidamos 24/7</h4>
                        <div className="card-text">
                            <ul>
                                <li>Guardia a domicilio 24 HS</li>
                                <li>Traslados a centros de salud</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3>Area Protegida</h3>
                            <h4>Protege a tu equipo.</h4>
                        </div>

                        <div className="card-text">
                            <p>Te brindamos cobertura medica para tu local y tus empleados.</p>
                            <Link to="/contacto">Consultanos</Link>
                        </div>
                    </div>

                </div>
            </section>



            <Frecuentes />


        </>
    );

}

export default Planes;