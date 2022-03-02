import React from "react";
import '../styles/components/pages/Home.css';
import Frecuentes from "../components/layout/Frecuentes";

const Home = props => {

    return (
        <main>
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

            <Frecuentes />


        </main>
    );
}

export default Home;