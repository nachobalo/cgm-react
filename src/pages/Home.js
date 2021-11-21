import React from 'react'
const Home = props => {

    return (
        <main>
            <div className="hero">
                <section className="home container">
                    <aside className="home-aside">
                        <h1 className="titulo">Clinica Gamarra Mendoza</h1>
                        <span>Av. 25 de Mayo 555 - Castelli<br />
                            Bs As - Argentina<br />
                            Tel: (02245) 482 000<br />
                            Horario de Atencion: de 8 a 20 HS</span>
                    </aside>
                    <div className="home-main">
                        <h2 className="subtitulo">Salud para todos</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum odit. Nemo aut
                            quibusdam
                            ea nesciunt deleniti distinctio est necessitatibus asperiores sint ad enim quos repellendus
                            neque mollitia error laboriosam repudiandae quas. Est voluptatibus optio voluptates ratione
                            maxime nisi quae at nostrum inventore, ipsam numquam quos quis. Quidem, rerum ut.
                        </p>
                    </div>
                </section>
            </div>



            <section className="container">
                <div className="mosaics">
                    <div className="mosaic">
                        <a href="servicios.html">
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
                        <a href="servicios.html">
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
                        <a href="planes.html">
                            <div className="mosaic-content">
                                <div className="icons-group">
                                    <span><i className="fas fa-mobile-alt"></i></span>
                                    <span><i className="fas fa-user"></i></span>
                                    <span><i className="fas fa-thumbs-up"></i></span>
                                </div>
                                <h4>Asociate</h4>
                                <p className="mosaic-text">Elegi el plan que mas te convenga</p>
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

export default Home;