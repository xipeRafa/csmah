import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

export default function Navbar() {

    const [isActive, setIsActive] = useState(true);

    const windowWidth = window.innerWidth;

    const InWidth = () => {
        if (windowWidth < 999) {
            setIsActive(true);
        }
    };

    return (
        <div className="navBar">

            <NavLink to="/csmah" onClick={() => setIsActive(!isActive)} className="hamburger">
                <div className="menu-bar">
                    <div className="uno" />
                    <div className="dos" />
                    <div className="tres" />
                </div>
                <span className='menuX'>{isActive ? "MENU" : "✘"}</span>
            </NavLink>

            <div className={isActive ? "menu " : "menu display"} onClick={InWidth}>


                <NavLink to="/csmah" onClick={()=>window.scrollTo(0,0)}> Inicio </NavLink>

                <NavLink to="/csmah/comedor" onClick={()=>window.scrollTo(0,0)}> Comedor </NavLink>

                <NavLink to="/csmah/zonanueve" onClick={()=>window.scrollTo(0,0)}> Zona Nueve </NavLink>

                <NavLink to="/csmah/camsvi" onClick={()=>window.scrollTo(0,0)}> CAMSVI </NavLink>

                <NavLink to="/csmah/historial" onClick={()=>window.scrollTo(0,0)}> Historial </NavLink>

                <NavLink to="/csmah/eventos" onClick={()=>window.scrollTo(0,0)}> Eventos </NavLink>

                <NavLink to="/csmah/contacto" onClick={()=>window.scrollTo(0,0)}> Contacto </NavLink>


            </div>
        </div>
    );
}
