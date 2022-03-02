import React from 'react';
import '../../styles/components/layout/Frecuentes.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance, faHandHoldingMedical, faHeartbeat, faMobileAlt, faStethoscope, faThumbsUp, faUser, faUserMd, faUserNurse } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';


const Frecuentes = () => {

    return (
        <section className="container">
            <div className="mosaics">
                <div className="mosaic">
                    <Link to="/servicios">
                        <div className="mosaic-content">
                            <div className="icons-group">
                                <span><FontAwesomeIcon icon={faUserNurse} /></span>
                                <span><FontAwesomeIcon icon={faStethoscope} /></span>
                                <span><FontAwesomeIcon icon={faUserMd} /></span>
                            </div>

                            <h4>Catilla Medica</h4>
                            <p className="mosaic-text">Profesionales y dias de atencion</p>
                        </div>
                    </Link>
                </div>
                <div className="mosaic">
                    <Link to="/servicios">
                        <div className="mosaic-content">
                            <div className="icons-group">
                                <span><FontAwesomeIcon icon={faAmbulance} /></span>
                                <span><FontAwesomeIcon icon={faHeartbeat} /></span>
                                <span><FontAwesomeIcon icon={faHandHoldingMedical} /></span>
                            </div>
                            <h4>Servicios</h4>
                            <p className="mosaic-text">MirLink todo lo que te ofrecemos</p>
                        </div>
                    </Link>
                </div>

                <div className="mosaic">
                    <Link to="/planes">
                        <div className="mosaic-content">
                            <div className="icons-group">
                                <span><FontAwesomeIcon icon={faMobileAlt} /></span>
                                <span><FontAwesomeIcon icon={faUser} /></span>
                                <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                            </div>
                            <h4>Asociate</h4>
                            <p className="mosaic-text">Elegi el plan que mas te convenga</p>
                        </div>
                    </Link>
                </div>
                <div className="mosaic">
                    <div className="mosaic-content">
                        <div className="icons-group">
                            <a href="http://instagram.com"><span><FontAwesomeIcon icon={faInstagram} /></span></a>
                            <a href="http://twitter.com"> <span><FontAwesomeIcon icon={faTwitter} /></span></a>
                            <a href="http://facebook.com"> <span><FontAwesomeIcon icon={faFacebook} /></span></a>
                        </div>
                        <h4>Seguinos</h4>
                        <p className="mosaic-text">Enterate de todo al instante</p>
                    </div>

                </div>
            </div>


        </section>

    );
}

export default Frecuentes;

