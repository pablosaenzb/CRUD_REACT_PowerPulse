import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../componentes/novedades/NovedadItem';

const ProductosPage = () => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {

        setLoading(true);
        const response = await axios.get('http://localhost:3000/api/novedades');
        setNovedades(response.data);
        setLoading(false);
  
    };

    cargarNovedades();
  }, []);


  return (
    <>
      <section className="banner">
        <div className="contenido_banner2">
          <p className="titulo_banner">Estamos para ayudarte</p>
          <a className="boton-contactar" href="contacto.html">Contactar</a>
        </div>
      </section>

      <div className="contenedor_productos">
      <h2 style={{ color: 'white' }}>NUESTROS PRODUCTOS</h2>
      <br></br>
      <br></br>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        novedades.map(item => <NovedadItem key={item.id}
          nombre={item.nombre} marca={item.marca} precio={item.precio} observaciones={item.observaciones} 
          imagen={item.imagen} body={item.cuerpo} />)
      )}
      </div>
    </>
  );
};

export default ProductosPage;