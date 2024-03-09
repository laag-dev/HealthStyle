import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (       
    <div className="w-full bg-gray-800 ">
          
      <div className="p-3 w-full lg:text-lg xs:text-ms flex flex-wrap justify-center">
        <span className="text-gray-500">|</span>
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#">Home</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#costosLink">Costos de Servicios</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#testimonioLink">Testimonios</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#contactoLink">Contacto</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#nosotrosLink">Nosotros</a>
        <span className="ml-3 text-gray-500">|</span>
      </div>
          
      <div className="w-full p-3 mb-2 flex justify-center text-gray-400">
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter className="lg:h-12 lg:w-12 xs:h-8 xs:w-8 md:h-10 md:w-10 hover:text-blue-500 transition-transform hover:scale-125 duration-500"/>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebook className="lg:h-12 lg:w-12 xs:h-8 xs:w-8 md:h-10 md:w-10 ml-6 hover:text-blue-700 transition-transform hover:scale-125 duration-500"/>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram className="lg:h-12 lg:w-12 xs:h-8 xs:w-8 md:h-10 md:w-10 ml-6 hover:text-pink-500 transition-transform hover:scale-125 duration-500"/>
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <FaYoutube className="lg:h-12 lg:w-12 xs:h-8 xs:w-8 md:h-10 md:w-10 ml-6 hover:text-[red] transition-transform hover:scale-125 duration-500"/>
        </a>
      </div>
   
      <div className="w-full p-3 bg-gray-900 lg:text-lg xs:text-xs">
        <p className="items-center text-center text-white">&copy; 2024 HealthStyle | Todos los derechos reservados</p>
      </div>
      
    </div> 
  );
};

export default Footer;
