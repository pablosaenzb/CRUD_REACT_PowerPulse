import React from 'react';
import { NavLink } from "react-router-dom"; 

const Header = () => {
  return (
    <header className="header">
      <div className="header_superior">
        <div className="logo">
          <img src="imagenes/logo_powerpulse.png" alt="Logo" />
        </div>
      </div>
      <div className="contenedor_menu">
        <div className="menu">
          <input type="checkbox" id="check_menu" />
          <label htmlFor="check_menu" id="label_check">
            <i className="fa-solid fa-bars icon_menu"></i>
          </label>
          <nav>
            
            <ul>
              <li><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined}><i className= "fa-solid fa-house" style={{ color: '#ffffff' }}></i> INICIO</NavLink></li>
              <li><NavLink to="/nosotros" className={({isActive}) => isActive ? "activo" : undefined}>NOSOTROS</NavLink></li>
              <li><NavLink to="/servicios" className={({isActive}) => isActive ? "activo" : undefined}>SERVICIOS</NavLink></li>
              <li><NavLink to="/productos" className={({isActive}) => isActive ? "activo" : undefined}>PRODUCTOS</NavLink></li> 
              <li><NavLink to="/contacto" className={({isActive}) => isActive ? "activo" : undefined}>CONTACTO</NavLink></li>
            </ul>
            
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;