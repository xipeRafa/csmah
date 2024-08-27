

import "./css/styles.css";

import { Routes, Route } from "react-router-dom";


import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Inicio from "./components/inicio/Inicio";
import Comedor from "./components/comedor/Comedor";
import ZonaNueve from "./components/zonanueve/ZonaNueve";
import CAMSVI from "./components/camsvi/CAMSVI";
import Historial from "./components/historial/Historial";
import Eventos from "./components/eventos/Eventos";
import Contacto from "./components/contacto/Contacto";



function App() {


  return (
    <div className="containerApp">

      <Navbar />


           
               
                

      <Routes>
          <Route path="/csmah" element={<Inicio />} />
          <Route path="/csmah/comedor" element={<Comedor />} />
          <Route path="/csmah/zonanueve" element={<ZonaNueve />} />
          <Route path="/csmah/camsvi" element={<CAMSVI />} />
          <Route path="/csmah/historial" element={<Historial />} />
          <Route path="/csmah/eventos" element={<Eventos />} />
          <Route path="/csmah/contacto" element={<Contacto />} />

          <Route path="*" element={<Inicio />} />
      </Routes>

      

      <Footer />

    </div>
  );
}

export default App;



