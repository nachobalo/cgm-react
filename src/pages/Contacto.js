import React, { useState } from 'react';
import axios from 'axios'
import Loader from '../components/layout/Loader';
import '../styles/components/pages/Contacto.css';

const initForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
}

const Contacto = (props) => {


    const [form, setForm] = useState(initForm);
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');


    const handleChangeForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', form);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setForm(initForm);
        }
    }




    return (
        <main>
            <h1 className="h1">Clínica Gamarra Mendoza</h1>
            <section className="container contacto">
                <h2 className="titulo">Contacto</h2>
                <h3 className="titulo">Nos gusta saber de vos</h3>
                <div className="flex">
                    <div className="formulario">
                        <form onSubmit={handleSubmit} >
                            <div className="input-group">
                                <input value={form.nombre} type="text" onChange={handleChangeForm} name='nombre' placeholder="Tu nombre" required />
                            </div>
                            <div className="input-group">
                                <input value={form.email} type="email" name='email' onChange={handleChangeForm} placeholder="Tu email" required />
                            </div>
                            <div className="input-group">
                                <input value={form.telefono} type="text" name='telefono' onChange={handleChangeForm} placeholder="Telefono (0xx 15 xxxxxxxx)" />
                            </div>
                            <div className="input-group">
                                <textarea value={form.mensaje} onChange={handleChangeForm} rows="10" name='mensaje'></textarea>
                            </div>
                            {sending ? <Loader /> : <button>Enviar</button>}

                            {msg && <p>{msg}</p> }
                        </form>
                    </div>
                    <div className="tel-email">
                        <div className="telefonos">
                            <h3>Telefonos</h3>
                            <span>Emergencias: 02245 440000</span>
                            <span>Quiero Asociarme: 02245 440001</span>
                            <span>Turnos: 02245 440003</span>
                            <span>Logistica y traslados: 02245 440001</span>
                        </div>
                        <div className="email">
                            <h3>Correo Electronico</h3>
                            <span>Consultas: info@cgm.org.ar</span>
                            <span>Provedores: provedores@cgm.org.ar</span>
                            <span>Traslados: traslados@cgm.org.ar</span>
                        </div>
                    </div>

                </div>
                <div className="mapa">
                    <h3>Dirección</h3>
                    <p>Visitanos en Av 25 de Mayo 555. <br /> Castelli (7114). <br /> Buenos Aires - Argentina.</p>
                    <iframe
                        title='ubicacion' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6448.208872246342!2d-57.80782728435249!3d-36.090942130800876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9599ae38b0600e3b%3A0x76be238779a796a3!2sAv.%2025%20de%20Mayo%20555%2C%20Castelli%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1637102195769!5m2!1ses-419!2sar"
                        width="100%" allowFullScreen="" loading="lazy">
                    </iframe>
                </div>
            </section>
        </main>
    );

}

export default Contacto;