import React from 'react';

const HomePage = () => {
  return (
    <div>
      <section className="flyer-section">
        <img src="imagenes/flyer_1.png" alt="powerpulse_flyer" />
      </section>

      <div className="contenedor_bloques">
        <div className="view view-first">
          <img src="imagenes/view_fuentes.jpg" alt="Fuentes de Poder" />
          <div className="mask">
            <h2>Fuentes de Poder</h2>
            <p>
              Fuentes de poder, auténticos pilares de confiabilidad y eficiencia para tus dispositivos electrónicos. Nuestros modelos están diseñados para brindar una alimentación estable y segura.
            </p>
            <a href="productos.html" className="info">Ver productos</a>
          </div>
        </div>
        <div className="view view-first">
          <img src="imagenes/view_procesadores.jpg" alt="Procesadores" />
          <div className="mask">
            <h2>Procesadores</h2>
            <p>
              La potencia de los procesadores es el motor que impulsa la velocidad y eficiencia de cualquier dispositivo informático.
            </p>
            <a href="productos.html" className="info">Ver productos</a>
          </div>
        </div>
        <div className="view view-first">
          <img src="imagenes/view_gabinetes.jpg" alt="Gabinetes" />
          <div className="mask">
            <h2>Gabinetes</h2>
            <p>
              Te invitamos a descubrir nuestra excepcional gama de gabinetes, la combinación perfecta de funcionalidad y estilo para tus equipos electrónicos.
            </p>
            <a href="productos.html" className="info">Ver productos</a>
          </div>
        </div>
      </div>

      <br/><br/>

      <section className="banner">
        <div className="contenido_banner">
          <p className="titulo_banner">Estamos para ayudarte</p>
          <a className="boton-contactar" href="contacto.html">Contactar</a>
        </div>
      </section>

      <br/>

      <h2>Medios de pago</h2>
      
      <section className="contenedor_pagos">
        <div className="pagos">
          <div className="pagos_imagenes_izquierda">
            <img src="imagenes/pagos_inicio.png" alt="Medios de pago 1" />
          </div>
          <div className="pagos_imagenes_derecha">
            <img src="imagenes/pagos_inicio2.png" alt="Medios de pago 2" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;