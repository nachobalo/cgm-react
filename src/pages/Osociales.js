import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OsocialItem from './OsocialItem';
import Loader from '../components/layout/Loader';
import Frecuentes from '../components/layout/Frecuentes';
import '../styles/components/pages/Osociales.css'



const Osociales = (props) => {

    const [loading, setLoading] = useState(false);
    const [osociales, setOsociales] = useState([]);

    const getOsociales = async () => {
        setLoading(true);
        const res = await axios.get('http://localhost:3000/api/osociales');
        setOsociales(res.data);
        setLoading(false);
    }

    useEffect(() => {
        getOsociales();
    }, []);


    return (

        <main>
            <section id="cobertura" className="container">

                <h2 className="titulo">Cobertura Médica</h2>
                <h3 className="subtitulo">Trabajamos con <b>obras sociales</b> y <b>mutuales</b></h3>

                <div className="osociales">

                    {loading
                        ? <Loader />
                        : osociales.map((os) => <OsocialItem key={os.id} sigla={os.sigla} nombre={os.nombre} />)
                    }
                </div>

            </section>
            <Frecuentes />
        </main>
    );

}

export default Osociales;