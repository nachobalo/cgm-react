import React from 'react'

const Profesional = ({ profesional }) => {

    return (
        <div key={profesional.id} className="profesional">
            <h4>{profesional.nombre_apellido}</h4>
            <div>{profesional.especialidad}</div>
        </div>

    );

}

export default Profesional;