import React from 'react';

const OsocialItem = ({sigla,nombre}) => {
  return (
    <div>{sigla} <br />
    <small>{nombre}</small>
    </div>

  );
}

export default OsocialItem;