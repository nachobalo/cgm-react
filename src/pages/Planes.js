import React from 'react'
import Cobertura from "./Cobertura";

const Planes = (props) => {

    return (
        <main>

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
                            <a href="#">Consultanos</a>
                        </div>
                    </div>

                </div>
            </section>


            <Cobertura/>

            <section className="container">
                <div className="mosaics">
                    <div className="mosaic">
                        <a href="#">
                            <div className="mosaic-content">

                                <div className="icons-group">
                                    <span><i className="fas fa-user-nurse"></i></span>
                                    <span><i className="fas fa-stethoscope"></i></span>
                                    <span><i className="fas fa-user-md"></i></span>
                                </div>

                                <h4>Catilla Medica</h4>
                                <p className="mosaic-text">Profesionales y dias de atencion</p>
                            </div>
                        </a>
                    </div>
                    <div className="mosaic">
                        <a href="#">
                            <div className="mosaic-content">
                                <div className="icons-group">
                                    <span><i className="fas fa-ambulance"></i></span>
                                    <span><i className="fas fa-heartbeat"></i></span>
                                    <span><i className="fas fa-hand-holding-medical"></i></span>
                                </div>
                                <h4>Servicios</h4>
                                <p className="mosaic-text">Mira todo lo que te ofrecemos</p>
                            </div>
                        </a>
                    </div>

                    <div className="mosaic">
                        <div className="mosaic-content">
                            <div className="icons-group">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                            </div>
                            <h4>Seguinos</h4>
                            <p className="mosaic-text">Enterate de todo al instante</p>
                        </div>

                    </div>
                </div>
            </section>


        </main>
    );

}

export default Planes;