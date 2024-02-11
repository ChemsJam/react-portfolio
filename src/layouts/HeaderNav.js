import React from "react";
import { Link, NavLink } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>V</span>

        <h3>Tujan Alfaro WEB</h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/inicio">Inicio</Link>
          </li>

          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>

          <li>
            <Link to="/servicios">Servicios</Link>
          </li>

          <li>
            <Link to="/curriculum">Curriculum</Link>
          </li>

          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
