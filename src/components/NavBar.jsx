import "../index.css";
import { useState, useEffect } from "react";
import burgerMenu from "../assets/burgerMenu.svg";
import logo from  "../assets/1.svg";
import { Link} from "react-router-dom";

const NavBar = ({ openLoginModal, openRegistrationModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false); // Close the menu when screen size is increased above lg breakpoint
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="bg-[#216651] lg:flex lg:justify-between lg:px-4 lg:py-3 lg:items-center">
      <div className="flex items-center justify-between px-4 py-3 lg:p-0">
        <div>
          <img className="h-12 pl-8" src={logo} alt="Healthstyle"></img>
        </div>
        {/* Render burger menu button */}
        <div className="lg:hidden">
          <button type="button" onClick={toggleMenu}>
            <img className="h-6" src={burgerMenu} alt="" />
          </button>
        </div>
      </div>
      {/* Conditionally render links based on menu state */}
      {(menuOpen) && (
        <div className="px-2 pt-2 pb-4 text-left">
          <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-gray-500" href="#">
            Ingresar
          </a>
          <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-gray-500" href="#costosLink">
            Comprar
          </a>
          <a className="block px-2 text-white font-semibold rounded hover:bg-gray-500" href="#">
            Home
          </a>
          <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400" href="#serviciosLink">
          Nosotros
          </a>
          <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400" href="#aboutUsLink">
            Servicios
          </a>
          <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400" href="#resultadosLink">
           Resultados
          </a>
          <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400" href="#recetasLink">
            Recetas
          </a>
          <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400" href="#testimonioLink">
           Testimonios
          </a>
          <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400" href="#costosLink">
            Planes
          </a>
          <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400" href="#contactoLink">
            Contacto
          </a>
        </div>
      )}
      {/* Always render links when the screen size is above the lg breakpoint */}
      <div className="hidden text-sm lg:flex px-2 pt-2 pb-4 text-left lg:p-0">
        <a className="block px-2 text-white font-semibold rounded hover:bg-gray-400" href="#">
          Home
        </a>
        <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-gray-400 lg:mt-0 lg:ml-2" href="#aboutUsLink">
          Nosotros
        </a>
        <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-gray-400 lg:mt-0 lg:ml-2" href="#serviciosLink">
        Servicios
        </a>
        <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-gray-400 lg:mt-0 lg:ml-2" href="#resultadosLink">
          Resultados
        </a>
        <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-gray-400 lg:mt-0 lg:ml-2" href="#recetasLink">
          Recetas
        </a>
        <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-gray-400 lg:mt-0 lg:ml-2" href="#testimonioLink">
         Testimonios
        </a>
        <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-gray-400 lg:mt-0 lg:ml-2" href="#costosLink">
          Planes
        </a>
        <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-gray-400 lg:mt-0 lg:ml-2" href="#contactoLink">
          Contacto
        </a>
      </div>
      {/* Move cart and ingresar buttons here */}
      <div className="hidden lg:flex">
        
        <a className="text-white font-bold ml-8 mr-8 border-solid border-2 rounded-2xl p-2 hover:bg-gray-400" onClick={openLoginModal}><Link to="/login">Ingresar</Link></a>
        
        <a className="text-white font-bold ml-8 mr-8 border-solid border-2 rounded-2xl p-2 hover:bg-gray-400" onClick={openRegistrationModal}><Link to="/registration">Registro</Link></a>
        
      </div>
    </header>
  );
};

export default NavBar;

