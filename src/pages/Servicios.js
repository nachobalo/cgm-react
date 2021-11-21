
import React from 'react'
import Staff from "./Staff";
const Servicios = (props) => {

    return (
        <main>

            <h1 className="h1">Clínica Gamarra Mendoza</h1>
            <section className="container">
                <h2 className="titulo">Nuestros servicios</h2>
                <article className="servicios">
                    <div>
                        <ul>
                            <li><i className="fas fa-check"></i> Consultorio externo.</li>
                            <ul>
                                <li>Ofrecemos un amplio listado de especialidades y amplia
                                    disponibilidad de días y horarios.</li>
                                <li>Consulta nuestro staff completo <a href="#staff"><i className="fas fa-arrow-down"></i></a></li>
                                <li>Podes sacar turnos al 02245 440003 o <a href="#">reservar turno</a> via web</li>
                            </ul>
                            <li><i className="fas fa-check"></i> Servicio de ambulancia 24 Hs.</li>
                            <li><i className="fas fa-check"></i> Servicio de traslados<sup>(*)</sup>.</li>
                            <ul>
                                <li>Tenemos convenio con UDEM.</li>
                                <li>Derivacion sin cargo a centros para internacion.</li>
                                <li>Derivacion a centros de mayor complejidad.</li>
                            </ul>
                            <li><i className="fas fa-check"></i> Enfermeria a domicilio.</li>
                            <li><i className="fas fa-check"></i> Servicio de ortopedia<sup>(*)</sup>.</li>
                        </ul>
                        <p><small>*Servicio exclusivo para socios</small></p>
                    </div>

                    <aside>

                        <a href="#">Me gusta <br /> <i className="fas fa-thumbs-up fa-3x"></i> <br /> Ver Planes</a>

                    </aside>
                </article>
                <Staff />
            </section>
        </main>
    );

}

export default Servicios;