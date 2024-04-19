import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../componentes/novedades/NovedadItem';

const ProductosPage = () => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://localhost:3000/api/novedades');
        setNovedades(response.data);
      } catch (error) {
        console.error('Error al cargar las novedades:', error);
      } finally {
        setLoading(false);
      }
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
        <h2>NUESTROS PRODUCTOS</h2>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        novedades.map(item => <NovedadItem key={item.id}
          nombre={item.nombre} marca={item.marca} precio={item.precio}
          observaciones={item.observaciones} imagen={item.imagen} body={item.cuerpo} />)
      )}


        <div className="listas_productos">
          <div className="productos">
            <img src="imagenes/productos/productos_1.png" alt="" />
            <h3>AMD Ryzen 5 5600G</h3>
            <div className="price">$450.000</div>
            <div className="boton">
              <a href="#" className="carrito">Agregar al carrito</a>
            </div>
          </div>
          <div className="productos">
            <img src="imagenes/productos/productos_2.png" alt="" />
            <h3>AMD Ryzen 7 5700G</h3>
            <div className="price">$629.000</div>
            <div className="boton">
              <a href="#" className="carrito">Agregar al carrito</a>
            </div>
          </div>
          <div className="productos">
            <img src="imagenes/productos/productos_3.png" alt="" />
            <h3>Intel Core i7-2600K</h3>
            <div className="price">$690.000</div>
            <div className="boton">
              <a href="#" className="carrito">Agregar al carrito</a>
            </div>
          </div>
          <div className="productos">
            <img src="imagenes/productos/productos_4.png" alt="" />
            <h3>Intel Core i5-3470S</h3>
            <div className="price">$495.000</div>
            <div className="boton">
              <a href="#" className="carrito">Agregar al carrito</a>
            </div>
          </div>
          <div className="productos">
            <img src="imagenes/productos/productos_5.png" alt="" />
            <h3>Gabinete YeYian HAIZEN 2500</h3>
            <div className="price">$8.000</div>
            <div className="boton">
              <a href="#" className="carrito">Agregar al carrito</a>
            </div>
          </div>
          <div className="productos">
            <img src="imagenes/productos/productos_6.png" alt="" />
            <h3>Gabinete X616 Raidmax</h3>
            <div className="price">$12.000</div>
            <div className="boton">
              <a href="#" className="carrito">Agregar al carrito</a>
            </div>
          </div>
          <div className="productos">
            <img src="imagenes/productos/productos_7.png" alt="" />
            <h3>Gabinete Shenlong GT-503</h3>
            <div className="precio">$40.000</div>
            <div className="boton">
              <a href="#" className="carrito">Agregar al carrito</a>
            </div>
          </div>
          <div className="productos">
            <img src="imagenes/productos/productos_8.png" alt="" />
            <h3>Gabinete Raidmax S811tb</h3>
            <div className="price">$44.000</div>
            <div className="boton">
              <a href="#" className="carrito">Agregar al carrito</a>
            </div>
          </div>
          <div className="productos">
            <img src="imagenes/productos/productos_9.png" alt="" />
            <h3>Corsair Cx750f 750w</h3>
            <div className="price">$35.000</div>
            <div className="boton">
              <a href="#" className="carrito">Agregar al carrito</a>
            </div>
          </div>
          <div className="productos">
            <img src="imagenes/productos/productos_10.png" alt="" />
            <h3>Fuente 600w HBP600-GS</h3>
            <div className="price">$490.00</div>
            <div className="boton">
              <a href="#" className="carrito">Agregar al carrito</a>
            </div>
          </div>
          <div className="productos">
            <img src="imagenes/productos/productos_11.png" alt="" />
            <h3>Corsair RM1000e 750w</h3>
            <div className="price">$90.000</div>
            <div className="boton">
              <a href="#" className="carrito">Agregar al carrito</a>
            </div>
          </div>
          <div className="productos">
            <img src="imagenes/productos/productos_12.png" alt="" />
            <h3>Sentey X Plus 725W</h3>
            <div className="price">$2290.00</div>
            <div className="boton">
              <a href="#" className="carrito">Agregar al carrito</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductosPage;