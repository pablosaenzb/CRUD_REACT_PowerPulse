import React from 'react';

const NosotrosComponent = () => {
  return (
    <>
      <div className="contenedor_nosotros">
        <div className="contenedor1">
          <div className="texto">
            <p>
              Bienvenido a <b>POWERPULSE,</b> tu fuente confiable de insumos para el armado de computadoras.

              En <b>POWERPULSE,</b> estamos comprometidos a proporcionar a nuestros clientes los componentes de la más alta calidad para la construcción y optimización de sistemas informáticos. Desde gabinetes ergonómicos y elegantes hasta potentes procesadores y memorias RAM de vanguardia, ofrecemos una amplia gama de productos que satisfacen las necesidades tanto de los aficionados entusiastas como de los profesionales de la tecnología.
            </p>
            <br />
            <h3>¿Por qué elegir POWERPULSE?</h3>
            <p>
              <b>-Calidad Garantizada:</b> Trabajamos en estrecha colaboración con los principales fabricantes de la industria para asegurar que nuestros productos cumplan con los más altos estándares de calidad y rendimiento.
              <br />
              <b>-Asesoramiento Profesional:</b> Nuestro equipo de expertos está dedicado a proporcionar asesoramiento personalizado para ayudarte a seleccionar los componentes adecuados para tus necesidades específicas.
              <br />
              <b>-Variedad de Productos:</b> Desde procesadores de última generación hasta gabinetes con diseños innovadores, nuestra amplia selección de productos te ofrece opciones para satisfacer cualquier requerimiento.
              <br />
              <b>-Precios Competitivos:</b> Creemos en ofrecer productos de calidad a precios justos y competitivos, para que puedas obtener el máximo valor por tu inversión.
            </p>
            <br />
          </div>
        </div>
        <br />
        <div className="contenedor2">
          <div className="mision">
            <h3>MISION</h3>
            Nuestra misión en <b>POWERPULSE</b> es facilitar la creación y mejora de sistemas informáticos, brindando acceso a los últimos avances tecnológicos a precios asequibles. Nos esforzamos por ofrecer productos de calidad, un servicio excepcional y asesoramiento experto para asegurar que cada cliente encuentre exactamente lo que necesita.
          </div>
          <div className="vision">
            <h3>VISION</h3>
            En <b>POWERPULSE,</b> nos visualizamos como líderes en la industria de insumos para la construcción de sistemas informáticos, siendo reconocidos por nuestra dedicación a la excelencia y nuestra pasión por la innovación tecnológica. Nos esforzamos por ser el destino preferido de aquellos que buscan componentes de alta calidad y soluciones avanzadas para sus necesidades informáticas.
          </div>
        </div>
      </div>
      <br /><br />
      <div className="imagen">
        <img src="imagenes/logo_nosotros.png" alt="Logo Nosotros" className="imagen-nosotros" />
      </div>
      <br /><br />
    </>
  );
};

export default NosotrosComponent;