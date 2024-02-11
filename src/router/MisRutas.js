import React from "react";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Inicio } from "../components/inicio";
import { Portafolio } from "../components/portafolio";
import { Servicios } from "../components/servicios";
import { Curriculum } from "../components/Curriculum";
import { Contacto } from "../components/Contacto";
import { HeaderNav } from "../layouts/HeaderNav";
import { Footer } from "../layouts/Footer"
export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* HEADER Y NAVEGACIÓN */}

      <HeaderNav />

      {/* CONTENIDO CENTRAL */}
      <section className="content">

      </section>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      {/* FOOTER */}

      <Footer />

    </BrowserRouter>
  );
};
