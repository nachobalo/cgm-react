
import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/pages/Servicios.css'

const Servicios = props => {

    return (
        <main>

            <h1 className="h1">Clínica Gamarra Mendoza</h1>
            <section className="container">
                <h2 className="titulo">Nuestros servicios</h2>
                <article className="servicios">
                    <div>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} /> Consultorio externo.</li>
                            <ul>
                                <li>Ofrecemos un amplio listado de especialidades y amplia
                                    disponibilidad de días y horarios.</li>
                                <li>Consulta nuestro <Link to="/staff" >staff</Link> completo</li>
                                <li>Podes sacar turnos al 02245 440003 o <Link to="/contacto" >Reservar Turno</Link> via web</li>
                            </ul>
                            <li><FontAwesomeIcon icon={faCheck} /> Servicio de ambulancia 24 Hs.</li>
                            <li><FontAwesomeIcon icon={faCheck} />Servicio de traslados<sup>(*)</sup>.</li>
                            <ul>
                                <li>Tenemos convenio con UDEM.</li>
                                <li>Derivacion sin cargo a centros para internacion.</li>
                                <li>Derivacion a centros de mayor complejidad.</li>
                            </ul>
                            <li><FontAwesomeIcon icon={faCheck} /> Enfermeria a domicilio.</li>
                            <li><FontAwesomeIcon icon={faCheck} />Servicio de ortopedia<sup>(*)</sup>.</li>
                        </ul>
                        <p><small>*Servicio exclusivo para socios</small></p>
                    </div>

                    <aside>
                        <Link to="/planes" >Me gusta <br /> <FontAwesomeIcon icon={faThumbsUp} size="2x" /> <br /> Ver Planes</Link>
                    </aside>
                </article>
             
            </section>
        </main>
    );

}

export default Servicios;