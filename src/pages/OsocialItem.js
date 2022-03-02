import React from 'react';

const OsocialItem = ({sigla,nombre}) => {
  return (
    <div className='osocial'>
      {sigla} <br />
    <small>{nombre}</small>
    </div>

  );
}

export default OsocialItem;