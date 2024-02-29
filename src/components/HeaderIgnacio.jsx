import "../index.css";
import { useState, useEffect } from "react";

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(false); // Close the menu when screen size is increased above sm breakpoint
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="bg-emerald-500 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0" >
        <div>
          <img className="h-10 pl-8" src="src\assets\healthstyleLogo.svg" alt="Healthstyle"></img>
        </div>
        <div className="sm:hidden">
          <button type="button" onClick={toggleMenu}>
            <img className="h-6" src="src\assets\burgerMenu.svg" alt="" />
          </button>
        </div>
      </div>
      {/* Conditionally render links based on menu state */}
      {menuOpen && (
        <div className="px-2 pt-2 pb-4 text-left">
          <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400" href="#">
            Ingresar
          </a>
          <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400" href="#">
            Comprar
          </a>
          <a className="block px-2 text-white font-semibold rounded hover:bg-emerald-400" href="#">
            Home
          </a>
          <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400" href="#">
            Servicios
          </a>
          <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400" href="#">
            Planes
          </a>
          <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400" href="#">
            Testimonios
          </a>
          <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400" href="#">
            Contacto
          </a>
        </div>
      )}
      {/* Always render links when the screen size is above the sm breakpoint */}
      <div className="hidden sm:flex px-2 pt-2 pb-4 text-left sm:p-0">
        <a className="block px-2 text-white font-semibold rounded hover:bg-emerald-400" href="#">
          Home
        </a>
        <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400 sm:mt-0 sm:ml-2" href="#">
          Servicios
        </a>
        <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400 sm:mt-0 sm:ml-2" href="#">
          Planes
        </a>
        <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400 sm:mt-0 sm:ml-2" href="#">
          Testimonios
        </a>
        <a className="mt-1 block px-2 text-white font-semibold rounded hover:bg-emerald-400 sm:mt-0 sm:ml-2" href="#">
          Contacto
        </a>
        
      </div>
      {/* Move cart and ingresar buttons here */}
      <div className="hidden sm:flex">
      <button className="relative">
  <img className="h-6 transition duration-300 transform hover:scale-110" src="src\assets\cart-shopping-solid.svg" alt="" />
</button>
        <button className="text-white font-bold ml-8 mr-8 border-solid border-2 rounded-2xl p-2 hover:bg-emerald-400">Ingresar</button>
      </div>
    </header>
  );
};

export default MainHeader;
