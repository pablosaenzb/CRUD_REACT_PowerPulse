import React from 'react';

const ServiciosPage = () => {
    return (
      <main className="holder">
        <h2>Nuestros servicios</h2>
        <div className="servicios2">
          <img src="imagenes/servicio1.png" alt="Imagen de Armado de PC personalizada" />
          <div className="info_servicios">
            <h4>Armado de PC personalizada</h4>
            <p>En nuestro servicio de ensamblaje de PCs personalizadas, nos enorgullece utilizar los insumos más vanguardistas y novedosos disponibles en el mercado. Cada computadora que construimos es un testimonio de innovación y rendimiento, ya que seleccionamos cuidadosamente componentes de última generación, desde las potentes unidades de procesamiento hasta las tarjetas gráficas de última tecnología.</p>
          </div>
        </div>
        <div className="servicios2">
          <img src="imagenes/servicio2.png" alt="Imagen de Armado de PC Gamer y Stream" />
          <div className="info_servicios">
            <h4>Armado de PC Gamer y Stream</h4>
            <p>En nuestro servicio de ensamblaje de PCs orientadas al gaming y la transmisión en vivo, nos enorgullece emplear los componentes más avanzados del mercado, con un enfoque particular en tarjetas gráficas de alta resolución. Cada sistema que construimos es una manifestación de excelencia en gráficos y rendimiento, ya que seleccionamos minuciosamente las tarjetas gráficas de última tecnología, diseñadas para proporcionar una experiencia de juego inmersiva y una transmisión de alta calidad.</p>
          </div>
        </div>
        <div className="servicios2">
          <img src="imagenes/servicio3.png" alt="Imagen de Armado de PC Hogar y Oficina" />
          <div className="info_servicios">
            <h4>Armado de PC Hogar y Oficina</h4>
            <p>Nuestro servicio de armado de PCs para uso en hogar y oficina se distingue por su velocidad, practicidad y tamaño optimizado. Cada sistema que construimos está diseñado pensando en la eficiencia y la comodidad de nuestros clientes. Con componentes cuidadosamente seleccionados, garantizamos que estas PCs se adapten perfectamente a las necesidades cotidianas de productividad y entretenimiento en el hogar y en el entorno de trabajo. Nuestra prioridad es ofrecer sistemas compactos y ágiles que se integren sin problemas en cualquier espacio, facilitando la vida diaria de nuestros clientes.</p>
          </div>
        </div>
      </main>
    );
  };
  
  export default ServiciosPage;
