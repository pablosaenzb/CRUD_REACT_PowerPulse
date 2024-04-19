import React from 'react';

const NovedadItem = (props) => {
    const { nombre, marca, precio, observaciones, imagen, body} = props;

    return (
        <div className="novedades">
         <h1>{nombre}</h1>
         <h2>{marca}</h2>
         <h2>{precio}</h2>
         <h2>{observaciones}</h2>
         <img src={imagen} />
         <div dangerouslySetInnerHTML={{ __html:body}}/>
         <hr/>
        </div>
        );
}

export default NovedadItem;