import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Profesional from './Profesional';
import Loader from '../components/layout/Loader';
import '../styles/components/pages/Staff.css'




const Staff = (props) => {

    const [loading, setLoading] = useState(false);
    const [profesionales, setProfesionales] = useState([]);


    const getEspecialidades = async () => {
        setLoading(true);
        const res = await axios.get('http://localhost:3000/api/profesionales');
        setProfesionales(res.data);
        setLoading(false);
    }
    useEffect(() => {
        getEspecialidades();
    }, []);


    return (
        <main>
            <section id="staff" className="container">


                <h3 className="titulo">Staff Profesional</h3>

                <div className="profesionales">
                    {
                    loading
                        ? <Loader />
                        : profesionales.map((prof) => <Profesional key={prof.id} profesional={prof} />)
                }
                </div>
            </section>
        </main>

    );

}





export default Staff;