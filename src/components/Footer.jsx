import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (       
    <div className="w-full bg-gray-800">
          
      <div className="p-3 w-full text-lg ">
        <span className="text-gray-500">|</span>
          <a className="ml-3 text-green-500 hover:text-white" href="#HomeLink">Home</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-green-500 hover:text-white" href="#">Arrepentimiento de Servicios</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-green-500 hover:text-white" href="#testimonioLink">Testimonios</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-green-500 hover:text-white" href="#contactoLink">Contacto</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-green-500 hover:text-white" href="#">Nosotros</a>
        <span className="ml-3 text-gray-500">|</span>
      </div>
          
      <div className="w-full p-3 mb-2 flex justify-center text-gray-400">
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter className="h-12 w-12 hover:text-blue-500 transition-transform hover:scale-125 duration-500" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebook className="h-12 w-12 ml-6 hover:text-blue-700 transition-transform hover:scale-125 duration-500" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram className="h-12 w-12 ml-6 hover:text-pink-500 transition-transform hover:scale-125 duration-500" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <FaYoutube className="h-12 w-12 ml-6 hover:text-[red] transition-transform hover:scale-125 duration-500" />
        </a>
      </div>
   
      <div className="w-full p-3 bg-gray-900">
        <p className="items-center text-white">&copy; 2024 HealthStyle | Todos los derechos reservados</p>
      </div>
      
    </div> 
  );
};

export default Footer;
